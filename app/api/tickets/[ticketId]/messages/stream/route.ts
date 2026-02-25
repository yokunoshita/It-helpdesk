import prisma from "@/lib/prisma";
import { subscribeTicketMessages } from "@/lib/realtime";

export const runtime = "nodejs";

const encoder = new TextEncoder();

const toSseMessage = (event: string, data: unknown) =>
  encoder.encode(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`);

export async function GET(
  req: Request,
  { params }: { params: Promise<{ ticketId: string }> }
) {
  const { ticketId } = await params;
  const { searchParams } = new URL(req.url);
  const afterParam = searchParams.get("after");

  const ticket = await prisma.ticket.findFirst({
    where: {
      OR: [{ id: ticketId }, { code: ticketId }],
    },
    select: { id: true },
  });

  if (!ticket) {
    return new Response("Ticket not found", { status: 404 });
  }

  let lastCursor = afterParam && !Number.isNaN(Date.parse(afterParam))
    ? new Date(afterParam)
    : new Date(0);
  let heartbeat: ReturnType<typeof setInterval> | null = null;
  let unsubscribe: (() => void) | null = null;
  let pollFallback: ReturnType<typeof setInterval> | null = null;
  let isClosed = false;
  let abortHandler: (() => void) | null = null;

  const cleanup = () => {
    if (abortHandler) {
      req.signal.removeEventListener("abort", abortHandler);
      abortHandler = null;
    }
    if (heartbeat) {
      clearInterval(heartbeat);
      heartbeat = null;
    }
    if (unsubscribe) {
      unsubscribe();
      unsubscribe = null;
    }
    if (pollFallback) {
      clearInterval(pollFallback);
      pollFallback = null;
    }
  };

  const safeEnqueue = (
    controller: ReadableStreamDefaultController<Uint8Array>,
    chunk: Uint8Array
  ) => {
    if (isClosed || req.signal.aborted) return false;
    try {
      controller.enqueue(chunk);
      return true;
    } catch {
      isClosed = true;
      cleanup();
      return false;
    }
  };

  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      abortHandler = () => {
        isClosed = true;
        cleanup();
      };
      req.signal.addEventListener("abort", abortHandler, { once: true });

      if (!safeEnqueue(controller, toSseMessage("connected", { ok: true }))) {
        return;
      }

      const missed = await prisma.ticketMessage.findMany({
        where: {
          ticketId: ticket.id,
          sender: { in: ["user", "admin"] },
          createdAt: { gt: lastCursor },
        },
        orderBy: { createdAt: "asc" },
      });

      for (const message of missed) {
        if (!safeEnqueue(controller, toSseMessage("message", message))) {
          return;
        }
        lastCursor = message.createdAt;
      }

      heartbeat = setInterval(() => {
        if (isClosed || req.signal.aborted) return;
        safeEnqueue(controller, encoder.encode(": ping\n\n"));
      }, 20000);

      unsubscribe = subscribeTicketMessages(ticket.id, (message) => {
        if (isClosed || req.signal.aborted) return;
        if (message.sender !== "user" && message.sender !== "admin") return;
        if (message.createdAt > lastCursor) {
          lastCursor = message.createdAt;
        }
        safeEnqueue(controller, toSseMessage("message", message));
      });

      // Fallback polling for environments where in-memory pub/sub doesn't cross workers.
      pollFallback = setInterval(async () => {
        if (isClosed || req.signal.aborted) return;
        try {
          const updates = await prisma.ticketMessage.findMany({
            where: {
              ticketId: ticket.id,
              sender: { in: ["user", "admin"] },
              createdAt: { gt: lastCursor },
            },
            orderBy: { createdAt: "asc" },
          });

          for (const message of updates) {
            if (!safeEnqueue(controller, toSseMessage("message", message))) {
              return;
            }
            if (message.createdAt > lastCursor) {
              lastCursor = message.createdAt;
            }
          }
        } catch {
          // Ignore transient DB errors in stream fallback.
        }
      }, 3000);
    },
    cancel() {
      isClosed = true;
      cleanup();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
    },
  });
}

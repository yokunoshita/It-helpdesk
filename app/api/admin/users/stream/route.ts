import { getAdminSessionFromRequest } from "@/lib/admin-auth";
import prisma from "@/lib/prisma";
import {
  AdminPresenceEvent,
  subscribeAdminPresenceEvents,
} from "@/lib/realtime";

export const runtime = "nodejs";

const encoder = new TextEncoder();

const toSseMessage = (event: string, data: unknown) =>
  encoder.encode(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`);

const toPresenceEvent = (admin: {
  id: string;
  username: string;
  name: string;
  active: boolean;
  isOnline: boolean;
  createdAt: Date;
  updatedAt: Date;
}): AdminPresenceEvent => ({
  id: `presence:${admin.id}:${admin.updatedAt.toISOString()}`,
  adminId: admin.id,
  username: admin.username,
  name: admin.name,
  active: admin.active,
  isOnline: admin.isOnline,
  createdAt: admin.createdAt.toISOString(),
  updatedAt: admin.updatedAt.toISOString(),
});

export async function GET(req: Request) {
  const session = getAdminSessionFromRequest(req);
  if (!session) {
    return new Response("unauthorized", { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const afterParam = searchParams.get("after");
  let lastCursor =
    afterParam && !Number.isNaN(Date.parse(afterParam))
      ? new Date(afterParam)
      : new Date(0);

  const emitted = new Set<string>();
  let heartbeat: ReturnType<typeof setInterval> | null = null;
  let unsubscribe: (() => void) | null = null;
  let fallbackPoll: ReturnType<typeof setInterval> | null = null;
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
    if (fallbackPoll) {
      clearInterval(fallbackPoll);
      fallbackPoll = null;
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

  const emitEvent = (
    controller: ReadableStreamDefaultController<Uint8Array>,
    event: AdminPresenceEvent
  ) => {
    if (emitted.has(event.id)) return;
    if (!safeEnqueue(controller, toSseMessage("presence", event))) return;
    emitted.add(event.id);
    const eventDate = new Date(event.updatedAt);
    if (!Number.isNaN(eventDate.getTime()) && eventDate > lastCursor) {
      lastCursor = eventDate;
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

      const initial = await prisma.adminUser.findMany({
        where: { updatedAt: { gt: lastCursor } },
        orderBy: { updatedAt: "asc" },
        select: {
          id: true,
          username: true,
          name: true,
          active: true,
          isOnline: true,
          createdAt: true,
          updatedAt: true,
        },
        take: 300,
      });

      for (const admin of initial) {
        emitEvent(controller, toPresenceEvent(admin));
      }

      heartbeat = setInterval(() => {
        if (isClosed || req.signal.aborted) return;
        safeEnqueue(controller, encoder.encode(": ping\n\n"));
      }, 20000);

      unsubscribe = subscribeAdminPresenceEvents((event) => {
        if (isClosed || req.signal.aborted) return;
        emitEvent(controller, event);
      });

      fallbackPoll = setInterval(async () => {
        if (isClosed || req.signal.aborted) return;
        try {
          const updates = await prisma.adminUser.findMany({
            where: { updatedAt: { gt: lastCursor } },
            orderBy: { updatedAt: "asc" },
            select: {
              id: true,
              username: true,
              name: true,
              active: true,
              isOnline: true,
              createdAt: true,
              updatedAt: true,
            },
            take: 200,
          });

          for (const admin of updates) {
            emitEvent(controller, toPresenceEvent(admin));
          }
        } catch {
          // Ignore transient polling errors.
        }
      }, 4000);
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

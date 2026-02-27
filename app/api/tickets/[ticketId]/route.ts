import { NextResponse } from "next/server";
import { getAdminSessionFromRequest } from "@/lib/admin-auth";
import prisma from "@/lib/prisma";
import { toMessageResponse } from "@/lib/message-shape";
import { signMessageAttachmentUrlWithSdk } from "@/lib/s3-upload-sdk";

export async function GET(
  req: Request,
  context: { params: Promise<{ ticketId: string }> }
) {
  const { ticketId } = await context.params;
  const { searchParams } = new URL(req.url);
  const includeMessages = searchParams.get("includeMessages") === "1";

  if (includeMessages) {
    const ticketWithMessages = await prisma.ticket.findFirst({
      where: {
        OR: [{ id: ticketId }, { code: ticketId }],
      },
      include: {
        messages: {
          where: {
            sender: { in: ["user", "admin"] },
          },
          include: {
            attachments: {
              orderBy: { createdAt: "asc" },
              take: 1,
            },
          },
          orderBy: { createdAt: "asc" },
        },
      },
    });

    if (!ticketWithMessages) {
      return NextResponse.json(
        { error: "Ticket not found" },
        { status: 404 }
      );
    }

    const messages = await Promise.all(
      ticketWithMessages.messages.map((message) =>
        signMessageAttachmentUrlWithSdk(toMessageResponse(message))
      )
    );

    return NextResponse.json({
      ...ticketWithMessages,
      messages,
    });
  }

  const ticket = await prisma.ticket.findFirst({
    where: {
      OR: [{ id: ticketId }, { code: ticketId }],
    },
  });

  if (!ticket) {
    return NextResponse.json(
      { error: "Ticket not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(ticket);
}

export async function PATCH(
  req: Request,
  context: { params: Promise<{ ticketId: string }> }
) {
  const session = getAdminSessionFromRequest(req);
  if (!session) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const { ticketId } = await context.params;
  const body: unknown = await req.json();

  const status =
    typeof body === "object" && body !== null && "status" in body
      ? (body as { status?: unknown }).status
      : undefined;

  const allowed = new Set(["OPEN", "IN_PROGRESS", "WAITING", "CLOSED"]);
  if (typeof status !== "string" || !allowed.has(status)) {
    return NextResponse.json(
      { error: "Valid status is required" },
      { status: 400 }
    );
  }

  const existing = await prisma.ticket.findFirst({
    where: {
      OR: [{ id: ticketId }, { code: ticketId }],
    },
    select: { id: true, status: true },
  });

  if (!existing) {
    return NextResponse.json(
      { error: "Ticket not found" },
      { status: 404 }
    );
  }

  const updateData: {
    status: "OPEN" | "IN_PROGRESS" | "WAITING" | "CLOSED";
    closedAt?: Date | null;
    feedbackRating?: number | null;
    feedbackSubmittedAt?: Date | null;
  } = {
    status: status as "OPEN" | "IN_PROGRESS" | "WAITING" | "CLOSED",
  };

  updateData.closedAt = status === "CLOSED" ? new Date() : null;
  if (status !== "CLOSED") {
    updateData.feedbackRating = null;
    updateData.feedbackSubmittedAt = null;
  }

  const nextStatus = status as "OPEN" | "IN_PROGRESS" | "WAITING" | "CLOSED";
  const [updated] = await prisma.$transaction([
    prisma.ticket.update({
      where: { id: existing.id },
      data: updateData,
    }),
    ...(existing.status !== nextStatus
      ? [
          prisma.ticketStatusHistory.create({
            data: {
              ticketId: existing.id,
              fromStatus: existing.status,
              toStatus: nextStatus,
              changedBy: session.name,
              note: "status updated via ticket route",
            },
          }),
        ]
      : []),
  ]);

  return NextResponse.json(updated);
}

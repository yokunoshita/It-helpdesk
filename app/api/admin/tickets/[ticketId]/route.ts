import { NextResponse } from "next/server";
import { getAdminSessionFromRequest } from "@/lib/admin-auth";
import prisma from "@/lib/prisma";
import { deriveTicketSlaState } from "@/lib/sla";
import { toMessageResponse } from "@/lib/message-shape";
import { signMessageAttachmentUrlWithSdk } from "@/lib/s3-upload-sdk";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ ticketId: string }> }
) {
  const session = getAdminSessionFromRequest(req);
  if (!session) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const { ticketId } = await params;

  const ticket = await prisma.ticket.findFirst({
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

  if (!ticket) {
    return NextResponse.json(
      { error: "Ticket not found" },
      { status: 404 }
    );
  }

  const reporterMeta = await prisma.ticketMessage.findFirst({
    where: {
      ticketId: ticket.id,
      sender: "system",
      message: {
        startsWith: "reporter_name:",
      },
    },
    orderBy: {
      createdAt: "asc",
    },
    select: {
      message: true,
    },
  });
  const reporterNameFromMeta = reporterMeta?.message
    ? reporterMeta.message.replace(/^reporter_name:/, "").trim()
    : null;

  const locationMeta = await prisma.ticketMessage.findFirst({
    where: {
      ticketId: ticket.id,
      sender: "system",
      message: {
        startsWith: "reporter_location:",
      },
    },
    orderBy: {
      createdAt: "asc",
    },
    select: {
      message: true,
    },
  });
  const reporterLocationFromMeta = locationMeta?.message
    ? locationMeta.message.replace(/^reporter_location:/, "").trim()
    : null;

  const reporterName = ticket.reporterName || reporterNameFromMeta;
  const reporterLocation = ticket.reporterLocation || reporterLocationFromMeta;

  const unreadUserMessages = await prisma.ticketMessage.count({
    where: {
      ticketId: ticket.id,
      sender: "user",
      createdAt: ticket.lastAdminReadAt
        ? { gt: ticket.lastAdminReadAt }
        : undefined,
    },
  });

  const messages = await Promise.all(
    ticket.messages.map((message) =>
      signMessageAttachmentUrlWithSdk(toMessageResponse(message))
    )
  );

  return NextResponse.json({
    ...ticket,
    messages,
    reporterName,
    reporterLocation,
    unreadUserMessages,
    isAssignedToMe: ticket.assignedAdminId === session.name,
    ...deriveTicketSlaState({
      status: ticket.status,
      firstReplyAt: ticket.firstReplyAt,
      responseDueAt: ticket.responseDueAt,
      resolveDueAt: ticket.resolveDueAt,
    }),
  });
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ ticketId: string }> }
) {
  const session = getAdminSessionFromRequest(req);
  if (!session) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const { ticketId } = await params;
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

  const ticket = await prisma.ticket.findFirst({
    where: {
      OR: [{ id: ticketId }, { code: ticketId }],
    },
    select: { id: true, status: true, assignedAdminId: true },
  });

  if (!ticket) {
    return NextResponse.json(
      { error: "Ticket not found" },
      { status: 404 }
    );
  }

  const nextStatus = status as "OPEN" | "IN_PROGRESS" | "WAITING" | "CLOSED";
  const now = new Date();
  const statusChanged = ticket.status !== nextStatus;
  const assignmentChanged = ticket.assignedAdminId !== session.name;

  const [updated] = await prisma.$transaction([
    prisma.ticket.update({
      where: { id: ticket.id },
      data: {
        status: nextStatus,
        closedAt: nextStatus === "CLOSED" ? now : null,
        assignedAdminId: session.name,
        assignedAt: now,
      },
    }),
    ...(statusChanged
      ? [
          prisma.ticketStatusHistory.create({
            data: {
              ticketId: ticket.id,
              fromStatus: ticket.status,
              toStatus: nextStatus,
              changedBy: session.name,
              note: "manual status update from admin dashboard",
            },
          }),
        ]
      : []),
    ...(assignmentChanged
      ? [
          prisma.ticketAssignmentHistory.create({
            data: {
              ticketId: ticket.id,
              fromAdminId: ticket.assignedAdminId,
              toAdminId: session.name,
              changedBy: session.name,
              trigger: "status_change",
            },
          }),
        ]
      : []),
  ]);

  return NextResponse.json(updated);
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ ticketId: string }> }
) {
  const session = getAdminSessionFromRequest(req);
  if (!session) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const { ticketId } = await params;

  const ticket = await prisma.ticket.findFirst({
    where: {
      OR: [{ id: ticketId }, { code: ticketId }],
    },
    select: { id: true, code: true },
  });

  if (!ticket) {
    return NextResponse.json(
      { error: "Ticket not found" },
      { status: 404 }
    );
  }

  await prisma.ticket.delete({
    where: { id: ticket.id },
  });

  return NextResponse.json({
    ok: true,
    deletedTicketId: ticket.id,
    deletedTicketCode: ticket.code,
  });
}

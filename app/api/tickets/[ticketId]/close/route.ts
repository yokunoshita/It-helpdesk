import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { publishAdminEvent } from "@/lib/realtime";

export async function POST(
  _req: Request,
  { params }: { params: Promise<{ ticketId: string }> }
) {
  const { ticketId } = await params;

  const ticket = await prisma.ticket.findFirst({
    where: {
      OR: [{ id: ticketId }, { code: ticketId }],
    },
    select: {
      id: true,
      status: true,
      feedbackRating: true,
      feedbackSubmittedAt: true,
    },
  });

  if (!ticket) {
    return NextResponse.json({ error: "Ticket not found" }, { status: 404 });
  }

  if (ticket.status === "CLOSED") {
    return NextResponse.json(
      {
        id: ticket.id,
        status: ticket.status,
        feedbackRating: ticket.feedbackRating,
        feedbackSubmittedAt: ticket.feedbackSubmittedAt,
      },
      { status: 200 }
    );
  }

  const updated = await prisma.ticket.update({
    where: { id: ticket.id },
    data: {
      status: "CLOSED",
      closedAt: new Date(),
    },
    select: {
      id: true,
      status: true,
      feedbackRating: true,
      feedbackSubmittedAt: true,
      closedAt: true,
    },
  });

  try {
    const ticketMeta = await prisma.ticket.findUnique({
      where: { id: updated.id },
      select: { code: true, title: true },
    });
    if (ticketMeta) {
      publishAdminEvent({
        id: `ticket_status_changed:${updated.id}:${updated.closedAt?.toISOString() || new Date().toISOString()}`,
        type: "ticket_status_changed",
        ticketId: updated.id,
        ticketCode: ticketMeta.code,
        title: ticketMeta.title,
        message: "Tiket diselesaikan oleh user.",
        createdAt: (updated.closedAt || new Date()).toISOString(),
        status: "CLOSED",
      });
    }
  } catch (error) {
    console.error("Failed to publish ticket_status_changed:", error);
  }

  return NextResponse.json(updated, { status: 200 });
}

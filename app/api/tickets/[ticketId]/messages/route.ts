import { NextResponse } from "next/server";
import { getAdminSessionFromRequest } from "@/lib/admin-auth";
import prisma from "@/lib/prisma";
import { publishAdminEvent, publishTicketMessage } from "@/lib/realtime";
import { toMessageResponse } from "@/lib/message-shape";
import { signMessageAttachmentUrlWithSdk } from "@/lib/s3-upload-sdk";

const DUPLICATE_WINDOW_MS = 2500;

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ ticketId: string }> }
) {
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

  const messages = await Promise.all(
    ticket.messages.map((message) =>
      signMessageAttachmentUrlWithSdk(toMessageResponse(message))
    )
  );

  return NextResponse.json(messages);
}

export async function POST(
  req: Request,
  { params }: { params: Promise<{ ticketId: string }> }
) {
  const { ticketId } = await params;
  const contentType = req.headers.get("content-type") || "";
  let sender: unknown;
  let message: unknown;
  let attachmentUrlInput: unknown;
  let attachmentCaptionInput: unknown;
  let attachmentMimeTypeInput: unknown;
  let attachmentFileNameInput: unknown;
  let attachmentSizeInput: unknown;

  if (contentType.includes("multipart/form-data")) {
    const form = await req.formData();
    sender = form.get("sender");
    message = form.get("message");
    attachmentUrlInput = form.get("attachmentUrl");
    attachmentCaptionInput = form.get("attachmentCaption");
    attachmentMimeTypeInput = form.get("attachmentMimeType");
    attachmentFileNameInput = form.get("attachmentFileName");
    attachmentSizeInput = form.get("attachmentSize");
  } else {
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { error: "Body request tidak valid. Gunakan JSON atau form-data." },
        { status: 400 }
      );
    }

    sender =
      typeof body === "object" && body !== null && "sender" in body
        ? (body as { sender?: unknown }).sender
        : undefined;
    message =
      typeof body === "object" && body !== null && "message" in body
        ? (body as { message?: unknown }).message
        : undefined;
    attachmentUrlInput =
      typeof body === "object" && body !== null && "attachmentUrl" in body
        ? (body as { attachmentUrl?: unknown }).attachmentUrl
        : undefined;
    attachmentCaptionInput =
      typeof body === "object" && body !== null && "attachmentCaption" in body
        ? (body as { attachmentCaption?: unknown }).attachmentCaption
        : undefined;
    attachmentMimeTypeInput =
      typeof body === "object" && body !== null && "attachmentMimeType" in body
        ? (body as { attachmentMimeType?: unknown }).attachmentMimeType
        : undefined;
    attachmentFileNameInput =
      typeof body === "object" && body !== null && "attachmentFileName" in body
        ? (body as { attachmentFileName?: unknown }).attachmentFileName
        : undefined;
    attachmentSizeInput =
      typeof body === "object" && body !== null && "attachmentSize" in body
        ? (body as { attachmentSize?: unknown }).attachmentSize
        : undefined;
  }

  const normalizedMessage =
    typeof message === "string" ? message.trim() : "";
  const attachmentUrl =
    typeof attachmentUrlInput === "string" && attachmentUrlInput.trim()
      ? attachmentUrlInput.trim()
      : null;
  const attachmentCaption =
    typeof attachmentCaptionInput === "string" && attachmentCaptionInput.trim()
      ? attachmentCaptionInput.trim()
      : null;
  const attachmentMimeType =
    typeof attachmentMimeTypeInput === "string" && attachmentMimeTypeInput.trim()
      ? attachmentMimeTypeInput.trim()
      : null;
  const attachmentFileName =
    typeof attachmentFileNameInput === "string" && attachmentFileNameInput.trim()
      ? attachmentFileNameInput.trim()
      : null;
  const attachmentSize =
    typeof attachmentSizeInput === "number" &&
    Number.isFinite(attachmentSizeInput) &&
    attachmentSizeInput > 0
      ? Math.floor(attachmentSizeInput)
      : null;

  if (
    (sender !== "user" && sender !== "admin") ||
    (!normalizedMessage && !attachmentUrl)
  ) {
    return NextResponse.json(
      { error: "sender dan message/attachment wajib diisi" },
      { status: 400 }
    );
  }

  if (attachmentUrl) {
    try {
      const parsed = new URL(attachmentUrl);
      if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
        throw new Error("invalid protocol");
      }
    } catch {
      return NextResponse.json(
        { error: "attachmentUrl tidak valid." },
        { status: 400 }
      );
    }
  }

  const adminSession = sender === "admin" ? getAdminSessionFromRequest(req) : null;
  if (sender === "admin" && !adminSession) {
    return NextResponse.json(
      { error: "unauthorized" },
      { status: 401 }
    );
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

  if (sender === "user" && ticket.status === "CLOSED") {
    return NextResponse.json(
      { error: "Tiket sudah selesai. Anda tidak bisa mengirim pesan lagi." },
      { status: 409 }
    );
  }

  if (sender === "admin") {
    const duplicateSince = new Date(Date.now() - DUPLICATE_WINDOW_MS);
    const candidates = await prisma.ticketMessage.findMany({
      where: {
        ticketId: ticket.id,
        sender: "admin",
        message: normalizedMessage,
        createdAt: { gte: duplicateSince },
      },
      include: {
        attachments: {
          orderBy: { createdAt: "asc" },
          take: 1,
        },
      },
      orderBy: { createdAt: "desc" },
      take: 10,
    });
    const existing = candidates.find((candidate) => {
      const mapped = toMessageResponse(candidate);
      return (
        (mapped.attachmentUrl || null) === attachmentUrl &&
        (mapped.attachmentCaption || null) === attachmentCaption
      );
    });
    if (existing) {
      return NextResponse.json(toMessageResponse(existing), { status: 200 });
    }
  }

  let newMessage;
  try {
    newMessage = await prisma.ticketMessage.create({
      data: {
        ticketId: ticket.id,
        sender,
        message: normalizedMessage,
        attachments: attachmentUrl
          ? {
              create: {
                url: attachmentUrl,
                caption: attachmentCaption,
                mimeType: attachmentMimeType,
                fileName: attachmentFileName,
                size: attachmentSize,
              },
            }
          : undefined,
      },
      include: {
        attachments: {
          orderBy: { createdAt: "asc" },
          take: 1,
        },
      },
    });
  } catch (error) {
    console.error("Failed to create ticket message:", error);
    return NextResponse.json(
      { error: "Gagal menyimpan pesan ke database." },
      { status: 500 }
    );
  }

  if (sender === "admin") {
    const nextStatus =
      ticket.status === "OPEN" ? ("IN_PROGRESS" as const) : ticket.status;
    const nextAssignee = adminSession?.name || ticket.assignedAdminId;
    const statusChanged = nextStatus !== ticket.status;
    const assignmentChanged = nextAssignee !== ticket.assignedAdminId;
    const now = new Date();

    await prisma.$transaction(async (tx) => {
      await tx.ticket.update({
        where: { id: ticket.id },
        data: {
          firstReplyAt: ticket.firstReplyAt || now,
          status: nextStatus,
          assignedAdminId: nextAssignee,
          assignedAt: adminSession ? now : ticket.assignedAt,
          lastAdminReadAt: now,
        },
      });

      if (statusChanged) {
        await tx.ticketStatusHistory.create({
          data: {
            ticketId: ticket.id,
            fromStatus: ticket.status,
            toStatus: nextStatus,
            changedBy: adminSession?.name || "admin",
            note: "auto transition on first admin reply",
          },
        });
      }

      if (assignmentChanged) {
        await tx.ticketAssignmentHistory.create({
          data: {
            ticketId: ticket.id,
            fromAdminId: ticket.assignedAdminId,
            toAdminId: nextAssignee,
            changedBy: adminSession?.name || "admin",
            trigger: "admin_reply",
          },
        });
      }
    });
  }

  const responseMessage = await signMessageAttachmentUrlWithSdk(
    toMessageResponse(newMessage)
  );
  publishTicketMessage(ticket.id, responseMessage);
  if (sender === "user") {
    publishAdminEvent({
      id: `user_message:${newMessage.id}`,
      type: "user_message",
      ticketId: ticket.id,
      ticketCode: ticket.code,
      title: ticket.title,
      message:
        responseMessage.message ||
        (responseMessage.attachmentUrl
          ? `[Gambar] ${responseMessage.attachmentCaption || "Tanpa caption"}`
          : ""),
      createdAt: newMessage.createdAt.toISOString(),
    });
  }

  return NextResponse.json(responseMessage, { status: 201 });
}

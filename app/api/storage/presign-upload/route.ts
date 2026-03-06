import { NextResponse } from "next/server";
import { buildObjectUrl, createPresignedPutUrl } from "@/lib/s3-upload";

export const runtime = "nodejs";

const MAX_ATTACHMENT_SIZE = 5 * 1024 * 1024;
const ALLOWED_IMAGE_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
]);

const extensionFromMime = (mimeType: string) => {
  if (mimeType === "image/jpeg") return "jpg";
  if (mimeType === "image/png") return "png";
  if (mimeType === "image/webp") return "webp";
  if (mimeType === "image/gif") return "gif";
  return "bin";
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as {
      ticketId?: string;
      fileName?: string;
      mimeType?: string;
      size?: number;
    };
    const ticketId = typeof body.ticketId === "string" ? body.ticketId.trim() : "";
    const fileName =
      typeof body.fileName === "string" && body.fileName.trim()
        ? body.fileName.trim()
        : "attachment";
    const mimeType = typeof body.mimeType === "string" ? body.mimeType : "";
    const size = typeof body.size === "number" ? body.size : 0;

    if (!ticketId) {
      return NextResponse.json({ error: "ticketId wajib diisi." }, { status: 400 });
    }
    if (!ALLOWED_IMAGE_TYPES.has(mimeType)) {
      return NextResponse.json(
        { error: "Format gambar tidak didukung. Gunakan JPG, PNG, WEBP, atau GIF." },
        { status: 400 }
      );
    }
    if (size <= 0 || size > MAX_ATTACHMENT_SIZE) {
      return NextResponse.json(
        { error: "Ukuran gambar maksimal 5MB." },
        { status: 400 }
      );
    }

    const ext = extensionFromMime(mimeType);
    const safeName = fileName.replace(/[^\w.-]+/g, "_");
    const objectKey = `tickets/${ticketId}/${Date.now()}-${Math.random()
      .toString(36)
      .slice(2, 10)}-${safeName}.${ext}`;

    const uploadUrl = createPresignedPutUrl({
      objectKey,
      expiresInSeconds: 120,
    });
    const fileUrl = buildObjectUrl(objectKey);

    return NextResponse.json({
      uploadUrl,
      fileUrl,
      objectKey,
    });
  } catch (error) {
    console.error("Failed to generate presigned upload URL:", error);
    return NextResponse.json(
      { error: "Gagal membuat URL upload attachment." },
      { status: 500 }
    );
  }
}

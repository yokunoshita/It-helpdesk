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
    const form = await req.formData();
    const ticketIdRaw = form.get("ticketId");
    const fileRaw = form.get("attachment");

    const ticketId = typeof ticketIdRaw === "string" ? ticketIdRaw.trim() : "";
    const file = fileRaw instanceof File ? fileRaw : null;

    if (!ticketId) {
      return NextResponse.json({ error: "ticketId wajib diisi." }, { status: 400 });
    }
    if (!file || file.size <= 0) {
      return NextResponse.json({ error: "Attachment gambar wajib diisi." }, { status: 400 });
    }
    if (!ALLOWED_IMAGE_TYPES.has(file.type)) {
      return NextResponse.json(
        { error: "Format gambar tidak didukung. Gunakan JPG, PNG, WEBP, atau GIF." },
        { status: 400 }
      );
    }
    if (file.size > MAX_ATTACHMENT_SIZE) {
      return NextResponse.json({ error: "Ukuran gambar maksimal 5MB." }, { status: 400 });
    }

    const ext = extensionFromMime(file.type);
    const safeName = (file.name || "attachment").replace(/[^\w.-]+/g, "_");
    const objectKey = `tickets/${ticketId}/${Date.now()}-${Math.random()
      .toString(36)
      .slice(2, 10)}-${safeName}.${ext}`;
    const uploadUrl = createPresignedPutUrl({ objectKey, expiresInSeconds: 120 });
    const fileUrl = buildObjectUrl(objectKey);

    const body = new Uint8Array(await file.arrayBuffer());
    const response = await fetch(uploadUrl, {
      method: "PUT",
      headers: {
        "Content-Type": file.type,
      },
      body,
      signal: AbortSignal.timeout(15000),
    });

    if (!response.ok) {
      const errorBody = await response.text().catch(() => "");
      return NextResponse.json(
        {
          error:
            errorBody ||
            `Upload storage gagal (${response.status}). Cek kredensial/endpoint bucket.`,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      fileUrl,
      attachmentMimeType: file.type,
      attachmentFileName: file.name || `attachment.${ext}`,
      attachmentSize: file.size,
    });
  } catch (error) {
    console.error("Server upload fallback failed:", error);
    return NextResponse.json(
      {
        error:
          "Upload fallback via server gagal. Cek koneksi server ke endpoint S3/IDCloudHost.",
      },
      { status: 502 }
    );
  }
}

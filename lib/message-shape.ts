type AttachmentLike = {
  url: string;
  caption?: string | null;
  mimeType?: string | null;
  fileName?: string | null;
  size?: number | null;
};

type MessageLike = {
  id: string;
  ticketId: string;
  sender: string;
  message: string;
  createdAt: Date | string;
  attachments?: AttachmentLike[];
};

export const toMessageResponse = <T extends MessageLike>(message: T) => {
  const firstAttachment = message.attachments?.[0];
  return {
    ...message,
    attachmentUrl: firstAttachment?.url ?? null,
    attachmentCaption: firstAttachment?.caption ?? null,
    attachmentMimeType: firstAttachment?.mimeType ?? null,
    attachmentFileName: firstAttachment?.fileName ?? null,
    attachmentSize: firstAttachment?.size ?? null,
  };
};

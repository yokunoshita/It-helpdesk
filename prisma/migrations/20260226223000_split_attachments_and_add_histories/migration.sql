CREATE TABLE "MessageAttachment" (
  "id" TEXT NOT NULL,
  "messageId" TEXT NOT NULL,
  "url" TEXT NOT NULL,
  "caption" TEXT,
  "mimeType" TEXT,
  "fileName" TEXT,
  "size" INTEGER,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "MessageAttachment_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "TicketStatusHistory" (
  "id" TEXT NOT NULL,
  "ticketId" TEXT NOT NULL,
  "fromStatus" "TicketStatus",
  "toStatus" "TicketStatus" NOT NULL,
  "changedBy" TEXT,
  "note" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "TicketStatusHistory_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "TicketAssignmentHistory" (
  "id" TEXT NOT NULL,
  "ticketId" TEXT NOT NULL,
  "fromAdminId" TEXT,
  "toAdminId" TEXT,
  "changedBy" TEXT,
  "trigger" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "TicketAssignmentHistory_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "MessageAttachment_messageId_idx" ON "MessageAttachment"("messageId");
CREATE INDEX "TicketStatusHistory_ticketId_createdAt_idx" ON "TicketStatusHistory"("ticketId", "createdAt");
CREATE INDEX "TicketAssignmentHistory_ticketId_createdAt_idx" ON "TicketAssignmentHistory"("ticketId", "createdAt");

ALTER TABLE "MessageAttachment"
ADD CONSTRAINT "MessageAttachment_messageId_fkey"
FOREIGN KEY ("messageId") REFERENCES "TicketMessage"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "TicketStatusHistory"
ADD CONSTRAINT "TicketStatusHistory_ticketId_fkey"
FOREIGN KEY ("ticketId") REFERENCES "Ticket"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "TicketAssignmentHistory"
ADD CONSTRAINT "TicketAssignmentHistory_ticketId_fkey"
FOREIGN KEY ("ticketId") REFERENCES "Ticket"("id") ON DELETE CASCADE ON UPDATE CASCADE;

INSERT INTO "MessageAttachment" (
  "id",
  "messageId",
  "url",
  "caption",
  "mimeType",
  "fileName",
  "size",
  "createdAt"
)
SELECT
  'att_' || tm."id",
  tm."id",
  tm."attachmentUrl",
  tm."attachmentCaption",
  tm."attachmentMimeType",
  tm."attachmentFileName",
  tm."attachmentSize",
  tm."createdAt"
FROM "TicketMessage" tm
WHERE tm."attachmentUrl" IS NOT NULL;

INSERT INTO "TicketStatusHistory" (
  "id",
  "ticketId",
  "fromStatus",
  "toStatus",
  "changedBy",
  "note",
  "createdAt"
)
SELECT
  'sth_' || t."id",
  t."id",
  NULL,
  t."status",
  'system:migration',
  'initial snapshot',
  t."createdAt"
FROM "Ticket" t
WHERE NOT EXISTS (
  SELECT 1
  FROM "TicketStatusHistory" h
  WHERE h."ticketId" = t."id"
);

ALTER TABLE "TicketMessage"
ADD COLUMN "attachmentUrl" TEXT,
ADD COLUMN "attachmentCaption" TEXT,
ADD COLUMN "attachmentMimeType" TEXT,
ADD COLUMN "attachmentFileName" TEXT,
ADD COLUMN "attachmentSize" INTEGER;

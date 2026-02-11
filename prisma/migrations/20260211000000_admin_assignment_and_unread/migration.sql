ALTER TABLE "Ticket"
ADD COLUMN "assignedAdminId" TEXT,
ADD COLUMN "assignedAt" TIMESTAMP(3),
ADD COLUMN "lastAdminReadAt" TIMESTAMP(3);

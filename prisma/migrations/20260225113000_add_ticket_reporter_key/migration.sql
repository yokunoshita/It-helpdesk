-- Persist reporter browser identity on Ticket to avoid storing it as system messages.
ALTER TABLE "Ticket"
ADD COLUMN "reporterKey" TEXT;

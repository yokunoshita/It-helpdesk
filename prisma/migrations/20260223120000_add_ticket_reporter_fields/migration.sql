-- Add explicit reporter identity fields for admin visibility and reporting.
ALTER TABLE "Ticket"
ADD COLUMN "reporterName" TEXT,
ADD COLUMN "reporterLocation" TEXT;

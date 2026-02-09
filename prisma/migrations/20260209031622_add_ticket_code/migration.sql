/*
  Warnings:

  - The values [SECURITY] on the enum `TicketCategory` will be removed. If these variants are still used in the database, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Ticket` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "TicketCategory_new" AS ENUM ('HARDWARE', 'SOFTWARE', 'NETWORK', 'ACCOUNT', 'OTHER');
ALTER TABLE "public"."Ticket" ALTER COLUMN "category" DROP DEFAULT;
ALTER TABLE "Ticket" ALTER COLUMN "category" TYPE "TicketCategory_new" USING ("category"::text::"TicketCategory_new");
ALTER TYPE "TicketCategory" RENAME TO "TicketCategory_old";
ALTER TYPE "TicketCategory_new" RENAME TO "TicketCategory";
DROP TYPE "public"."TicketCategory_old";
ALTER TABLE "Ticket" ALTER COLUMN "category" SET DEFAULT 'HARDWARE';
COMMIT;

-- CreateIndex
CREATE UNIQUE INDEX "Ticket_id_key" ON "Ticket"("id");

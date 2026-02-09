/*
  Warnings:

  - You are about to drop the column `code` on the `Ticket` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `Ticket` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Ticket_code_key";

-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "code";

-- CreateIndex
CREATE UNIQUE INDEX "Ticket_id_key" ON "Ticket"("id");

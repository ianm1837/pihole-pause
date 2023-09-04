/*
  Warnings:

  - A unique constraint covering the columns `[serverAPIKey]` on the table `Servers` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Servers" ADD COLUMN "serverAPIKey" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Servers_serverAPIKey_key" ON "Servers"("serverAPIKey");

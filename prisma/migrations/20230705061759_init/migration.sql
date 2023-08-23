-- CreateTable
CREATE TABLE "Servers" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "serverName" TEXT NOT NULL,
    "serverAddress" TEXT NOT NULL,
    "lastDisabledTime" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Servers_serverName_key" ON "Servers"("serverName");

-- CreateIndex
CREATE UNIQUE INDEX "Servers_serverAddress_key" ON "Servers"("serverAddress");

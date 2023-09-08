-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Servers" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "serverName" TEXT NOT NULL,
    "serverAddress" TEXT NOT NULL,
    "lastDisabledTime" DATETIME NOT NULL
);
INSERT INTO "new_Servers" ("id", "lastDisabledTime", "serverAddress", "serverName") SELECT "id", "lastDisabledTime", "serverAddress", "serverName" FROM "Servers";
DROP TABLE "Servers";
ALTER TABLE "new_Servers" RENAME TO "Servers";
CREATE UNIQUE INDEX "Servers_serverName_key" ON "Servers"("serverName");
CREATE UNIQUE INDEX "Servers_serverAddress_key" ON "Servers"("serverAddress");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

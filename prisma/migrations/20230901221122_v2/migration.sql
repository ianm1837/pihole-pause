-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Servers" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "serverName" TEXT NOT NULL,
    "serverAddress" TEXT NOT NULL,
    "serverAPIKey" TEXT,
    "lastDisabledTime" TEXT
);
INSERT INTO "new_Servers" ("id", "lastDisabledTime", "serverAPIKey", "serverAddress", "serverName") SELECT "id", "lastDisabledTime", "serverAPIKey", "serverAddress", "serverName" FROM "Servers";
DROP TABLE "Servers";
ALTER TABLE "new_Servers" RENAME TO "Servers";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

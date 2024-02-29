/*
  Warnings:

  - Added the required column `marketLocation` to the `Sell` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Sell" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "numberSold" INTEGER NOT NULL,
    "paymentMethod" TEXT NOT NULL,
    "marketLocation" TEXT NOT NULL
);
INSERT INTO "new_Sell" ("date", "id", "numberSold", "paymentMethod", "price", "productName") SELECT "date", "id", "numberSold", "paymentMethod", "price", "productName" FROM "Sell";
DROP TABLE "Sell";
ALTER TABLE "new_Sell" RENAME TO "Sell";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

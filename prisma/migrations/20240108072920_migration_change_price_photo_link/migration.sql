/*
  Warnings:

  - You are about to alter the column `price` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.
  - You are about to alter the column `price` on the `Sell` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "photoLink" TEXT,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "numberInStock" INTEGER NOT NULL
);
INSERT INTO "new_Product" ("id", "name", "numberInStock", "photoLink", "price") SELECT "id", "name", "numberInStock", "photoLink", "price" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE TABLE "new_Sell" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "numberSold" INTEGER NOT NULL,
    "paymentMethod" TEXT NOT NULL
);
INSERT INTO "new_Sell" ("date", "id", "numberSold", "paymentMethod", "price", "productName") SELECT "date", "id", "numberSold", "paymentMethod", "price", "productName" FROM "Sell";
DROP TABLE "Sell";
ALTER TABLE "new_Sell" RENAME TO "Sell";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

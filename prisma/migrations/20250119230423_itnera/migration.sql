/*
  Warnings:

  - The `features` column on the `RentItem` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `features` column on the `TourItem` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "RentItem" DROP COLUMN "features",
ADD COLUMN     "features" TEXT[];

-- AlterTable
ALTER TABLE "TourItem" DROP COLUMN "features",
ADD COLUMN     "features" TEXT[];

/*
  Warnings:

  - Changed the type of `tier` on the `TourItem` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "TourItem" DROP COLUMN "tier",
ADD COLUMN     "tier" "PLAN" NOT NULL;

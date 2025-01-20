-- CreateEnum
CREATE TYPE "PLAN" AS ENUM ('VIP', 'REGULAR', 'DELUXE');

-- CreateEnum
CREATE TYPE "PACKAGE_TYPE" AS ENUM ('BOOK_FOR_TOUR', 'BOOK_FOR_RENT');

-- CreateEnum
CREATE TYPE "PAYMENT" AS ENUM ('ONE_TIME_PAYMENT');

-- CreateTable
CREATE TABLE "CAR_FOR_RENT" (
    "id" SERIAL NOT NULL,
    "cohort" TEXT NOT NULL,
    "main_image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "features" TEXT[],
    "tier" "PLAN" NOT NULL,
    "payment" "PAYMENT" NOT NULL,
    "package_type" "PACKAGE_TYPE" NOT NULL,
    "price" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CAR_FOR_RENT_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RentItem" (
    "id" SERIAL NOT NULL,
    "cohort" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "images" TEXT[],
    "tier" "PLAN" NOT NULL,
    "features" TEXT NOT NULL,
    "active_car_id" INTEGER NOT NULL,
    "is_selected" BOOLEAN NOT NULL,
    "rent_type" "PACKAGE_TYPE" NOT NULL,
    "slug" TEXT NOT NULL,
    "number_available" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RentItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CAR_FOR_TOUR" (
    "id" SERIAL NOT NULL,
    "cohort" TEXT NOT NULL,
    "features" TEXT[],
    "description" TEXT NOT NULL,
    "main_image" TEXT NOT NULL,
    "tier" "PLAN" NOT NULL,
    "package_type" "PACKAGE_TYPE" NOT NULL,
    "price" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CAR_FOR_TOUR_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TourItem" (
    "id" SERIAL NOT NULL,
    "cohort" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "images" TEXT[],
    "slug" TEXT NOT NULL,
    "tier" TEXT NOT NULL,
    "features" TEXT NOT NULL,
    "active_sit" INTEGER[],
    "active_sit_id" INTEGER NOT NULL,
    "is_selected" BOOLEAN NOT NULL,
    "tour_type" "PACKAGE_TYPE" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TourItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RentItem_slug_key" ON "RentItem"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "TourItem_slug_key" ON "TourItem"("slug");

-- AddForeignKey
ALTER TABLE "RentItem" ADD CONSTRAINT "RentItem_active_car_id_fkey" FOREIGN KEY ("active_car_id") REFERENCES "CAR_FOR_RENT"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TourItem" ADD CONSTRAINT "TourItem_active_sit_id_fkey" FOREIGN KEY ("active_sit_id") REFERENCES "CAR_FOR_TOUR"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

import {
  SegregatedPackages,
} from "@/constants/types";
import { prisma } from "@/lib/prisma";
import { globalStore } from "@/stores/store";
import { PACKAGE_TYPE, PLAN } from "@prisma/client";


export const getTourPackages = async () => {
  const tourPackages = await prisma.singularPackage.findMany({
    where: {
      package_type: "BOOK_FOR_TOUR",
    },

    select: {
      id: true,
      cohort: true,
      tour_price: true,
      rent_price: true,
      main_image: true,
      slug: true,
      tier: true,
      description: true,
      features: true,
      payment: true,
      active_sit: true,
      active_sit_id: true,
      active_car_id: true,
      is_selected: true,
      package_type: true,
      created_at: true,
      updated_at: true,
    },
  });

  if (!tourPackages) {
    throw new Error("Unable to load packages, might be your network");
  }

  return tourPackages;
};

export const getRentPackages = async () => {
  const rentPackages = await prisma.singularPackage.findMany({
    where: {
      package_type: "BOOK_FOR_RENT",
    },
    select: {
      id: true,
      cohort: true,
      tour_price: true,
      rent_price: true,
      main_image: true,
      slug: true,
      tier: true,
      description: true,
      features: true,
      payment: true,
      active_sit: true,
      active_sit_id: true,
      active_car_id: true,
      is_selected: true,
      package_type: true,
      created_at: true,
      updated_at: true,
    },
  });

  if (!rentPackages) {
    throw new Error("Unable to load packages, might be your network");
  }

  return rentPackages;
};

export const fetchPackagesByType = async (type: PACKAGE_TYPE, tier:PLAN, slug:string
): Promise<SegregatedPackages[] | null> => {
// Validate PLAN enum
if (!Object.values(PLAN).includes(tier)) {
  console.error('Invalid tier parameter:', tier)
  return null
}
try{
  return await prisma.singularPackage.findMany({
    
    where: {
      package_type: type,
      tier: tier ,
      slug:slug
    },
    select: {
      id: true,
      cohort: true,
      tour_price: true,
      rent_price: true,
      main_image: true,
      slug: true,
      tier: true,
      description: true,
      features: true,
      payment: true,
      active_sit: true,
      active_sit_id: true,
      active_car_id: true,
      is_selected: true,
      package_type: true,
      created_at: true,
      updated_at: true,
    },
  })}catch (error) {
    console.error('Error fetching packages:', error)
    return null
  }
};

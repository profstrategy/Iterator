import { PLAN } from "@prisma/client";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const addSearchParamsToUrl = (
  url: string,
  params: Record<string, string>
) => {
  const searchParams = new URLSearchParams(params);
  return `${url}?${searchParams.toString()}`;
};

export const removeNoneAlphanumericEntity = (str: string) => {
  return str.replace(/[^a-z0-9]/gi, ' ');
};

// export const extractSlugFromUrl = (str:string | null) => {
//   str = window.location.href;
//   const currentUrl = new URL(str)
//   const linkSegment = currentUrl.pathname.split('/')
//   const lastLinkSegment = linkSegment[linkSegment.length - 1]

//   return lastLinkSegment
// }

// export const convertEnumtoLooerCase = (str:PLAN) => {
//   return str.toString().toLowerCase()
// }
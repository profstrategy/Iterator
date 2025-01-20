import { StaticImageData } from "next/image";

export interface NavItem {
  content: string;
  id: string;
}

export interface DeskTopNavProps {
  navItems: NavItem[];
  activeItem: string;
  setActiveItem: (id: string) => void;
}

export interface MobileNavProps {
  navItems: NavItem[];
  activeItem: string;
  setActiveItem: (id: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export type FooterContentItem = {
  id: string;
  content_1?: string;
  content_2?: string;
  content_3?: string;
};

type UsefulLinkItem = {
  id: string;
  content: string;
};

export type UsefulLinks = {
  id: string;
  usefulLinks: UsefulLinkItem[];
};

export type FooterTextItem = {
  id: string;
  text?: string;
  rights?: string;
};

export type BrandItem = {
  id: string;
  brand: string;
};

export type SegregatedPackage = {
  id: string;
  type: 'book for tour' | 'book for rent';
  tier: string;
  cohort: string;
  price: string;
  paymentPlan: string;
  features: string[];
  image: string |StaticImageData
};

import { PLAN, PACKAGE_TYPE, ActiveSit } from '@prisma/client'

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

export interface SegregatedPackages {
    id: number;
    cohort: string;
    tour_price: number | null;
    rent_price: number | null;
    main_image: string;
    slug: string; 
    tier: PLAN;
    description: string[]
    features?: string[];
    payment: string;
    active_sit: ActiveSit | null; 
    active_sit_id: number | null;
    active_car_id: number | null;
    is_selected: boolean;
    package_type: PACKAGE_TYPE; 
    created_at: Date;
    updated_at: Date;
}

export interface SegregatedPackagesByType {
  id: number,
  cohort: string
  description: string,
  main_image: string,
  tier: PLAN,
  package_type: PACKAGE_TYPE,
  price: number,
  created_at: Date,
  updated_at: Date,
  images: string
}
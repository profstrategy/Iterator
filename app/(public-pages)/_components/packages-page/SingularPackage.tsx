"use client"
import { Card } from "@/components/ui/card";
import { SegregatedPackages } from "@/constants/types";
import { BanknoteIcon, CalendarIcon, CrownIcon, DiamondIcon, LayersIcon, UserIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useEffect } from "react";
import { addSearchParamsToUrl} from "@/lib/utils";
import { useGlobalStore } from "@/provider/store-provider";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SLUG_TYPES } from "@/constants/generic";
import { PLAN } from "@prisma/client";
import AppButton from "@/components/reusables/AppButton";
import { extractUlFromFeature } from "./packages";


const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const SingularPackage = ({ pkg }: { pkg: SegregatedPackages[] }) => {
  const slug = useGlobalStore((state) => state.slug)
  const setSlug = useGlobalStore((state) => state.setSlug)
  // const LoadingOverView = useGlobalStore((state) => state.overviewLoading)
  useEffect(() => {
    if (pkg.length > 0) {
      setSlug(pkg)
    }
  }, [pkg, setSlug])

  const pathname = usePathname()
  const searchParam = useSearchParams()
  const currentTier = searchParam.get('tier') as (typeof PLAN[keyof typeof PLAN])
  const currentSearch = searchParam.get('search') as (typeof SLUG_TYPES[keyof typeof SLUG_TYPES])
  const router = useRouter()

  const [activeTier, setActiveTier] = React.useState<typeof PLAN[keyof typeof PLAN]>(currentTier)
  const [searchTerm, setSearchTerm] = React.useState<typeof SLUG_TYPES[keyof typeof SLUG_TYPES]>(currentSearch)
  const [packageCard, setPackageCard] = React.useState<SegregatedPackages | undefined | null>(null)

  const dynamicTier = pkg.find(itm => itm.tier === activeTier);
  const dynamicSlug = pkg.find(itm => itm.tier === searchTerm);

  useEffect(() => {
    const handleCardGenerate = () => {
      return setPackageCard(dynamicTier)
    }
    document.addEventListener('DOMContentLoaded', handleCardGenerate)
    console.log(dynamicTier)
  }, [])

  const updateUrlWithSearchParams = React.useCallback((tier: string, search: string) => {
    const newUrl = addSearchParamsToUrl(pathname, {
      tier: tier,
      search: search
    })
    router.push(newUrl)
  }, [pathname, router])

  const handleTabChange = React.useCallback((
    tier: (typeof PLAN[keyof typeof PLAN]), search: (typeof SLUG_TYPES[keyof typeof SLUG_TYPES])
  ) => {
    updateUrlWithSearchParams(tier, search)
    setActiveTier(tier)
    setSearchTerm(search)
    setPackageCard(dynamicTier);
    // console.log(dynamicTier)
  }, [updateUrlWithSearchParams])

  const getCategoryIcon = (tier: string | undefined) => {
    if (!tier) return null;

    switch (tier.toUpperCase()) {
      case 'VIP':
        return <CrownIcon className="h-6 w-6 text-brand-color" />;
      case 'REGULAR':
        return <UserIcon className="h-5 w-5 text-brand-color" />;
      case 'DELUXE':
        return <DiamondIcon className="h-5 w-5 text-brand-color" />;
      default:
        return null;
    }
  };

  if (!slug) {
    return (
      <motion.div
        {...fadeInUp}
        className="text-center text-gray-600 p-8 bg-red-50 rounded-lg shadow-sm"
      >
        Package not found
      </motion.div>
    );
  }

  const isVIP = dynamicSlug?.tier === 'VIP'


  return (
    <Card className="overflow-hidden bg-brand-color shadow-lg sm:shadow-2xl rounded-xl hover:shadow-xl sm:hover:shadow-3xl transition-shadow duration-300">
      {slug.map((itm, index) => (
        <div className="p-4 sm:p-8" key={`${itm?.id}-itm${index}`}>
          <motion.div
            className="flex flex-col gap-3 mb-6 sm:mb-8"
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp}>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                {itm?.cohort ?? 'Unnamed Package'}
              </h1>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge
                  variant="secondary"
                  className="px-3 py-1 text-xs sm:text-sm font-medium"
                >
                  {itm?.package_type?.toUpperCase() ?? 'NO TYPE'}
                </Badge>
                <Badge
                  variant={itm?.is_selected ? 'default' : 'destructive'}
                  className={`px-3 py-1 text-xs sm:text-sm font-medium ${itm?.is_selected ? 'bg-green-100 text-green-800' : ''}`}
                >
                  {itm?.is_selected ? 'Active' : 'Inactive'}
                </Badge>
              </div>
            </motion.div>
          </motion.div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="mb-6 p-1 bg-gray-100/80 rounded-lg w-full flex-nowrap gap-2">

              <TabsTrigger
                value="overview"
                className="flex-1 transition-all duration-200 text-sm sm:text-base data-[state=active]:bg-white data-[state=active]:text-brand-color data-[state=active]:shadow-sm"

              >
                <LayersIcon className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                Overview
              </TabsTrigger>

              <TabsTrigger value="pricing-details"
                className="flex-1 transition-all duration-200 text-sm sm:text-base data-[state=active]:bg-white data-[state=active]:text-brand-color data-[state=active]:shadow-sm"

              > <BanknoteIcon className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />Pricing & Details</TabsTrigger>
            </TabsList>

            <Tabs defaultValue={`${itm.tier}`} className="w-full">
              <TabsList className="mb-6 p-1 bg-gray-100/80 rounded-lg md:w-2/5 xmd:w-4/6 flex-nowrap gap-4">
                <TabsTrigger
                  value={`VIP`}
                  className="flex-1 transition-all duration-200 text-sm sm:text-base data-[state=active]:bg-brand-color-text data-[state=active]:text-white data-[state=active]:shadow-sm"
                  onClick={() => handleTabChange('VIP', `${itm?.slug}`)}
                >
                  VIP
                </TabsTrigger>

                <TabsTrigger
                  value={`DELUXE`}
                  className="flex-1 transition-all duration-200 text-sm sm:text-base data-[state=active]:bg-brand-color-text data-[state=active]:text-white data-[state=active]:shadow-sm"
                  onClick={() => handleTabChange('DELUXE', `${itm?.slug}`)}
                >
                  DELUXE
                </TabsTrigger>

                <TabsTrigger
                  value={`REGULAR`}
                  className="flex-1 transition-all duration-200 text-sm sm:text-base data-[state=active]:bg-brand-color-text data-[state=active]:text-white data-[state=active]:shadow-lg"
                  onClick={() => handleTabChange('REGULAR', `${itm?.slug}`)}
                >

                  REGULAR
                </TabsTrigger>
              </TabsList>
            </Tabs>
            
            <TabsContent value="overview">{ itm?.description}</TabsContent>

            <TabsContent value="pricing-details"> <motion.div variants={fadeInUp}>
              
                  <Card
                  className={`flex flex-col h-full p-4 sm:p-6 hover:shadow-lg transition-all duration-300 border
                                                      ${isVIP ? 'bg-gradient-to-br from-yellow-50 to-white border-yellow-300 hover:border-yellow-400 scale-100' : 'hover:border-brand-color/20'}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2 sm:mb-4">
                      <h3 className="text-lg sm:text-xl font-semibold capitalize text-gray-800 flex items-center gap-2">
                        {getCategoryIcon(packageCard?.tier)}
                       {packageCard?.tier}
                      </h3>
                      {isVIP && (
                        <Badge className="bg-yellow-500">VIP</Badge>
                      )}
                    </div>
                    <p
                      className={`text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 ${isVIP ? 'text-yellow-600' : 'text-brand-color'}`}
                    >
                      ₦
                       {packageCard?.package_type === 'BOOK_FOR_RENT' ? parseFloat(packageCard.rent_price as unknown as string ?? '0').toLocaleString('en-US') : itm?.package_type === 'BOOK_FOR_TOUR' ? parseFloat(itm.tour_price as unknown as string ?? '0').toLocaleString('en-US') : null}
                    </p>
                    <div className="space-y-2 sm:space-y-4 mb-4 sm:mb-6">
                        <div className="flex items-center gap-2 text-sm text-gray-700 bg-gray-50 p-2 rounded-lg">
                          <CalendarIcon className="h-4 w-4 text-brand-color" />
                          <span>
                            {parseFloat(itm?.payment as unknown as string ?? '0').toLocaleString('en-US')}
                          </span>
                        </div>
                    </div>
                    <AppButton
                      variant="primary"
                    
                    >
                      Book Now
                    </AppButton>
                  </div>
  
                    {itm?.features?.map((itm) => (
                      <div className="mt-3 pt-3 border-t border-gray-200">
                      <div className="prose prose-sm max-w-none text-xs sm:text-sm">
                        <li
                          className={`text-sm  flex items-start gap-2`}
                        >
                          <div className="">
                            <ul
                              className="flex flex-col gap-2"
                              dangerouslySetInnerHTML={{
                                __html: extractUlFromFeature(
                                  itm
                                ),
                              }}
                            />
                          </div>
                        </li>
                      </div>
                    </div>
                    ))}
                </Card>
            </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      ))
      }
    </Card>
  );
};

export default SingularPackage;

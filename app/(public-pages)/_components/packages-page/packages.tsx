"use client"
import { SegregatedPackages } from '@/constants/types';
import { CLIENT_ROUTE } from '@/lib/route';
import { removeNoneAlphanumericEntity } from '@/lib/utils';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import clsx from 'clsx';

// Extract theme styles outside the component to avoid unnecessary re-creation
const themeStyles = {
    light: {
        background: 'bg-white',
        border: 'border-gray-200',
        hoverBorder: 'hover:border-gray-300',
        iconBg: 'bg-gray-100',
        text: {
            primary: 'text-gray-900',
            secondary: 'text-gray-600',
            tertiary: 'text-gray-500',
        },
        badge: 'bg-gray-100',
        button: 'hover:bg-gray-100',
    },
    dark: {
        background: 'bg-[#1A1A1A]',
        border: 'border-[#333333]',
        hoverBorder: 'hover:border-[#666666]',
        iconBg: 'bg-[#333333]',
        text: {
            primary: 'text-white',
            secondary: 'text-[#CCCCCC]',
            tertiary: 'text-[#666666]',
        },
        badge: 'bg-[#333333]',
        button: 'hover:bg-[#333333]',
    },
};

interface PackagesProps {
    pkg: SegregatedPackages;
    theme?: "light" | "dark";
}


export const extractUlFromFeature = (feature?: string) => {
    if (!feature) return '';
    const ulMatch = feature.match(/<ul>(.*?)<\/ul>/);
    return ulMatch ? ulMatch[1].replace(/<\/?ul>/g, '').trim() : feature;
};

const PackageFeatures = ({ features, textColor }: { features?: string[], textColor: string }) => (
    <ul className="space-y-3">
        {features?.map((feature, index) => (
            <li key={index} className={`text-sm ${textColor} flex items-start gap-2`}>
                <ul 
                    className="flex flex-col gap-2" 
                    dangerouslySetInnerHTML={{ __html: extractUlFromFeature(feature) }} 
                />
            </li>
        ))}
    </ul>
);

const Packages = ({ theme = 'light', pkg }: PackagesProps) => {
    const router = useRouter();
    const styles = themeStyles[theme];

    return (
        <div 
            className={clsx(
                styles.background,
                "p-6 rounded-lg border transition-all duration-300 flex flex-col h-full",
                styles.border,
                styles.hoverBorder
            )}
            id="packages"
        >
            <div className="flex-1">
                {/* Image Section */}
                <div className="w-full h-48 relative">
                    <Image
                        src={pkg.main_image}
                        alt={pkg.id as unknown as string}
                        fill
                        quality={100}
                        className="object-cover rounded-lg"
                    />
                </div>

                {/* Tier and Package Type Section */}
                <div className="flex items-center gap-2 my-3">
                    <div className={clsx("w-6 h-6 rounded-full flex items-center justify-center", styles.iconBg)}>
                        {pkg.tier.toUpperCase() === 'REGULAR' && <span className={styles.text.primary}>★</span>}
                        {pkg.tier.toUpperCase() === 'VIP' && <span className={styles.text.primary}>👑</span>}
                        {pkg.tier.toUpperCase() === 'DELUXE' && <span className={styles.text.primary}>💫</span>}
                    </div>

                    <span className={`text-sm uppercase ${styles.text.tertiary}`}>
                        {removeNoneAlphanumericEntity(pkg.package_type)} - {pkg.tier}
                    </span>

                    {pkg.tier.toUpperCase() === 'VIP' && (
                        <span className={`text-xs px-2 py-0.5 rounded ${styles.badge} ${styles.text.primary}`}>
                            MOST POPULAR
                        </span>
                    )}
                </div>

                {/* Package Details */}
                <h3 className={`text-lg font-semibold ${styles.text.primary} mb-1`}>
                    {pkg.cohort}
                </h3>
                <p className={`text-2xl font-bold ${styles.text.primary} mb-4`}>
                    {removeNoneAlphanumericEntity(pkg.package_type.toUpperCase()) === "BOOK FOR TOUR" 
                        ? pkg?.tour_price 
                        : pkg?.rent_price}
                </p>
                <p className={`text-sm ${styles.text.tertiary} mb-6`}>{pkg.payment}</p>

                {/* Features List */}
                <PackageFeatures features={pkg.features} textColor={styles.text.secondary} />
            </div>

            {/* Learn More Button */}
            <button
                className={clsx(
                    "w-full py-2 text-sm font-medium border rounded transition-colors duration-300 mt-6",
                    styles.text.primary,
                    styles.border,
                    styles.button
                )}
                onClick={() => router.push(CLIENT_ROUTE.publicRoute.packages.id(pkg.package_type, pkg.tier, pkg.slug))}
            >
                Learn more →
            </button>
        </div>
    );
};

export default Packages;

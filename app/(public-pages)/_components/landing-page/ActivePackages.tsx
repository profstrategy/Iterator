'use client'
import AppButton from '@/components/reusables/AppButton';
import { AppHeading } from '@/components/reusables/AppHeading';
import Packages from '@/app/(public-pages)/_components/packages-page/packages';
import { PACKAGE_TYPES } from '@/constants/generic';
import { SegregatedPackage } from '@/constants/types';
import { custom, executive, higher } from '@/public';
import { whiteSpaces } from '@/utilities/globalspace';
import { PackageIcon } from 'lucide-react';
import { usePathname, useSearchParams } from 'next/navigation';
import React from 'react';
import { IoMdCall } from 'react-icons/io';
import { addSearchParamToUrl } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export const packages: SegregatedPackage[] = [
    {
        id: '1',
        type: 'book for tour',
        tier: 'standard',
        cohort: 'Family/Group Tours',
        price: '₦50,000',
        paymentPlan: 'One-time Payment',
        features: [
            '30-seater air-conditioned bus',
            'Professional driver included',
            'Complimentary water bottles',
            'Access to all tour destinations within the selected state',
            'Up to 8 hours of usage per day',
        ],
        image: higher,
    },
    {
        id: '2',
        type: 'book for tour',
        tier: 'deluxe',
        cohort: 'Corporate/Exclusive Tours',
        price: '₦100,000',
        paymentPlan: 'One-time Payment',
        features: [
            '35-seater luxury coach',
            'Onboard entertainment system',
            'Professional driver included',
            'Complimentary snacks and drinks',
            'Access to multiple states in a single tour package',
            'Up to 12 hours of usage per day',
        ],
        image: executive,
    },
    {
        id: '3',
        type: 'book for tour',
        tier: 'VIP',
        cohort: 'Luxury/Exclusive Group',
        price: '₦200,000',
        paymentPlan: 'Flexible Payment Plans Available',
        features: [
            '5-seater premium bus with reclining seats',
            'Onboard entertainment system with surround sound',
            'Overhead non-independent air-conditioning',
            'Complimentary gourmet meals and drinks',
            'Free Wi-Fi and charging ports for all passengers',
            'Exclusive tour guide included',
            'Unlimited access to all destinations during the tour',
            'Integrated within the bilateral rack, Monomer in the dome light, corridor lights, safe skylights (with electric ventilator)',
        ],
        image: custom,
    },
    {
        id: '4',
        type: 'book for rent',
        tier: 'standard',
        cohort: 'Daily Rentals',
        price: '₦30,000',
        paymentPlan: 'One-time Payment',
        features: [
            '12-seater sedan car',
            'Air conditioning included',
            'Professional driver available on request',
            'Up to 12 hours of rental usage',
            'Affordable fuel options available',
        ],
        image: "https://www.grechmotors.com/wp-content/uploads/2022/11/sprinter_open_low_res.jpg",
    },
    {
        id: '5',
        type: 'book for rent',
        tier: 'deluxe',
        cohort: 'Luxury Rentals',
        price: '₦70,000',
        paymentPlan: 'One-time Payment',
        features: [
            '7-seater SUV',
            'Leather interior and advanced air conditioning',
            'Professional driver available on request',
            'Onboard Wi-Fi and charging ports',
            'Up to 24 hours of rental usage',
        ],
        image: "https://www.grechmotors.com/wp-content/uploads/2022/11/freightliner_black_front_RGB-scaled.jpg",
    },
    {
        id: '6',
        type: 'book for rent',
        tier: 'VIP',
        cohort: 'Exclusive Rentals',
        price: '₦150,000',
        paymentPlan: 'Flexible Payment Plans Available',
        features: [
            'Luxury limousine with spacious interior',
            'Professional chauffeur service included',
            'Complimentary drinks and snacks',
            'Advanced entertainment system',
            'Unlimited rental duration with flexible return time',
            'Premium fuel coverage included',
        ],
        image: "https://www.grechmotors.com/wp-content/uploads/2022/11/f550-whitecopy.png",
    },
];


const ActivePackages = () => {
 

    const EmptyState = () => (
        <div className="col-span-full flex flex-col items-center justify-center p-12 bg-[#2A2A2A] rounded-lg border-2 border-dashed border-brand-color-black">
            <div className="w-16 h-16 bg-[#333333]  rounded-full flex items-center justify-center mb-4">
                <PackageIcon className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-200 mb-1">
                No Packages Available
            </h3>
            <p className="text-sm text-gray-400 text-center max-w-sm">
                There are currently no active packages available. Please check back
                later for new offerings.
            </p>
        </div>
    );
    return (
        <section className={`xmd:max-w-[375px] mobile:max-w-[700px] sm:max-w-[900px] lg:max-w-[2000px] md:max-w-[1500px] m-auto bg-background py-4 md:py-16 w-full ${whiteSpaces.paddingX}`}>
            <div className='flex justify-between items-center mb-12'>
                <AppHeading
                    variant="h2"
                    className="text-2xl sm:text-3xl md:text-4xl text-brand-color-black"
                >
                    Our Packages
                </AppHeading>
                <div className="flex items-center justify-center">
                    <a href="tel:+2349115653889">
                        <AppButton

                            className="w-fit mx-auto bg-brand-color-main"
                            onClick={() => {
                                // Add actual click handler implementation
                                console.log('Live call button clicked');
                            }}
                        >
                            <IoMdCall className="w-4 h-4 mr-2" />
                            Live call
                        </AppButton>
                    </a>
                </div>
            </div>


            <div className={`grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`}>

                {packages.map((pkg) => (
                    <Packages theme='light' pkg={pkg} key={pkg.id} />
                ))}

            </div>
        </section>
    )
}

export default ActivePackages
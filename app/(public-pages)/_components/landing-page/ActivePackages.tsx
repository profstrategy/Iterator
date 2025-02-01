import React from 'react';
import { AppHeading } from '@/components/reusables/AppHeading';
import { PackageIcon } from 'lucide-react';
import { getRentPackages, getTourPackages } from '@/api/client-constructor';
import Packages from '../packages-page/packages';
import { SegregatedPackages } from '@/constants/types';
import { whiteSpaces } from '@/utilities/globalspace';

const ActivePackages = async () => {
    const segregatedTourPackages: SegregatedPackages[] = await getTourPackages();
    const segregatedRentPackages: SegregatedPackages[] = await getRentPackages()

    const EmptyState = () => (
        <div className="col-span-full flex flex-col items-center justify-center p-12 bg-[#2A2A2A] rounded-lg border-2 border-dashed border-brand-color-black">
            <div className="w-16 h-16 bg-[#333333] rounded-full flex items-center justify-center mb-4">
                <PackageIcon className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-200 mb-1">No Packages Available</h3>
            <p className="text-sm text-gray-400 text-center max-w-sm">
                There are currently no active packages available. Please check back later for new offerings.
            </p>
        </div>
    );

    return (
        <section
            className={`xmd:max-w-[375px] mobile:max-w-[700px] sm:max-w-[900px] lg:max-w-[2000px] md:max-w-[1500px] m-auto bg-background py-4 md:py-16 w-full ${whiteSpaces.paddingX}`}
        >
            <div className="flex justify-between items-center mb-12">
                <AppHeading variant="h2" className="text-2xl sm:text-3xl md:text-4xl text-brand-color-black">
                    Our Packages
                </AppHeading>
            </div>

            <aside className='flex flex-col gap-4'>
                <div className={`grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`}>
                    {segregatedTourPackages.length > 0 ? (
                        segregatedTourPackages.map((pkg) => <Packages key={pkg.id} pkg={pkg} theme="light" />)
                    ) : (
                        <EmptyState />
                    )}
                </div>

                <div className={`grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`}>
                    {segregatedRentPackages.length > 0 ? (
                        segregatedRentPackages.map((pkg) => <Packages key={pkg.id} pkg={pkg} theme="light" />)
                    ) : (
                        <EmptyState />
                    )}
                </div>
            </aside>
        </section>
    );
};

export default ActivePackages;

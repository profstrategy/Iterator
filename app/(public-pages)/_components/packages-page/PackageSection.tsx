'use client'
import { PACKAGE_TYPES } from '@/constants/generic'
import { addSearchParamToUrl } from '@/lib/utils'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React from 'react'
import { packages } from '../landing-page/ActivePackages'
import Packages from './packages'
import { whiteSpaces } from '@/utilities/globalspace'
import { FaSearch } from 'react-icons/fa'
import { AppHeading } from '@/components/reusables/AppHeading'

const PackageSection = () => {
    const pathname = usePathname()
    const searchParam = useSearchParams()
    const currentTab = searchParam?.get('type')?.toUpperCase() as (typeof PACKAGE_TYPES[keyof typeof PACKAGE_TYPES])
    const currentSearch = searchParam.get('search') || '';
    const router = useRouter()

    const [activeTab, setActiveTab] = React.useState<(typeof PACKAGE_TYPES[keyof typeof PACKAGE_TYPES])>(PACKAGE_TYPES.BOOK_FOR_TOUR || currentTab)
    const [searchTerm, setSearchTerm] = React.useState(currentSearch)

    // Update URL with search params
    const updateSearchParam = React.useCallback((
        type: string, search?: string
    ) => {
        const newUrl = addSearchParamToUrl(pathname ?? '/', {
            type: type.toLowerCase(),
            search: search || ''
        })

        router.push(newUrl)
    }, [pathname, router])

    // Debounced search handler
    const handleSearch = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value;
        setSearchTerm(term)
        const timeoutId = setTimeout(() => {
            updateSearchParam(activeTab, term || '')
        }, 300)

        return () => clearTimeout(timeoutId)
    }, [updateSearchParam, activeTab])

    const handleTabChange = React.useCallback((
        tab: (typeof PACKAGE_TYPES[keyof typeof PACKAGE_TYPES])
    ) => {
        setActiveTab(tab)
        updateSearchParam(tab)
        setSearchTerm('')
    }, [updateSearchParam])

    return (
        <section className={`w-full ${whiteSpaces?.paddingX ?? ''} py-16`}>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center mb-12">
                    <AppHeading
                        variant="h2"
                        className="text-3xl md:text-4xl text-center mb-4"
                    >
                        Our Packages
                    </AppHeading>
                   
                    {/* Tabs for switching between categories */}
                    <div className="grid m-auto grid-cols-2 gap-2 p-2 bg-brand-color-white rounded-full mb-12 border-[1px] border-gray-200">
                        <button
                            onClick={() => handleTabChange('BOOK_FOR_TOUR')}
                            className={`px-6 py-2 rounded-full transition-colors ${activeTab === PACKAGE_TYPES.BOOK_FOR_TOUR
                                ? 'bg-brand-color-main text-brand-color-white font-bold'
                                : 'hover:bg-gray-200'
                                }`}
                        >
                            FOR TOUR
                        </button>
                        <button
                            onClick={() => handleTabChange('BOOK_FOR_RENT')}
                            className={`px-6 py-2 rounded-full transition-colors ${activeTab === PACKAGE_TYPES.BOOK_FOR_RENT
                                ? 'bg-brand-color-main text-brand-color-white font-bold'
                                : 'hover:bg-gray-200'
                                }`}
                        >
                            FOR RENT
                        </button>
                    </div>

                    <div className="w-full max-w-md mb-8">
                        <div className="relative">
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={handleSearch}
                                placeholder="Search for a package"
                                className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-brand-color"
                            />
                            <span className="absolute right-4 top-1/2 -translate-y-1/2">
                                <FaSearch className="w-5 h-5 text-gray-500" />
                            </span>
                        </div>
                    </div>

                    <div className={`grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`}>

                        {packages.map((pkg) => (
                            <Packages theme='light' pkg={pkg} key={pkg.id} />
                        ))}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default PackageSection
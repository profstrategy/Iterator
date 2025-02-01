import { AppHeading } from '@/components/reusables/AppHeading'
import { Button } from '@/components/reusables/Button'
import ItineraSVG from '@/components/reusables/Itinera'
import { brandColors } from '@/constants/brand-constants'
import { whiteSpaces } from '@/utilities/globalspace'
import Image from 'next/image'
import React from 'react'

const about = [
    {
        id: 'about',
        details: 'Itinera stands as a premier travelling and renting agency, committed to delivering unparalleled journey and educational experiences to travelers either for tourism and academic exploration. Our dedicated team, comprising core professionals, is devoted to ensuring a seamless journey for each traveler, guaranteeing safety, satisfaction, and an experience that will be etched in their memories.',
        // svg: <ItineraSVG />,
        link: 'https://img.sixt.com/1600/938e8eaf-4078-4edf-9cae-fe855daaa577.jpg'
    }
]

const AboutSection = () => {
    return (
        <div className={`${whiteSpaces.paddingX} w-full m-auto`} id='#about'>
            <AppHeading variant="h2"
                className="text-2xl sm:text-3xl md:text-4xl text-brand-color mb-14">
                Who We Are
            </AppHeading>
            <div className=''>
                {about.map((itm) => (
                    <div key={itm.id} className='relative md:min-h-[36rem] sm:h-auto'>
                        <Image
                            src={itm.link}
                            fill
                            alt={'rent-image'}
                            className="md:object-fill -z-10 md:absolute md:inset-0 rounded-lg sm:object-contain"
                            quality={100}
                        />
                         <div className="grid grid-cols-auto-fit gap-4 w-full h-full absolute">
                                {[...Array(100)].map((_, index) => (
                                    <ItineraSVG
                                        padding={3}
                                        color={`${brandColors.dark_blue}`}
                                        key={index}
                                        width="100%"
                                        radius={10}
                                    />
                                ))}
                            </div>
                        <div className='flex items-center md:justify-end xmd:justify-center md:w-8/12 sm:w-full min-h-[34rem] flex-col gap-4'>
                            <p className='text-brand-color-white  md:bottom-24 md:absolute px-4'>{itm.details}</p>

                            <div className='w-full'>
                                <Button className='ml-4 grid bg-none border-[2px] border-brand-color-white text-brand-color-white' variant={'link'}>Register now</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AboutSection
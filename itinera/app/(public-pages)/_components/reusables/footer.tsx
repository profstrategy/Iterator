import { BrandItem, FooterContentItem, FooterTextItem, UsefulLinks } from '@/constants/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsTwitterX } from 'react-icons/bs'
import { FaSquareWhatsapp } from 'react-icons/fa6'
import { FiFacebook } from 'react-icons/fi'
import { IoLogoInstagram } from 'react-icons/io'

export const footerContent: FooterContentItem[] = [
    {
      id: 'brand',
      content_1: 'Itinaria',
    },
    {
      id: 'links',
      content_2: 'Useful Links',
    },
    {
      id: 'Social',
      content_3: 'Social Handles:',
    },
  ];

  const useful_Links: UsefulLinks[] = [
    {
      id: 'usefulLinks',
      usefulLinks: [
        {
          id: 'home',
          content: 'Home',
        },
        {
          id: 'about',
          content: 'About',
        },
        {
          id: 'Packages',
          content: 'Packages',
        },
        {
          id: 'FAQs',
          content: 'FAQs',
        },
      ],
    },
  ];

  export const footerText: FooterTextItem[] = [
    {
      id: 'text',
      text: 'Itinera stands as a premier travel agency, committed to delivering unparalleled tour and educational experiences to travelers in search of spiritual enlightenment and academic exploration. Our dedicated team, comprising core professionals, is devoted to ensuring a seamless journey for each traveler, guaranteeing safety, satisfaction, and an experience that will be etched in their memories.',
    },
    {
      id: 'rights',
      rights: 'All rights reserved.',
    },
  ];

  export const brand: BrandItem[] = [
    {
      id: 'text',
      brand: 'Itinera',
    },
  ];

const Footer = () => {
  return (
    <footer
    className={`bg-brand-color-white  xmd:px-5 px-[20px] sm:px-[16px] md:px-12 lg:px-[150px] xl:px-[150px] 2xl:px-[150px] py-12`}
  >
    <div
      className={`max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-12`}
    >
      {/* Brand & Description */}
      <div className="space-y-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/brand.png"
            alt="Brand Logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          {brand.map((itm) => (
            <h1
              key={`itm-${itm.id}`}
              className="text-xl text-brand-color-text font-bold"
            >
              {itm.brand}
            </h1>
          ))}
        </Link>

        {footerText.map((text) => (
          <p
            key={`foot-${text.id}`}
            className="text-brand-color-text text-sm leading-relaxed"
          >
            {text.text}
          </p>
        ))}
      </div>

      {/* Useful Links */}
      <div className="space-y-8">
        {footerContent.map((cont) => (
          <h3
            key={`${cont.id}-cont`}
            className="text-brand-color-text font-bold text-lg"
          >
            {cont.content_2}
          </h3>
        ))}

        <ul className="space-y-4">
          {useful_Links.map((link) =>
            link.usefulLinks.map((itm, i) => (
              <li key={`${itm.id}-itms`}>
                <Link
                  href={
                    i === 3
                      ? '/#faqs'
                      : `${i === 0 ? '/' : i === 1 ? '/about' : i === 2 ? '/packages' : '#'}`
                  }
                  className="text-brand-color-text-1 hover:text-brand-color-main transition-colors"
                >
                  {itm.content}
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>

      {/* Contact & Social */}
      <div className="space-y-8">
        {footerContent.map((itm) => (
          <h3
            key={`${itm.id}-cont`}
            className="text-brand-color-text font-bold text-lg"
          >
            {itm.content_3}
          </h3>
        ))}

        <div className="flex gap-6 items-center">
          <Link
            href="https://www.facebook.com/people/Al-mawaqeet-Tour/61570372806546/"
            className="text-brand-color-text-1 transition-colors"
          >
            <FiFacebook className="w-6 h-6" />
          </Link>
          <Link
            href="#"
            className="text-brand-color-text-1 transition-colors"
          >
            <BsTwitterX className="w-6 h-6" />
          </Link>
          <Link
            href="#"
            className="text-brand-color-text-1 transition-colors"
          >
            <IoLogoInstagram className="w-6 h-6" />
          </Link>
          <Link
            href="#"
            className="text-brand-color-text-1 transition-colors"
          >
            <FaSquareWhatsapp className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>

    {/* Copyright */}
    <div className={`max-w-7xl w-full mt-12`}>
      <div className="border-t border-gray-500 opacity-50 mb-6"></div>
      <div className="flex items-center justify-center gap-4 text-gray-200">
        <span className='text-brand-color-text-1'>&copy;</span>
        <span className="w-px h-4 bg-brand-color-text-1"></span>
        <p className="text-sm text-brand-color-text-1">All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer
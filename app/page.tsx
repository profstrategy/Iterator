import React from 'react'
import Herosection from './(public-pages)/_components/landing-page/herosection'
import StepsToRegister from './(public-pages)/_components/landing-page/StepsToRegister'
import AboutSection from './(public-pages)/_components/landing-page/about'
import ActivePackages from './(public-pages)/_components/landing-page/ActivePackages'


const page = () => {
  return (
    <main className='flex flex-col gap-8'>
      <Herosection />
      <StepsToRegister /> 
      <AboutSection />
      <ActivePackages />
    </main>
  )
}

export default page
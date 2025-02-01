import React, { Suspense } from 'react'
import Herosection from './(public-pages)/_components/landing-page/herosection'
import StepsToRegister from './(public-pages)/_components/landing-page/StepsToRegister'
import AboutSection from './(public-pages)/_components/landing-page/about'
import ActivePackagesSkeleton from './(public-pages)/_components/landing-page/Loading'
import ActivePackages from './(public-pages)/_components/landing-page/ActivePackages'



export default async function PublicPage() {

  return (
    <main className='flex flex-col gap-8'>
      <Herosection />
      <StepsToRegister />
      <AboutSection />
      <Suspense fallback={<ActivePackagesSkeleton theme='light' />}>
        <ActivePackages />
      </Suspense>
    </main>
  )
}
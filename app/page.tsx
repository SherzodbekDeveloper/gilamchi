import Achievements from '@/components/Achievements'
import Advantages from '@/components/Advantages'
import Function from '@/components/Function'
import Hero from '@/components/Hero'
import Payment from '@/components/Payment'
import Footer from '@/components/shared/footer'
import Navbar from '@/components/shared/navbar'
import Solution from '@/components/Solution'
import Support from '@/components/Support'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import React from 'react'

function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Advantages />
      <Solution />
      <Function />
      <Achievements />
      <TestimonialsCarousel />
      <Support />
      <Payment />
      <Footer />

    </>
  )
}

export default Page
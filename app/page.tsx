import Advantages from '@/components/Advantages'
import CarpetTypes from '@/components/CarpetTypes'
import Contact from '@/components/contact'
import Hero from '@/components/Hero'
import Footer from '@/components/shared/footer'
import Navbar from '@/components/shared/navbar'
import Solution from '@/components/Solution'
import React from 'react'

function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <CarpetTypes />
      <Advantages />
      <Solution />
      <Contact />
      <Footer />

    </>
  )
}

export default Page
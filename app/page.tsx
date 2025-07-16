import Achievements from '@/components/Achievements'
import Advantages from '@/components/Advantages'
import Function from '@/components/Function'
import Hero from '@/components/Hero'
import Payment from '@/components/Payment'
import Footer from '@/components/shared/footer'
import Navbar from '@/components/shared/navbar'
import Solution from '@/components/Solution'
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
      <Payment />
      <Footer />

    </>
  )
}

export default Page
"use client"
import React from 'react'
import { Button } from './ui/button'
import AutoScrollText from './shared/AutoScrollText'
import AutoScrollLogos from './shared/AutoScrollLogos'
import Link from 'next/link'
import { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'

function Support() {
     useEffect(() => {
          AOS.init({
               duration: 1000,
               once: true,
          })
     }, [])
     return (
          <>
               <AutoScrollLogos />
               <section className='py-20 bg-gray-100 scroll-mt-24' >
                    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex  md:flex-row flex-col gap-4 justify-between items-start md:items-center' data-aos="fade-up">
                         <div className='flex flex-col gap-1 text-wrap flex-wrap text-5xl font-bold'>
                              <span className='text-blue-900 '>Bepul.</span>
                              <h2>O&apos;rnatib beramiz.</h2>
                              <h2>Sozlaymiz. O&apos;rgatamiz.</h2>
                         </div>
                         <div className='max-w-[530px] w-full flex flex-col gap-2'>
                              <p className='text-2xl font-medium'>Bizning menejerlarimiz sizga tovarlarni kiritish, uskunalarni ulash, xodimlarni o&apos;rgatishda yordam beradi, shuningdek, 10 kunlik bepul foydalanish muddatini taqdim etadi!</p>
                              <Link href="https://www.gilamchi.uz/" target="_blank">
                                   <Button variant={'link'} className=' font-semibold text-lg w-fit'> Sinab ko&apos;rish</Button>
                              </Link>
                         </div>
                    </div>
               </section>

               <AutoScrollText />
          </>
     )
}

export default Support
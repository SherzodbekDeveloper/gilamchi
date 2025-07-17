"use client"

import React from 'react'
import CountUp from 'react-countup'


import { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'


const Achieve = [
     {
          id: 1,
          number: 20,
          sign: '+',
          title: 'Faol Foydalanuvchilar',
          subtitle: "Platformamizdan doimiy foydalanayotgan gilam do'konlari va distribyutorlari.",
     },
     {
          id: 2,
          number: 10000,
          sign: '+',
          title: 'Mahsulot Unvonlari',
          subtitle: "Tizimda boshqarilayotgan noyob gilam va gilam mahsulotlari soni.",
     },
     {
          id: 3,
          number: 15,
          sign: '%',
          title: "Samaradorlik O'sishi",
          subtitle: "Gilam savdosi operatsiyalarida kuzatilgan o'rtacha samaradorlik oshishi.",
     },
     {
          id: 4,
          number: 90,
          sign: '%',
          title: 'Mijoz Qoniqishi',
          subtitle: "So'rovnomalar bo'yicha mijozlarning umumiy qoniqish darajasi.",
     },
]


function Achievements() {
     useEffect(() => {
          AOS.init({
               duration: 1000,
               once: true,
          })
     }, [])
     return (
          <section id='yutuglar' className='py-20 bg-gray-100 scroll-mt-24'>
               <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div>
                         <div className="text-center mb-16">
                              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4" data-aos="fade-up">Natijalar va Erishilgan Yutuqlar</h2>
                              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up">
                                   Foydalanuvchi faolligi, mahsulot hajmi va umumiy samaradorlikdagi o‘sish — bu raqamlar platformamizning real biznesga qanday ta’sir qilayotganini yaqqol ko‘rsatadi.
                              </p>


                         </div>
                         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                              {Achieve.map((item) => (
                                   <div key={item.id} className='text-center flex flex-col gap-5' data-aos="fade-up">
                                        <h2 className='text-6xl font-semibold'><CountUp end={item.number} duration={3} />{item.sign}</h2>
                                        <h4 className='text-xl font-medium'>{item.title}</h4>
                                        <p>{item.subtitle}</p>
                                   </div>
                              ))}
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default Achievements
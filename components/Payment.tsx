"use client"

import React from 'react'
import { Card } from './ui/card'
import { Check } from 'lucide-react'
import { Button } from './ui/button'
import { Separator } from './ui/separator'
import Link from 'next/link'

import { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'

const Tarif = [
     {
          id: 1,
          tarif: "Kichik Biznes",
          cost: "100 000",
          feautures: [
               'Asosiy funksiyalar',
               'Cheklangan ombor hajmi',
               '1 ta foydalanuvchi',
               'Hisobot eksport qilish',
               'Yillik yangilanishlar',
               'Qo‘llab-quvvatlash (email)'
          ],
     },
     {
          id: 2,
          tarif: "Standart",
          cost: "250 000",
          feautures: [
               "To'liq funksiyalar",
               "O'rtacha ombor hajmi",
               "Mobil ilova",
               '3 ta foydalanuvchi',
               'Kundalik hisobotlar',
               'Texnik yordam (chat)'
          ]
     },
     {
          id: 3,
          tarif: "Biznes",
          cost: "500 000",
          feautures: [
               'Barcha funksiyalar',
               'Cheksiz ombor',
               "Shaxsiy menejer",
               "Qo‘shimcha imkoniyatlar",
               'Jamoa boshqaruvi',
               'Analitika vositalari',
               '24/7 texnik yordam'
          ]
     }
]


function Payment() {
     useEffect(() => {
          AOS.init({
               duration: 1000,
               once: true,
          })
     }, [])
     return (
          <section id='tariflar' className='py-20 bg-white scroll-mt-24'  >
               <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div>
                         <div className="text-center mb-16">
                              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4" data-aos="fade-up">   Tariflar</h2>
                              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up">
                                   Har bir mijoz — o‘ziga xos. Shu sababli biz <span className='font-bold'>kichik startaplardan tortib, yirik korxonalar</span>gacha bo‘lgan ehtiyojlarga mos <span className="font-bold">uch xil obuna rejasini</span> taklif etamiz. Qaysi bosqichda bo‘lishingizdan qat’i nazar, siz uchun to‘g‘ri yechim mavjud.
                              </p>


                         </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                         {Tarif.map((item) => (
                              <Card key={item.id} className='py-6 px-6 flex flex-col gap-4 rounded-3xl' data-aos="fade-up">
                                   <h3 className='text-xl font-semibold'>{item.tarif}</h3>
                                   <h2 className='text-[40px] font-bold'>{item.cost} <span className='text-sm font-medium text-black/55'>so‘m /oy</span></h2>
                                   <Link href="https://www.gilamchi.uz/" target="_blank">
                                        <Button variant={'link'} className='rounded-3xl font-bold py-5 text-xl'>Obuna bo&apos;lish</Button>
                                   </Link>
                                   <Separator />
                                   <div className='flex flex-col gap-4'>
                                        {
                                             item.feautures.map((feature, idx) => (
                                                  <div key={idx} className='flex items-center gap-3'>
                                                       <div className='w-5 h-5 bg-blue-900 rounded-full text-white flex items-center justify-center'><Check className='w-4 h-4' /></div>
                                                       <p className='text-sm  font-normal'>{feature}</p>
                                                  </div>
                                             ))
                                        }

                                   </div>
                              </Card>
                         ))}
                    </div>
                    <p className='mt-10 text-center text-xl text-black/75' data-aos="fade-up">Bu model barqaror daromad manbaini ta&apos;minlaydi va mijozlarimizga o&apos;z bizneslarini kengaytirish bilan birga, bizning
                         xizmatlarimizdan samarali foydalanish imkonini beradi.</p>
               </div>
          </section>
     )
}

export default Payment
"use client"

import { Button } from "@/components/ui/button"
import { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Hero() {

     useEffect(() => {
          AOS.init({
               duration: 1000,
               once: true,
          })
     }, [])

     return (
          <section id="asosiy" className="relative h-screen flex items-center overflow-hidden scroll-mt-24">
               <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                         backgroundImage: `url('/carpet.png')`,
                    }}
               />

               <div className="absolute inset-0 bg-blue-950/90" />

               <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 flex justify-start">
                    <div className="text-white max-w-7xl w-full mx-auto text-left flex flex-col items-start">
                         <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" data-aos="fade-up">
                              Gilam savdosini
                              <span  className="block text-blue-300">raqamlashtiring!</span>
                         </h1>

                         <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 max-w-2xl leading-relaxed" data-aos="fade-up">
                              Gilam do‘konlari va ishlab chiqaruvchilar uchun raqamli boshqaruv platformasi.
                         </p>

                         <div className="flex gap-2 items-center flex-wrap justify-start">
                              <a href="https://www.gilamchi.uz/" target="_blank">
                                   <Button variant={'link'} className="bg-white text-black hover:bg-white/80"
                                        size="lg" data-aos="fade-up"
                                   >
                                        Bepul boshlang
                                   </Button>
                              </a>
                         </div>
                    </div>
               </div>

               <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                         <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
                    </div>
               </div>
          </section>
     )
}

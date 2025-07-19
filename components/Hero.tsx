"use client"

import { Button } from "@/components/ui/button"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import Image from "next/image"

export default function Hero() {
     useEffect(() => {
          AOS.init({
               duration: 1000,
               once: true,
          })
     }, [])

     return (
          <section id="asosiy" className="relative min-h-screen flex items-center overflow-hidden scroll-mt-24">
               <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                         backgroundImage: `url('/carpet.png')`,
                    }}
               />

               <div className="absolute inset-0 bg-blue-950/75" />

               <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                    <div className="max-w-7xl mx-auto">
                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
                              <div className="text-white mx-auto">
                                   <h1
                                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
                                        data-aos="fade-up"
                                        data-aos-duration="1000"
                                   >
                                        Gilam savdosini
                                        <span className="block text-blue-300 mt-2">raqamlashtiring!</span>
                                   </h1>

                                   <p
                                        className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-200 leading-relaxed max-w-2xl"
                                        data-aos="fade-up"
                                        data-aos-duration="1500"
                                   >
                                        Gilam do&apos;konlari va ishlab chiqaruvchilar uchun raqamli boshqaruv platformasi.
                                   </p>

                                   <div
                                        className="flex sm:flex-row flex-col gap-4 items-start"
                                        data-aos="fade-up"
                                        data-aos-duration="2000"
                                   >
                                        <a
                                             href="https://app.gilamchi.uz/"
                                             target="_blank"
                                             rel="noopener noreferrer"
                                             className="w-full sm:w-fit"
                                        >
                                             <Button
                                                  variant="default"
                                                  className="bg-white text-blue-950 w-full sm:w-fit hover:bg-gray-100 text-sm sm:text-lg md:text-xl font-semibold px-4 sm:px-8 py-2 sm:py-4 rounded-lg transition-all duration-300 hover:scale-105"
                                                  size="lg"
                                             >
                                                  Bepul boshlang
                                             </Button>
                                        </a>

                                        <a
                                             href="#muammolar"
                                             className="w-full sm:w-fit"
                                        >
                                             <Button
                                                  variant="outline"
                                                  className="border-white text-white w-full sm:w-auto hover:bg-white hover:text-blue-950 text-sm sm:text-lg md:text-xl font-semibold px-4 sm:px-8 py-2 sm:py-4 rounded-lg transition-all duration-300 bg-transparent"
                                                  size="lg"
                                             >
                                                  Ko&apos;proq ma&apos;lumot
                                             </Button>
                                        </a>
                                   </div>

                              </div>

                              <div className="" data-aos="fade-up" data-aos-duration="1500">
                                   <div className="relative w-full max-w-2xl lg:mx-0 mx-auto">
                                        <Image
                                             src="/chart.png"
                                             className="w-full h-auto rounded-2xl shadow-2xl"
                                             width={1000}
                                             height={1000}
                                             alt="Gilam savdo statistikasi chart"
                                             priority
                                        />
                                   </div>
                              </div>
                         </div>

                         <div
                              className="mt-16 sm:mt-20 lg:mt-24 flex justify-around flex-wrap items-center gap-3 sm:gap-8 mb-5"
                              data-aos="fade-up"
                              data-aos-duration="2500"
                         >
                              <div className="text-center text-white">
                                   <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-300 mb-2">20+</div>
                                   <div className="text-sm sm:text-base text-gray-300">Faol foydalanuvchilar</div>
                              </div>
                              <div className="text-center text-white">
                                   <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-300 mb-2">90.0%</div>
                                   <div className="text-sm sm:text-base text-gray-300">Mijoz qoniqishi</div>
                              </div>
                              <div className="text-center text-white sm:col-span-2 lg:col-span-1">
                                   <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-300 mb-2">24/7</div>
                                   <div className="text-sm sm:text-base text-gray-300">Texnik yordam</div>
                              </div>
                         </div>
                    </div>
               </div>

               <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center">
                         <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-2 animate-pulse" />
                    </div>
               </div>
          </section>
     )
}

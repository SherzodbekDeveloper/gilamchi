"use client"


import { Pen, Box, GitCompareArrows } from "lucide-react"
import { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'



const advantages = [
     {
          icon: Pen,
          title: "Qog'ozbozlik",
          description: "Hisob-kitoblar va hujjatlarni qo'lda yuritish, xatolar va samarasizlikka olib keladi.",
     },
     {
          icon: Box,
          title: "Zaxira Yo'qotish",
          description: "Ombor nazoratining sustligi tufayli mahsulot yo'qolishi va ortiqcha xarajatlar yuzaga keladi.",
     },
     {
          icon: GitCompareArrows,
          title: "Nazorat Yo'qligi",
          description: "Sotuvlar, mijozlar va to'lovlar bo'yicha to'liq ma'lumotlarning yetishmasligi.",
     },
]

export default function Advantages() {

     useEffect(() => {
          AOS.init({
               duration: 1000,
               once: true,
          })
     }, [])


     return (
          <section id="muammolar" className="py-20 bg-white scroll-mt-24">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4" data-aos="fade-up">Hozirgi Muammolar</h2>
                         <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up">
                              Ko‘pchilik bizneslar hanuzgacha quyidagi muammolar bilan kurashmoqda. Siz ularni avtomatlashtirish orqali butunlay bartaraf etishingiz mumkin.

                         </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                         {advantages.map((advantage, index) => {
                              const IconComponent = advantage.icon
                              return (
                                   <div data-aos="fade-up"
                                        key={index}
                                        className="group text-center p-8 rounded-2xl hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                                        style={{
                                             animationDelay: `${index * 100}ms`,
                                        }}
                                   >
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-900 text-white rounded-full mb-6 group-hover:bg-blue-800 group-hover:scale-110 transition-all duration-300">
                                             <IconComponent className="w-8 h-8" />
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-900 transition-colors">
                                             {advantage.title}
                                        </h3>

                                        <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                                   </div>
                              )
                         })}
                    </div>
               </div>
          </section>
     )
}

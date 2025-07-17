"use client"

import { Ruler, Warehouse, Tag, User2, CircleDollarSign, TabletSmartphone } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'


const advantages = [
     {
          icon: Ruler,
          title: "Kvadrat metr hisobi",
          description: "Har bir gilamning o'lchami va narxini avtomatik hisoblash.",
     },
     {
          icon: Warehouse,
          title: "Ombor Boshqaruvi",
          description: "Zaxiralarni real vaqtda kuzatish, kirim-chiqim nazorati.",
     },
     {
          icon: Tag,
          title: "Ulgurji Narxlar",
          description: "Ulgurji va chakana narxlar tizimi, chegirmalar boshqaruvi.",
     },
     {
          icon: User2,
          title: "Mijozlar Boshqaruvi",
          description: "Mijozlar ma'lumotlar bazasi, sotuv tarixi va preferensiyalarini saqlash.",
     },
     {
          icon: CircleDollarSign,
          title: "Hisobotlar",
          description: "Sotuvlar, foyda va ombor qoldiqlari bo'yicha batafsil hisobotlar.",
     },
     {
          icon: TabletSmartphone,
          title: "Mobil Ilova",
          description: "Platformaga mobil orqali kirish va boshqarish imkoniyati.",
     },
]

export default function Function() {
     useEffect(() => {
          AOS.init({
               duration: 1000,
               once: true,
          })
     }, [])
     return (
          <section id="funksiyalar" className="py-20 bg-white scroll-mt-24">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4" data-aos="fade-up">Mahsulot Funksiyalari</h2>
                         <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up">
                              Nima uchun minglab mijozlar bizni tanlaganini bilib oling
                         </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                         {advantages.map((advantage, index) => {
                              const IconComponent = advantage.icon
                              return (
                                   <Card data-aos="fade-up"
                                        key={index}
                                        className="group hover:shadow-xl !transition-all duration-300 ease-linear hover:-translate-y-1 bg-white border-0"
                                   >
                                        <CardContent className="p-6 text-left">
                                             <div className="inline-flex items-center justify-center w-14 h-14 hover:bg-blue-900 bg-white hover:text-white text-blue-900  rounded-full mb-4 group-hover:text-white group-hover:bg-blue-800 group-hover:scale-110 transition-all duration-300">
                                                  <IconComponent className="w-10 h-10" />
                                             </div>

                                             <h3 className="text-lg font-bold text-gray-900 mb-3">{advantage.title}</h3>



                                             <p className="text-sm text-gray-500">{advantage.description}</p>
                                        </CardContent>
                                   </Card>
                              )
                         })}
                    </div>
               </div>
          </section>
     )
}

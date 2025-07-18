"use client"

import { useState } from "react"
import { Card } from "./ui/card"
import { Check } from "lucide-react"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import Link from "next/link"


const Tarif = [
     {
          id: 1,
          tarif: "Kichik Biznes",
          cost: "100 000",
          feautures: [
               "Asosiy funksiyalar",
               "Cheklangan ombor hajmi",
               "1 ta foydalanuvchi",
               "Hisobot eksport qilish",
               "Yillik yangilanishlar",
               "Qo'llab-quvvatlash (email)",
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
               "3 ta foydalanuvchi",
               "Kundalik hisobotlar",
               "Texnik yordam (chat)",
          ],
     },
     {
          id: 3,
          tarif: "Biznes",
          cost: "500 000",
          feautures: [
               "Barcha funksiyalar",
               "Cheksiz ombor",
               "Shaxsiy menejer",
               "Qo'shimcha imkoniyatlar",
               "Jamoa boshqaruvi",
               "Analitika vositalari",
               "24/7 texnik yordam",
          ],
     },
]

function Payment() {
     const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly")


     const calculatePrice = (monthlyCost: string) => {
          const numericCost = Number.parseInt(monthlyCost.replace(/\s/g, ""))

          if (billingPeriod === "yearly") {

               const yearlyPrice = numericCost * 12 * 0.8
               return yearlyPrice.toLocaleString("uz-UZ").replace(/,/g, " ")
          }

          return monthlyCost
     }
     const calculateMonthlyPrice = (monthlyCost: string) => {
          const numericCost = Number.parseInt(monthlyCost.replace(/\s/g, ""))

          if (billingPeriod === "yearly") {

               const yearlyPrice = numericCost / 12
               return yearlyPrice.toLocaleString("uz-UZ").replace(/,/g, " ")
          }

          return monthlyCost
     }




     return (
          <section id="tariflar" className="py-20 bg-white scroll-mt-24">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div>
                         <div className="text-center mb-16">
                              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4" >
                                   Tariflar
                              </h2>
                              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto" >
                                   Har bir mijoz — o&apos;ziga xos. Shu sababli biz{" "}
                                   <span className="font-bold">kichik startaplardan tortib, yirik korxonalar</span>gacha bo&apos;lgan ehtiyojlarga
                                   mos <span className="font-bold">uch xil obuna rejasini</span> taklif etamiz. Qaysi bosqichda
                                   bo&apos;lishingizdan qat&apos;i nazar, siz uchun to&apos;g&apos;ri yechim mavjud.
                              </p>
                         </div>
                    </div>

                    <div className="flex justify-center mb-12" >
                         <div className="bg-gray-100 p-1 rounded-full flex">
                              <button
                                   onClick={() => setBillingPeriod("monthly")}
                                   className={`px-6 py-3 rounded-full font-semibold transition-all cursor-pointer duration-300 ${billingPeriod === "monthly" ? "bg-white text-blue-900 shadow-md" : "text-gray-600 hover:text-gray-900"
                                        }`}
                              >
                                   Monthly
                              </button>
                              <button
                                   onClick={() => setBillingPeriod("yearly")}
                                   className={`px-6 py-3 rounded-full font-semibold transition-all cursor-pointer duration-300 relative ${billingPeriod === "yearly" ? "bg-white text-blue-900 shadow-md" : "text-gray-600 hover:text-gray-900"
                                        }`}
                              >
                                   Yearly
                                   <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                                        20% off
                                   </span>
                              </button>
                         </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                         {Tarif.map((item) => (
                              <Card key={item.id} className="py-6 px-6 flex flex-col gap-4 rounded-3xl" >
                                   <h3 className="text-xl font-semibold">{item.tarif}</h3>
                                   <h2 className="text-4xl font-bold">
                                        {calculateMonthlyPrice(calculatePrice(item.cost))} <span className="text-sm font-medium text-black/55">UZS / 30 kun</span>
                                   </h2>
                                   {
                                        billingPeriod == 'yearly' ?
                                             <p className="text-black/55"><span className="font-bold text-lg">{calculatePrice(item.cost)}</span> UZS / 365 kun</p> : ''
                                   }
                                   <Link href="https://www.gilamchi.uz/" target="_blank">
                                        <Button variant={"link"} className="rounded-3xl font-bold py-5 text-xl">
                                             Obuna bo&apos;lish
                                        </Button>
                                   </Link>
                                   <Separator />
                                   <div className="flex flex-col gap-4">
                                        {item.feautures.map((feature, idx) => (
                                             <div key={idx} className="flex items-center gap-3">
                                                  <div className="w-5 h-5 bg-blue-900 rounded-full text-white flex items-center justify-center">
                                                       <Check className="w-4 h-4" />
                                                  </div>
                                                  <p className="text-sm font-normal">{feature}</p>
                                             </div>
                                        ))}
                                   </div>
                              </Card>
                         ))}
                    </div>
                  
               </div>
          </section>
     )
}

export default Payment

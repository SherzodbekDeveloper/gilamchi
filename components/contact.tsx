import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

const contactInfo = [
     {
          icon: Phone,
          title: "Telefon",
          details: ["+998 90 123 45 67", "+998 91 234 56 78"],
          description: "Har kuni 9:00 dan 21:00 gacha",
     },
     {
          icon: Mail,
          title: "Email",
          details: ["info@gilamchi.uz", "buyurtma@gilamchi.uz"],
          description: "24 soat ichida javob beramiz",
     },
     {
          icon: MapPin,
          title: "Manzil",
          details: ["Toshkent sh., Chilonzor tumani", "Bunyodkor ko'chasi 12-uy"],
          description: "Dushanba-Shanba: 9:00-19:00",
     },
     {
          icon: Clock,
          title: "Ish Vaqti",
          details: ["Dushanba - Shanba: 9:00-19:00", "Yakshanba: 10:00-17:00"],
          description: "Bayramlar: kelishilgan holda",
     },
]

export default function Contact() {
     return (
          <section id="aloqa" className="py-20 bg-gray-50">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Biz Bilan Bog&apos;laning</h2>
                         <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                              Savollaringiz bormi? Biz sizga yordam berishga tayyormiz
                         </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                         {contactInfo.map((info, index) => {
                              const IconComponent = info.icon
                              return (
                                   <Card
                                        key={index}
                                        className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-0"
                                   >
                                        <CardContent className="p-6 text-center">
                                             <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-900 text-white rounded-full mb-4 group-hover:bg-blue-800 group-hover:scale-110 transition-all duration-300">
                                                  <IconComponent className="w-6 h-6" />
                                             </div>

                                             <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>

                                             <div className="space-y-1 mb-3">
                                                  {info.details.map((detail, idx) => (
                                                       <p key={idx} className="text-gray-700 font-medium">
                                                            {detail}
                                                       </p>
                                                  ))}
                                             </div>

                                             <p className="text-sm text-gray-500">{info.description}</p>
                                        </CardContent>
                                   </Card>
                              )
                         })}
                    </div>

                    <div className="bg-blue-900 rounded-3xl p-8 md:p-12 text-center text-white">
                         <h3 className="text-2xl md:text-3xl font-bold mb-4">Buyurtma Berishga Tayyormisiz?</h3>
                         <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                              Eng yaxshi gilamlarni tanlash uchun bizning katalogimizni ko&apos;ring yoki to&apos;g&apos;ridan-to&apos;g&apos;ri buyurtma bering
                         </p>

                         <div className="flex flex-col sm:flex-row gap-4 justify-center">
                              <a href="#turlar" className="">
                              <Button
                                   size="lg"
                                   className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 text-lg cursor-pointer rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
                              >
                                   Katalogni Ko&apos;rish
                              </Button>
                              </a>
                              <a href="#aloqa">
                              <Button
                                   size="lg"
                                   variant="outline"
                                   className="border-white text-white hover:bg-white cursor-pointer hover:text-blue-900 px-8 py-3 text-lg rounded-full transition-all duration-300 bg-transparent"
                              >
                                   Buyurtma Berish
                              </Button>
                              
                              </a>
                         </div>
                    </div>
               </div>
          </section>
     )
}

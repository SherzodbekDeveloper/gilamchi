/* eslint-disable @next/next/no-img-element */
import { Card, CardContent } from "@/components/ui/card"

const carpetTypes = [
     {
          id: 1,
          title: "Klassik Gilamlar",
          description: "An'anaviy naqshlar va yuqori sifatli materiallar bilan tayyorlangan klassik gilamlar.",
          image: "/carpetTypes/classic.png",
          features: ["Yuqori sifat", "Chidamli", "Klassik dizayn"],
     },
     {
          id: 2,
          title: "Zamonaviy Gilamlar",
          description: "Hozirgi zamon uslubida tayyorlangan, interer bilan mukammal uyg'un keladigan gilamlar.",
          image: "/carpetTypes/modern.png",
          features: ["Zamonaviy dizayn", "Rang-barang", "Moslashuvchan"],
     },
     {
          id: 3,
          title: "Bolalar Gilamlari",
          description: "Bolalar xonasi uchun maxsus ishlab chiqarilgan, xavfsiz va rang-barang gilamlar.",
          image: "/carpetTypes/children.png",
          features: ["Xavfsiz materiallar", "Rang-barang", "Yumshoq"],
     },
     {
          id: 4,
          title: "Lux Gilamlar",
          description: "Eng yuqori sifatli materiallardan tayyorlangan hashamatli va noyob gilamlar.",
          image: "/carpetTypes/lux.png",
          features: ["Premium sifat", "Noyob dizayn", "Hashamatli"],
     },
]

export default function CarpetTypes() {
     return (
          <section id="turlar" className="py-20 bg-gray-50">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Gilam Turlari</h2>
                         <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                              Har xil uslub va ehtiyojlar uchun keng assortimentdagi gilamlarimiz bilan tanishing
                         </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                         {carpetTypes.map((carpet, index) => (
                              <Card
                                   key={carpet.id}
                                   className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 overflow-hidden"
                                   style={{
                                        animationDelay: `${index * 100}ms`,
                                   }}
                              >
                                   <div className="relative overflow-hidden">
                                        <img
                                             src={carpet.image || "/placeholder.svg"}
                                             alt={carpet.title}
                                             className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                   </div>

                                   <CardContent className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                                             {carpet.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4 leading-relaxed">{carpet.description}</p>

                                        <div className="space-y-2">
                                             {carpet.features.map((feature, idx) => (
                                                  <div key={idx} className="flex items-center text-sm text-gray-500">
                                                       <div className="w-2 h-2 bg-blue-900 rounded-full mr-2" />
                                                       {feature}
                                                  </div>
                                             ))}
                                        </div>
                                   </CardContent>
                              </Card>
                         ))}
                    </div>
               </div>
          </section>
     )
}

import { Shield, Award, Truck, HeartHandshake, Star, Clock } from "lucide-react"

const advantages = [
     {
          icon: Shield,
          title: "Kafolat",
          description: "Barcha mahsulotlarimizga 2 yillik kafolat beramiz",
     },
     {
          icon: Award,
          title: "Yuqori Sifat",
          description: "Faqat eng yaxshi materiallardan tayyorlangan gilamlar",
     },
     {
          icon: Truck,
          title: "Tez Yetkazib Berish",
          description: "Butun O'zbekiston bo'ylab 24 soat ichida yetkazib berish",
     },
     {
          icon: HeartHandshake,
          title: "Professional Xizmat",
          description: "Tajribali mutaxassislardan maslahat va yordam",
     },
     {
          icon: Star,
          title: "Mijozlar Bahosi",
          description: "10,000+ mamnun mijozlar va 5 yulduzli baholash",
     },
     {
          icon: Clock,
          title: "24/7 Qo'llab-quvvatlash",
          description: "Har qanday vaqtda savol va murojaatlaringizni qabul qilamiz",
     },
]

export default function Advantages() {
     return (
          <section id="afzalliklar" className="py-20 bg-white">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                         <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Bizning Afzalliklarimiz</h2>
                         <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                              Nima uchun minglab mijozlar bizni tanlaganini bilib oling
                         </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                         {advantages.map((advantage, index) => {
                              const IconComponent = advantage.icon
                              return (
                                   <div
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

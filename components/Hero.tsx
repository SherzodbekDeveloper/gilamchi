import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
     return (
          <section id="asosiy" className="relative h-screen flex items-center justify-center overflow-hidden">
               <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                         backgroundImage: `url('/carpet.png')`,
                    }}
               />

               <div className="absolute inset-0 bg-black/60" />

               <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                        Sifatli Gilamlar

                         <span className="block text-blue-300">Siz izlagan nafislik!</span>
                    </h1>

                    <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
                         Uyingizni bezash uchun eng yaxshi sifatli va chiroyli gilamlarni tanlang. Har bir gilam sizning hayotingizga
                         qulaylik va go&apos;zallik olib keladi.
                    </p>

                    <Link href="#turlar">
                         <Button
                              size="lg"
                              className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-105"
                         >
                              Katalogni ko&apos;rish
                         </Button>
                    </Link>
               </div>

               <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                         <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
                    </div>
               </div>
          </section>
     )
}

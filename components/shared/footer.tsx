import Link from "next/link"
import { Facebook, Instagram, Phone, Mail } from "lucide-react"
import Image from "next/image"

export default function Footer() {
     return (
          <footer className="bg-gray-900 text-white py-12">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                         <div className="col-span-1 md:col-span-2">
                              <Image src={'/logo.png'} width={150} height={130} alt="logo" className="mb-6 "/>
                              <p className="text-gray-300 mb-6 leading-relaxed">
                                   O&apos;zbekistondagi eng yirik gilam do&apos;koni. 2010 yildan beri mijozlarimizga eng sifatli va chiroyli
                                   gilamlarni taklif etib kelmoqdamiz.
                              </p>
                              <div className="flex space-x-4">
                                   <Link href="#" className="text-gray-400 hover:text-blue-300 transition-colors">
                                        <Facebook className="w-6 h-6" />
                                   </Link>
                                   <Link href="#" className="text-gray-400 hover:text-blue-300 transition-colors">
                                        <Instagram className="w-6 h-6" />
                                   </Link>
                                   <Link href="#" className="text-gray-400 hover:text-blue-300 transition-colors">
                                        <Phone className="w-6 h-6" />
                                   </Link>
                                   <Link href="#" className="text-gray-400 hover:text-blue-300 transition-colors">
                                        <Mail className="w-6 h-6" />
                                   </Link>
                              </div>
                         </div>

                         <div>
                              <h4 className="text-lg font-semibold mb-4">Tezkor Havolalar</h4>
                              <ul className="space-y-2">
                                   <li>
                                        <Link href="#asosiy" className="text-gray-300 hover:text-blue-300 transition-colors">
                                             Asosiy
                                        </Link>
                                   </li>
                                   <li>
                                        <Link href="#turlar" className="text-gray-300 hover:text-blue-300 transition-colors">
                                             Turlar
                                        </Link>
                                   </li>
                                   <li>
                                        <Link href="#afzalliklar" className="text-gray-300 hover:text-blue-300 transition-colors">
                                             Afzalliklar
                                        </Link>
                                   </li>
                                   <li>
                                        <Link href="#aloqa" className="text-gray-300 hover:text-blue-300 transition-colors">
                                             Aloqa
                                        </Link>
                                   </li>
                              </ul>
                         </div>

                         <div>
                              <h4 className="text-lg font-semibold mb-4">Aloqa Ma&apos;lumotlari</h4>
                              <div className="space-y-3">
                                   <div className="flex items-center">
                                        <Phone className="w-4 h-4 mr-2 text-blue-300" />
                                        <span className="text-gray-300">+998 90 123 45 67</span>
                                   </div>
                                   <div className="flex items-center">
                                        <Mail className="w-4 h-4 mr-2 text-blue-300" />
                                        <span className="text-gray-300">info@gilamchi.uz</span>
                                   </div>
                                   <div className="text-gray-300">
                                        <p>Toshkent sh., Chilonzor tumani</p>
                                        <p>Bunyodkor ko&apos;chasi 12-uy</p>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                         <p className="text-gray-400">© 2024 Gilamchi. Barcha huquqlar himoyalangan.</p>
                    </div>
               </div>
          </footer>
     )
}

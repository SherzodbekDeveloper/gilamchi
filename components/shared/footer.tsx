import Image from "next/image"
import Link from "next/link"
import { Separator } from "../ui/separator"

const navLinks = [
     { href: "/", label: "Asosiy" },
     { href: "/about", label: "Haqimizda" },
     { href: "/price", label: "Tariflar" },
     { href: "/contact", label: "Aloqa" },
     { href: "/agreement", label: "Foydalanish shartlari" },
     { href: "/privacy", label: "Maxfiylik siyosati" },
]

const navInfo = [
     { href: "tel:+998919449491", label: "91 944-94-91" },
     { href: "tel:+998995575230", label: "99 557-52-30" },
     { href: "#", label: "Instagram" },
     { href: "#", label: "Telegram" },
     { href: "https://github.com/dotsoftuz/", label: "Github" },
]

export default function Footer() {
     return (
          <footer className="py-10 bg-gray-100">
               <div className="max-w-7xl mx-auto px-4 flex justify-between flex-wrap gap-8 text-sm text-gray-700">
                    {/* Logo & description */}
                    <div className="col-span-2 md:col-span-1 max-w-[400px] w-full">
                         <Link href="/" className="hover:opacity-80 inline-block mb-4">
                              <Image src="/logo.png" alt="Logo" width={120} height={40} />
                         </Link>
                         <p className="text-gray-600">
                              Gilam do‘konlari va ishlab chiqaruvchilar uchun raqamli boshqaruv platformasi.
                         </p>
                    </div>

                    {/* Sahifalar */}
                    <div className="flex items-start gap-20">
                         <div>

                              <h4 className="font-semibold mb-2">Sahifalar</h4>
                              <ul className="space-y-1">
                                   {navLinks.map(link => (
                                        <li key={link.href} >
                                             <Link href={link.href} className="hover:text-blue-900 transition-colors">
                                                  {link.label}
                                             </Link>
                                        </li>
                                   ))}
                              </ul>
                         </div>
                         {/* Kontaktlar */}
                         <div>

                              <h4 className="font-semibold mb-2">Aloqa</h4>
                              <ul className="space-y-1">
                                   {navInfo.map(link => (
                                        <li key={link.label} className="text-nowrap">
                                             <Link href={link.href} className="hover:text-blue-900 transition-colors">
                                                  {link.label}
                                             </Link>
                                        </li>
                                   ))}
                              </ul>
                         </div>
                    </div>
               </div>

               <Separator className="my-6" />

               {/* Footer pastki qismi */}
               <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                    <span className="text-sm text-gray-600">Copyright © 2025</span>
                    <a href="https://www.dotsoft.uz" target="_blank" className="flex items-center gap-1">
                         <Image src="/dotsoft.png" width={150} height={150} alt="Dotsoft Logo" />
                         <span className="text-sm text-black/60">tomonidan yaratildi</span>
                    </a>
               </div>
          </footer>
     )
}

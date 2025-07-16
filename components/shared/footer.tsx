import Image from "next/image"
import Link from "next/link"
import { Separator } from "../ui/separator"

export default function Footer() {
     return (
          <footer className="py-5 bg-gray-100">
               <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">

                    <Link href="/" className="hover:opacity-80 transition-opacity">
                         <Image src="/logo.png" alt="Logo" width={120} height={40} />
                    </Link>


                    <p className="text-gray-600 text-sm text-center md:text-right">
                         Gilam do‘konlari va ishlab chiqaruvchilar uchun raqamli boshqaruv platformasi.
                    </p>
               </div>
               <Separator className="my-3" />
               <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                    <span>Copyright © 2025</span>
                    <a href="https://www.dotsoft.uz" target="_blank">
                         <div className="flex items-center gap-1">
                              <Image src={'/dotsoft.png'} width={150} height={150} alt="Dotsoft Logo" /> <span className="text-sm text-black/60">tomonidan yaratildi</span>
                         </div>
                    </a>
               </div>
          </footer>
     )
}

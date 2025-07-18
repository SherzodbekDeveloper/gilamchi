"use client"

import Link from "next/link"
import { useEffect, useState, useRef } from "react"
import { Button } from "../ui/button"
import { MenuIcon, X } from "lucide-react"
import Image from "next/image"

interface NavLink {
     href: string
     label: string
}

const navLinks: NavLink[] = [
     { href: "/", label: "Asosiy" },
     { href: "/about", label: "Haqimizda" },
     { href: "/price", label: 'Tariflar' },
     { href: "/contact", label: 'Aloqa' },
     { href: "/agreement", label: 'Foydalanish shartlari' },
     { href: "/privacy", label: 'Maxfiylik siyosati' },
]

function Navbar() {
     const [isOpen, setIsOpen] = useState(false)
     const [isScrolled, setIsScrolled] = useState(false)
     const mobileMenuRef = useRef<HTMLDivElement>(null)

     useEffect(() => {
          const handleScroll = () => {
               setIsScrolled(window.scrollY > 10)
          }

          const handleClickOutside = (event: MouseEvent) => {
               if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
                    setIsOpen(false)
               }
          }

          const handleEscape = (event: KeyboardEvent) => {
               if (event.key === "Escape") {
                    setIsOpen(false)
               }
          }

          window.addEventListener("scroll", handleScroll)
          document.addEventListener("mousedown", handleClickOutside)
          document.addEventListener("keydown", handleEscape)

          return () => {
               window.removeEventListener("scroll", handleScroll)
               document.removeEventListener("mousedown", handleClickOutside)
               document.removeEventListener("keydown", handleEscape)
          }
     }, [])

     useEffect(() => {
          if (isOpen) {
               document.body.style.overflow = "hidden"
          } else {
               document.body.style.overflow = "unset"
          }

          return () => {
               document.body.style.overflow = "unset"
          }
     }, [isOpen])

     const handleMobileMenuToggle = () => {
          setIsOpen(!isOpen)
     }

     const handleMobileLinkClick = () => {
          setIsOpen(false)
     }

     return (
          <>
               <header
                    className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-3" : "bg-white/90 backdrop-blur-sm py-4"
                         }`}
               >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                         <Link href="/" className="group transition-transform duration-200 hover:scale-105">
                              <Image src={'/logo.png'} alt="logo" width={130} height={100} />
                         </Link>

                         <div className="flex gap-2 items-center">
                         <nav className="hidden lg:flex space-x-8 mr-4" role="navigation">
                              {navLinks.slice(0, 4).map((link) => (
                                   <Link
                                        key={link.href}
                                        href={link.href}
                                        className="text-gray-700 text-lg font-medium hover:text-blue-900 transition-colors duration-200 relative group"
                                   >
                                        {link.label}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-900 transition-all duration-200 group-hover:w-full" />
                                   </Link>
                              ))}
                         </nav>
                              <a href="https://www.gilamchi.uz/" target="_blank" className="md:block hidden">
                                   <Button variant={'link'}>
                                        Hisobga kirish
                                   </Button>
                              </a>

                              <Button
                                   variant="ghost"
                                   className=" relative z-50 hover:bg-blue-50 transition-colors cursor-pointer rounded-sm"
                                   onClick={handleMobileMenuToggle}
                                   aria-label={isOpen ? "Close menu" : "Open menu"}
                              >
                                   <div className="relative w-2 h-10 flex items-center justify-center ">
                                        <MenuIcon
                                             className={`w-10 h-10 transition-all duration-300 `}
                                        />

                                   </div>
                              </Button>
                         </div>
                    </div>
               </header>

               <div
                    className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                         }`}
               />
               {isOpen && (
                    <div
                         className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm transition-opacity duration-300"
                         onClick={handleMobileMenuToggle}
                    ></div>
               )}
               <div
                    ref={mobileMenuRef}
                    className={`fixed top-0 right-0 h-full w-full md:w-[400px]  bg-white shadow-2xl z-50  transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
                         }`}
               >
                    <div className="flex flex-col h-full">
                         <div className="flex items-center justify-between p-6 border-b border-gray-100">
                              <Image src={'/logo.png'} width={100} height={100} alt="logo" />
                              <Button variant="ghost" size="icon" onClick={handleMobileMenuToggle} className="hover:bg-gray-100 cursor-pointer rounded-sm">
                                   <X className="w-5 h-5" />
                              </Button>
                         </div>

                         <nav className="flex-1 px-6 py-2">
                              <ul className="space-y-2">
                                   {navLinks.map((link, index) => (
                                        <li key={link.href}>
                                             <Link
                                                  href={link.href}
                                                  onClick={handleMobileLinkClick}
                                                  className="block text-lg font-medium text-gray-700 hover:text-blue-900 transition-colors duration-200 "
                                                  style={{
                                                       animationDelay: `${index * 50}ms`,
                                                  }}
                                             >
                                                  {link.label}
                                             </Link>
                                        </li>
                                   ))}
                              </ul>
                         </nav>

                         <div className="p-6 border-t md:hidden block border-gray-100">
                              <a href="https://www.gilamchi.uz/" target="_blank" onClick={handleMobileLinkClick}>
                                   <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white rounded-full">
                                        Hisobga kirish
                                   </Button>
                              </a>

                         </div>
                    </div>
               </div>
          </>
     )
}

export default Navbar
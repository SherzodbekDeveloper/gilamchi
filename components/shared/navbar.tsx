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
  { href: "#asosiy", label: "Asosiy" },
  { href: "#muammolar", label: "Muammolar" },
  { href: "#yechimlar", label: "Yechimlar" },
  { href: "#funksiyalar", label: "Funksiyalar" },
  { href: "#yutuglar", label: "Yutug'lar" },
  { href: "#tariflar", label: "Tariflar" },
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

          <nav className="hidden lg:flex space-x-8" role="navigation">
            {navLinks.map((link) => (
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
          <div className="flex  gap-2 items-center">
            <Link href="#aloqa" className="hidden md:block">
              <Button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-full transition-all duration-200 hover:shadow-lg hover:scale-105 cursor-pointer">
                Sinab ko&apos;rish
              </Button>
            </Link>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden relative z-50 hover:bg-blue-50 transition-colors"
              onClick={handleMobileMenuToggle}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative w-10 h-10 flex items-center justify-center">
                <MenuIcon
                  className={`absolute inset-0 w-6 h-6 text-center transition-all duration-300 ${isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                    }`}
                />
                <X
                  className={`absolute inset-0 transition-all duration-300 ${isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                    }`}
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

      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <Image src={'/logo.png'} width={100} height={100} alt="logo" />
            <Button variant="ghost" size="icon" onClick={handleMobileMenuToggle} className="hover:bg-gray-100">
              <X className="w-5 h-5" />
            </Button>
          </div>

          <nav className="flex-1 px-6 py-8">
            <ul className="space-y-6">
              {navLinks.map((link, index) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={handleMobileLinkClick}
                    className="block text-lg font-medium text-gray-700 hover:text-blue-900 transition-colors duration-200 py-2"
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
            <Link href="#buyurtma" onClick={handleMobileLinkClick}>
              <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-full">
                Sinab ko&apos;rish
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar

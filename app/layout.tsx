import './globals.css'
import { Playfair_Display, Inter } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-playfair',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  metadataBase: new URL('https://www.gilamchi.uz'),
  title: 'Gilamchi Platforma — Gilam biznesingizni raqamli boshqaring',
  description:
    'Gilam do‘konlari va ishlab chiqaruvchilar uchun zamonaviy boshqaruv platformasi. Ombor nazorati, mahsulotlarni raqamlashtirish, foydalanuvchilar tahlili va ko‘plab imkoniyatlar bir joyda.',
  icons: {
    icon: '/icon.jpg',
  },
  openGraph: {
    title: 'Gilamchi — Gilam biznesingiz uchun zamonaviy platforma',
    description:
      'Gilam ishlab chiqaruvchilari va do‘konlari uchun ombor nazorati, mahsulot boshqaruvi va foydalanuvchi tizimi.',
    url: 'https://www.gilamchi.uz/',
    siteName: 'Gilamchi',
    images: [
      {
        url: 'https://gilamchi.vercel.app/icon.png',
        width: 1920,
        height: 1080,
        alt: 'Gilamchi platformasi — raqamli boshqaruv tizimi',
      },
    ],
    locale: 'uz_UZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gilamchi — Gilam biznesingiz uchun zamonaviy platforma',
    description:
      'Mahsulotlar, foydalanuvchilar, statistika va omborni raqamli boshqaring. Gilam do‘konlari uchun yaratilgan maxsus platforma.',
    images: ['https://gilamchi.vercel.app/icon.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body className={`${playfair.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  )
}

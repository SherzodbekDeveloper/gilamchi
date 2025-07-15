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
  title: 'Har bir gilamda bir tarix — Sizning uyingiz uchun nafislik va iliqlik!',
  description: 'O‘zbek gilamchilik san’atining zamonaviy talqini. 100% tabiiy materiallar, milliy naqshlar va jahon darajasidagi sifat. Endi gilam tanlash zavqli va oson!',
  openGraph: {
    title: 'Har bir gilamda bir tarix — Nafislik va Iliqlik',
    description: 'Zamonaviy O‘zbek gilamchilik san’ati — 100% tabiiy material, milliy naqshlar va jahon sifati.',
    url: 'https://www.gilamchi.uz/',
    siteName: 'Gilamchi',
    images: [
      {
        url: 'https://www.gilamchi.uz/seoImage.jpg',
        width: 1920,
        height: 1080,
        alt: 'Qo‘lda to‘qilgan gilam — milliy dizayn va nafislik',
      },
    ],
    locale: 'uz_UZ',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}

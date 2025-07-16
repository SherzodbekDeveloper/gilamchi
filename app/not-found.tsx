import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-8">
      <h1 className="text-4xl font-bold mb-4">404 - Sahifa topilmadi</h1>
      <p className="mb-6 text-gray-600">Kechirasiz, siz izlagan sahifa mavjud emas.</p>
      <Link href="/" className="text-blue-600 hover:underline">
        Bosh sahifaga qaytish
      </Link>
    </div>
  )
}

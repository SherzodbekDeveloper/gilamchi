import { CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import React from 'react'


const Solutions = [
  {
    id: 1,
    title: 'Kvadrat metr hisobi:',
    description: 'Mahsulotlarning xususiyatlariga moslashgan aniq hisob-kitoblar.'
  },
  {
    id: 2,
    title: 'Ombor boshqaruvi:',
    description: 'Zaxiralarni real vaqtda kuzatish va nazorat qilish.'
  },
  {
    id: 3,
    title: 'Ulgurji narxlar:',
    description: 'Turli narx siyosatlari bilan samarali ishlash imkoniyati.'
  },
  {
    id: 4,
    title: 'Mijozlar bazasi:',
    description: 'Aloqalarni boshqarish va mijozlarga moslashtirilgan takliflar yaratish.'
  }
]

function Solution() {
  return (
    <section id='yechimlar' className='py-20 bg-gray-100'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">  Biz Taklif Etadigan Yechimlar</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Nima uchun minglab mijozlar bizni tanlaganini bilib oling
            </p>
          </div>
        </div>
        <div className=' items-start flex flex-col lg:flex-row justify-between gap-4 '>
          <div className='lg:max-w-xl w-full lg:order-1 order-2'>
            <p className='text-xl font-medium'><a href='' className='text-blue-900 cursor-pointer'>Gilamchi.uz</a> gilam savdosining barcha jihatlarini qamrab oluvchi
              yagona, integratsiyalashgan onlayn platformadir. Biz INREPORT
              tajribasini gilam sanoatining o8ziga xos talablariga moslashtirdik.</p>
            <div className='flex flex-col gap-6 mt-5 '>
              {Solutions.map((item) => (
                <div key={item.id} className='flex items-center gap-3'>
                 <div className="w-6 h-6  rounded-full mr-2 text-blue-900 flex items-center justify-center"> <CheckCircle2 className='h-4 w-4'/></div>
                  <p className='text-lg'><span className='text-lg font-semibold '>{item.title}</span> {item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='w-full lg:order-2 order-1 overflow-hidden rounded-xl hover:-translate-y-2 hover:border-blue-900 hover:border-2 transition-transform duration-300'>
            <Image src={'/solution.png'} width={400} height={400} alt='solution' className='w-full rounded-xl transition-transform duration-300  hover:scale-105 ' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solution
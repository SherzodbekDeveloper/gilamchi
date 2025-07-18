"use client"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { Card } from './ui/card'


const testimonials = [
     {
          name: 'Aziz Sharipov',
          text: 'Platformada 3 oydan beri faolman. Har oy o‘rtacha 70 ta gilam sotyapman. Foyda va ombor nazorati juda yengillashdi.',
     },
     {
          name: 'Бахтиёр Жалолов',
          text: 'Бундай статистика ва мижоз таҳлиллари аввал йўқ эди. Ҳар ой 15-20% ўсиш кузатиляпти. Рахмат жамоага.',
     },
     {
          name: 'Sirojiddin Xoliqov',
          text: 'Hisobotlar moduli menga juda yoqdi. Nechta kirim-chiqim, qancha zarar yoki foyda borligini bir tugma bilan bilib olaman.',
     },
     {
          name: 'Темур Солиев',
          text: 'Тақдим этилаётган хизматлар жуда юқори даражада. Бир ойда 45 та сотув бўлди ва 5 млн. сўмдан зиёд фойда кўрдим.',
     },
     {
          name: 'Jamshid Abdullayev',
          text: 'Katta distribyutor sifatida men uchun ombor boshqaruvi juda muhim edi. Endi barchasi tartibda va nazoratda.',
     },
     {
          name: 'Anvar Mamatqulov',
          text: 'Mening sahifamga o‘tgan oyda 500 dan ortiq foydalanuvchi kirgan. Ularning 12%i xarid qilgan — bu katta natija!',
     },
     {
          name: 'Элбек Каримов',
          text: 'Сотув динамикаси графикларда кўриниб туради — бу мени ишни таҳлил қилишимга ёрдам беради.',
     },
     {
          name: 'Rustam Raxmonov',
          text: 'Platformani Telegram’dagi do‘konim bilan bog‘laganimdan beri har kunlik foyda aniqligi oshdi. Endi ko‘proq ishonch bor.',
     },
]



export default function TestimonialsCarousel() {
    
     return (
          <section id='yutuglar' className='py-20 bg-white scroll-mt-24 px-4 sm:px-6 lg:px-8 '>
               <div className="text-center mb-16 ">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4" data-aos="fade-up">Mijozlarimiz fikri</h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up">
                         Platformamizdan foydalangan mijozlarimiz qanday taassurot olganlarini quyida o‘qing.
                    </p>


               </div>
               <Swiper className='max-w-7xl mx-auto ' data-aos="fade-up"
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    autoplay={{
                         delay: 3000,
                         disableOnInteraction: false,
                    }}
                    loop={true}
                    breakpoints={{
                         0: { slidesPerView: 1 },
                         768: { slidesPerView: 2 },
                         1024: { slidesPerView: 3 },
                    }}
               >
                    {testimonials.map((item, index) => (
                         <SwiperSlide key={index} className='pb-2.5'>
                              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-0 h-full flex flex-col justify-between shadow-md rounded-xl p-6 text-center min-h-[250px]">
                                   <div className="flex-1 flex items-center justify-center">
                                        <p className="text-lg italic mb-4">{`"${item.text}"`}</p>
                                   </div>
                                   <div className="mt-6 text-sm text-gray-500">~ {item.name}</div>
                              </Card>
                         </SwiperSlide>
                    ))}
               </Swiper>
          </section>
     )
}


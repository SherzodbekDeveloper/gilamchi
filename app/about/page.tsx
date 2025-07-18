import React from 'react'

function Page() {
  return (
    <section className='py-15  scroll-mt-24'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className="text-start mb-16 flex flex-col gap-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 " >Biz haqimizda</h2>
          <p className="text-lg md:text-xl text-gray-600 " >
            DOTSOFT MCHJ — O&apos;zbekistonning Jizzax shahrida joylashgan va 2021-yildan beri IT bozorida faoliyat yurituvchi innovatsion kompaniya. Biz mijozlarimizga veb-saytlar, veb-ilovalar, mobil ilovalar va brending xizmatlarini taqdim etamiz. Maqsadimiz jahon IT bozorida yetakchi bo&apos;lish va xalqaro talablar darajasida xizmat ko&apos;rsatadigan dasturchilar jamoasini shakllantirishdir.
          </p>
          <p className="text-lg md:text-xl text-gray-600 " >
            DOTSOFT MCHJ sifatida biz GILAMCHI platformasini yaratishda o&apos;z oldimizga savdo jarayonlarini avtomatlashtirish va mijozlarimizga yuqori sifatli xizmat ko&apos;rsatishni maqsad qilganmiz. Bizning jamoamiz innovatsion yechimlar orqali biznesingizni yangi bosqichga olib chiqishga tayyor.
          </p>
          <h3 className="text-xl md:text-xl lg:text-2xl font-bold text-gray-900 " >Bizning Maqsadimiz</h3>
          <p className="text-lg md:text-xl text-gray-600 " >
            Biznes boshqaruvini soddalashtirish, savdo jarayonlarini tezlashtirish va xatoliklarni kamaytirish uchun GILAMCHI platformasini yaratdik. Ushbu platforma biznesingiz uchun barcha vazifalarni hal qilishda ishonchli yordamchi bo&apos;lib xizmat qiladi.
          </p>
          <h3 className="text-xl md:text-xl lg:text-2xl font-bold text-gray-900 " >Bizning Maqsadimiz</h3>
          <p className="text-lg md:text-xl text-gray-600 " >
            Agar sizda savollar yoki qo&apos;shimcha ma&apos;lumotga ehtiyoj bo&apos;lsa, biz bilan bog&apos;laning:
          </p>
          <div className='flex flex-col text-lg' >
            <span className='font-bold'>Manzil: <a className='font-normal'>Jizzax shahar, O&apos;zbekiston</a></span>
            <span className='font-bold'>Telefon: <a className='font-normal' href='tel:+998919449491'> +998 91 944 94 91</a></span>
            <span className='font-bold'>Email: <a className='font-normal' href='mailto:dotsoftuz@gmail.com'>dotsoftuz@gmail.com</a></span>
          </div>
          <p className="text-lg md:text-xl text-gray-600 " >
          Sizning biznesingizni rivojlantirish yo&apos;lida hamkorlik qilishdan mamnunmiz!
          </p>

        </div>
      </div>
    </section>
  )
}

export default Page
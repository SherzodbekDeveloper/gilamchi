import React from 'react'

function Page() {
  return (
    <section className='py-15  scroll-mt-24'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className="text-start mb-16 flex flex-col gap-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 " >Foydalanish Shartlari</h2>
          <p className="text-lg md:text-xl text-gray-600 " >
            GILAMCHI xizmatidan foydalanish orqali siz ushbu shartlarga rozilik bildirasiz. Iltimos, quyidagi shartlarni diqqat bilan o&apos;qing.
          </p>
          <h3 className="text-xl md:text-xl lg:text-2xl font-bold text-gray-900 " >Xizmatlardan Foydalanish</h3>
          <p className="text-lg md:text-xl text-gray-600 " >
            GILAMCHI platformasi faqat qonuniy maqsadlarda foydalaniladi. Platformadan foydalanish davomida, siz hech qanday noqonuniy yoki zararli harakatlar qilmasligingiz kerak.
          </p>
          <h3 className="text-xl md:text-xl lg:text-2xl font-bold text-gray-900 " >Intellektual Mulk</h3>
          <p className="text-lg md:text-xl text-gray-600 " >
            Platformadagi barcha kontent, jumladan, logotiplar, matnlar, grafikalar, bizning mulkimizdir va qonun bilan himoyalangan. Ushbu kontentlardan ruxsatsiz foydalanish taqiqlanadi.
          </p>
          <h3 className="text-xl md:text-xl lg:text-2xl font-bold text-gray-900 " >Mas’uliyatni Cheklash</h3>
          <p className="text-lg md:text-xl text-gray-600 " >
            Biz platformaning uzluksiz ishlashi uchun barcha zarur choralarni ko&apos;ramiz, ammo texnik muammolar, uzilishlar yoki yo&apos;qotishlar uchun mas&apos;uliyatni o&apos;z zimmamizga olmaymiz.
          </p>
          <h3 className="text-xl md:text-xl lg:text-2xl font-bold text-gray-900 " >O&apos;zgartirishlar</h3>
          <p className="text-lg md:text-xl text-gray-600 " >
            Biz ushbu shartlarni istalgan vaqtda yangilash huquqiga egamiz. Yangilangan shartlar ushbu sahifada e&apos;lon qilingan vaqtdan boshlab kuchga kiradi.
          </p>
          <h3 className="text-xl md:text-xl lg:text-2xl font-bold text-gray-900 " >Biz bilan bog&apos;laning</h3>
          <p className="text-lg md:text-xl text-gray-600 " >
          Agar sizda savollar yoki qo&apos;shimcha ma&apos;lumotga ehtiyoj bo&apos;lsa, biz bilan bog&apos;laning:
          </p>
          <div className='flex flex-col text-lg ' >
            <span className='font-bold'>Manzil: <a className='font-normal'>Jizzax shahar, O&apos;zbekiston</a></span>
            <span className='font-bold'>Telefon: <a className='font-normal' href='tel:+998919449491'> +998 91 944 94 91</a></span>
            <span className='font-bold'>Email: <a className='font-normal' href='mailto:dotsoftuz@gmail.com'>dotsoftuz@gmail.com</a></span>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Page
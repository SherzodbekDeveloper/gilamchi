import React from 'react'



const userDatas = ['Ism va familiya', 'Elektron pochta manzili', 'Telefon raqami', "IP manzil va qurilma ma'lumotlari", "Foydalanuvchi tajribasi va veb-sayt xatti-harakatlari"]
const userPrivacy = ['Qonuniy talablar asosida', "Xavfsizlikni ta'minlash uchun", "Bizning xizmatlarimizni taqdim etish uchun ishonchli xizmat ko'rsatuvchilar bilan"]


function Page() {
  return (
    <section className='py-15  scroll-mt-24'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className="text-start mb-16 flex flex-col gap-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 " >Maxfiylik siyosati</h2>
          <p className="text-lg md:text-xl text-gray-600 " >
            GILAMCHI platformasi foydalanuvchilarining shaxsiy ma&apos;lumotlarini himoya qilishga qat&apos;iy amal qiladi. Biz siz haqingizdagi ma&apos;lumotlarni qanday yig&apos;ishimiz, ulardan foydalanishimiz va saqlashimiz haqida quyida batafsil ma&apos;lumot berilgan.
          </p>

          <h3 className="text-xl md:text-xl lg:text-2xl font-bold text-gray-900 " >Ma&apos;lumotlarni yig&apos;ish va ulardan foydalanish</h3>
          <p className="text-lg md:text-xl text-gray-600 " >
            Biz quyidagi ma&apos;lumotlarni to&apos;plashimiz mumkin:
          </p>
          <div className='flex flex-col'>
            {userDatas.map((user, idx) => (
              <div key={idx} className='flex gap-2 items-center'>
                <div className='w-1.5 h-1.5 bg-gray-600 rounded-full'></div>
                <p className='text-gray-600 text-lg md:text-xl' >{user}</p>
              </div>
            ))}
          </div>
          <p className="text-lg md:text-xl text-gray-600 " >
            Ushbu ma&apos;lumotlar xizmatlarimizni yaxshilash, foydalanuvchilar bilan aloqa o&apos;rnatish, xavfsizlikni ta&apos;minlash va qonuniy majburiyatlarni bajarish uchun ishlatiladi.
          </p>
          <h3 className="text-xl md:text-xl lg:text-2xl font-bold text-gray-900 " >Ma&apos;lumotlaringizni himoya qilish</h3>
          <p className="text-lg md:text-xl text-gray-600 " >
            Biz foydalanuvchilarning shaxsiy ma&apos;lumotlarini xavfsiz saqlash uchun zamonaviy texnologiyalar va xavfsizlik protokollaridan foydalanamiz. Maxfiy ma&apos;lumotlar shifrlanadi va faqat maxsus huquqiy sabablar asosida uchinchi tomonlarga oshkor qilinishi mumkin.
          </p>
          <h3 className="text-xl md:text-xl lg:text-2xl font-bold text-gray-900 " >Ma&apos;lumotlarni uchinchi tomonlarga oshkor qilish</h3>

          <p className="text-lg md:text-xl text-gray-600 " >
            Biz foydalanuvchilarning shaxsiy ma&apos;lumotlarini uchinchi tomonlarga sotmaymiz va ulashmaymiz, faqat quyidagi hollarda:
          </p>
          <div className='flex flex-col'>
            {userPrivacy.map((user, idx) => (
              <div key={idx} className='flex gap-2 items-center'>
                <div className='w-1.5 h-1.5 bg-gray-600 rounded-full'></div>
                <p className='text-gray-600 text-lg md:text-xl' >{user}</p>
              </div>
            ))}
          </div>
          <h3 className="text-xl md:text-xl lg:text-2xl font-bold text-gray-900 " >Cookies va kuzatish texnologiyalari</h3>
          <p className="text-lg md:text-xl text-gray-600 " >
            Biz cookies va boshqa kuzatish texnologiyalaridan foydalanuvchilar tajribasini yaxshilash va xizmatlarimizni optimallashtirish uchun foydalanamiz. Foydalanuvchilar cookies fayllarini o&apos;chirib qo&apos;yishlari mumkin, ammo bu xizmatlarimiz funksionalligiga ta&apos;sir qilishi mumkin.
          </p>

          <h3 className="text-xl md:text-xl lg:text-2xl font-bold text-gray-900 " >Ma&apos;lumotlarni saqlash</h3>
          <p className="text-lg md:text-xl text-gray-600 " >
            Sizning shaxsiy ma&apos;lumotlaringiz faqat kerakli muddat davomida saqlanadi va ushbu muddat tugagach, xavfsiz tarzda o&apos;chiriladi. Ma&apos;lumotlarni saqlash muddati xizmat turlari va qonuniy talablar asosida belgilanadi.
          </p>

          <h3 className="text-xl md:text-xl lg:text-2xl font-bold text-gray-900 " >Foydalanuvchilar huquqlari</h3>
          <p className="text-lg md:text-xl text-gray-600 " >
            Foydalanuvchilar o&apos;z ma&apos;lumotlariga kirish, ularni tahrirlash yoki o&apos;chirish huquqiga ega. Bu huquqlardan foydalanish uchun biz bilan bog&apos;lanishingiz mumkin.
          </p>

          <h3 className="text-xl md:text-xl lg:text-2xl font-bold text-gray-900 " >Maxfiylik siyosatiga o&apos;zgarishlar</h3>
          <p className="text-lg md:text-xl text-gray-600 " >
            Maxfiylik siyosatiga kiritilgan o&apos;zgarishlar ushbu sahifada yangilanadi. Foydalanuvchilar ushbu o&apos;zgarishlarni kuzatishlari tavsiya etiladi.
          </p>

          <h3 className="text-xl md:text-xl lg:text-2xl font-bold text-gray-900 " >Biz bilan bog&apos;laning</h3>
          <p className="text-lg md:text-xl text-gray-600 " >
            Maxfiylik siyosati bo&apos;yicha savollaringiz bo&apos;lsa, quyidagi manzillar orqali biz bilan bog&apos;lanishingiz mumkin:
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
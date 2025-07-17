import React from 'react'
import {
     Accordion,
     AccordionContent,
     AccordionItem,
     AccordionTrigger,
} from "@/components/ui/accordion"



function AccordionQuestions() {
     return (
          <>


               <section id="tariflar" className="py-20 bg-white scroll-mt-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                         <div>
                              <div className="text-center mb-16">
                                   <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4" data-aos="fade-up">
                                        Ko&apos;p beriladigan savollar
                                   </h2>
                                   <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto" data-aos="fade-up">
                                        Bizning mijozlarimiz tomonidan tez-tez so‘raladigan savollarni shu yerda jamladik. Agar sizda qo‘shimcha savollar bo‘lsa, biz bilan bog‘laning — yordam berishga tayyormiz.

                                   </p>
                              </div>
                         </div>
                         <div className='flex flex-col gap-2'>

                              <Accordion type="single" collapsible className='bg-gray-100 p-2 px-4 rounded-2xl border-2 border-gray-300' data-aos="fade-up">
                                   <AccordionItem value="item-1">
                                        <AccordionTrigger className='text-xl font-semibold cursor-pointer '>Menga qaysi tarif mos keladi?</AccordionTrigger>
                                        <AccordionContent>
                                             Sizga mos keladigan tarifni aniqlash konsultanlarimizga murojaat qiling, ular biznesingizni baholashga va eng yaxshi tarifni tanlashga yordam beradi. Konsultanlar bilan bog&apos;lanish uchun havola bo&apos;ylab o&apos;ting
                                        </AccordionContent>
                                   </AccordionItem>
                              </Accordion>
                              <Accordion type="single" collapsible className='bg-gray-100 p-2 px-4 rounded-2xl border-2 border-gray-300' data-aos="fade-up">
                                   <AccordionItem value="item-1">
                                        <AccordionTrigger className='text-xl font-semibold cursor-pointer'>Agar GILAMCHI menga mos kelmasa-chi? Tarifni sotib olishdan oldin sinab ko&apos;rishim mumkinmi?</AccordionTrigger>
                                        <AccordionContent>
                                           Barcha tariflar uchun 10 kunlik bepul sinov muddatibelgilangan, ushbu muddat davomida dasturning imkoniyatlarini to&apos;liq baholashingiz va biznesingiz uchun mos keladigan xususiyatlarni tanlashingiz mumkin. Agar GILAMCHI biznesingizga mos kelmasa, 10 kunlik sinov muddatidan so&apos;ng hech qanday to&apos;lovsiz ishlatishni to&apos;xtatishingiz mumkin.
                                        </AccordionContent>
                                   </AccordionItem>
                              </Accordion>
                               <Accordion type="single" collapsible className='bg-gray-100 p-2 px-4 rounded-2xl border-2 border-gray-300' data-aos="fade-up">
                                   <AccordionItem value="item-1">
                                        <AccordionTrigger className='text-xl font-semibold cursor-pointer'>Nima uchun men dasturni darhol sotib ololmayman va nega oylik abonent to&apos;lovini to&apos;lashim kerak?</AccordionTrigger>
                                        <AccordionContent>
                                          Dastur ijara shaklida tadim etiladi, shu sabali serverlarni sotib olish, o&apos;rnatish va xodimlarni o&apos;rgatish uchun ko&apos;p pul sarflashingiz shart emas. GILAMCHI jamoasi ilovaning texnik qismiga to‘liq xizmat ko&apos;rsatadi, mijozlarni qo‘llab-quvvatlaydi va o‘qitadi, tizimni doimiy ravishda takomillashtiradi va funksionallikni boyitib boradi.
                                        </AccordionContent>
                                   </AccordionItem>
                              </Accordion>
                               <Accordion type="single" collapsible className='bg-gray-100 p-2 px-4 rounded-2xl border-2 border-gray-300' data-aos="fade-up">
                                   <AccordionItem value="item-1">
                                        <AccordionTrigger className='text-xl font-semibold cursor-pointer'>Agar do&apos;konlarim soni 10 tadan ortiq bo&apos;lsa, chegirmalar taqdim etiladimi?</AccordionTrigger>
                                        <AccordionContent>
                                            Bir yil yoki undan ko&apos;proq muddatga to&apos;langanda 20% chegirma taqdim etiladi. Shu bilan birga, agar savdo nuqtalaringiz soni 10 dan ortiq bo&apos;lsa, narxlar va ulanish shartlari alohida muhokama qilinishi mumkin.
                                        </AccordionContent>
                                   </AccordionItem>
                              </Accordion>
                               <Accordion type="single" collapsible className='bg-gray-100 p-2 px-4 rounded-2xl border-2 border-gray-300' data-aos="fade-up">
                                   <AccordionItem value="item-1">
                                        <AccordionTrigger className='text-xl font-semibold cursor-pointer'>Tariflar bir-biridan nimalar bilan farq qiladi?</AccordionTrigger>
                                        <AccordionContent>
                                             Tariflar funksional to&apos;plami bilan farq qiladi, shuningdek, foydalanuvchilar soni ham farqlanadi. Misol uchun, agar siz endigina chakana biznesni boshlagan bo&apos;lsangiz va bitta do&apos;konni boshqarsangiz, Start rejasi siz uchun mos keladi. Agar siz katta tarmoqqa ega bo&apos;lsangiz va avtomatlashtirish jarayonini to&apos;liq sozlashni va ilg&apos;or statistik ma&apos;lumotlarni olishni istasangiz, sizga Bussines tarifi mos keladi.
                                        </AccordionContent>
                                   </AccordionItem>
                              </Accordion>
                                <Accordion type="single" collapsible className='bg-gray-100 p-2 px-4 rounded-2xl border-2 border-gray-300' data-aos="fade-up">
                                   <AccordionItem value="item-1">
                                        <AccordionTrigger className='text-xl font-semibold cursor-pointer'>GILAMCHI tizimiga ulanish va tarifni tanlash uchun nima qilish kerak?</AccordionTrigger>
                                        <AccordionContent>
                                           Shunchaki Bepul Demo bo&apos;limiga o&apos;ting va dasturdan foydalanib ko&apos;ring. Ma&apos;qul kelsa, 10 kun ichida to&apos;lovni amalga oshiring.
                                        </AccordionContent>
                                   </AccordionItem>
                              </Accordion>
                         </div>
                    </div>
               </section>
          </>
     )
}

export default AccordionQuestions
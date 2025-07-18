"use client"
import { toast } from "sonner"


const handleSubmit = async (e) => {
  e.preventDefault()
  const name = e.target.name.value
  const email = e.target.email.value
  const phone = e.target.phone.value
  const message = e.target.message.value

  const botToken = "7725458563:AAGBKzkw1ABOdBcwDEQ75BQmsioQzELLtlI"
  const chatId = "6564682532"
  const text = `<b>Yangi murojaat 📩</b>

👤 Ismi: ${name}
📧 Email: ${email}
📞 Telefon: ${phone}
💬 Xabar: ${message}
  `

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`

  try {
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: "HTML",
      }),
    })
    toast("Xabaringiz yuborildi!")
    e.target.reset()
  } catch (err) {
    toast("Xatolik yuz berdi!")
    console.error(err)
  }
}

function Page() {
  return (
    <section className=" py-20 px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Aloqa</h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">Biz bilan bog&apos;laning.</p>
      </div>

      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl  ">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Ismingiz va familyangiz"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email manzil"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <input
            type="tel"
            name="phone"
            placeholder="Telefon raqamingiz"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Xabaringizni shu yerga yozing"
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-3 rounded-md font-medium hover:bg-blue-800 transition-colors"
          >
            Yuborish
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-600">
          Email manzilimiz:{" "}
          <a href="mailto:dotsoftuz@gmail.com" className="text-blue-600 font-medium">
            dotsoftuz@gmail.com
          </a>
        </div>

        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-4 text-gray-500 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <a
          href="https://t.me/ubehruz"
          target="_blank"
          className="flex items-center justify-center gap-2 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-md font-medium transition"
          rel="noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9.036 15.345l-.39 4.317c.557 0 .8-.238 1.093-.524l2.625-2.488 5.437 3.97c1 .553 1.72.262 1.983-.928l3.6-16.875.002-.002c.28-1.307-.473-1.82-1.39-1.512L.705 9.577c-1.3.46-1.287 1.115-.234 1.407l4.912 1.532 11.397-7.204c.537-.325 1.03-.145.627.205z" />
          </svg>
          Telegram orqali bog&apos;lanish
        </a>
      </div>
    </section>
  )
}

export default Page

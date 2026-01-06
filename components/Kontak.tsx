"use client"
import { Mail, Phone } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="w-full py-20 px-6">
      <div className="mx-auto max-w-3xl text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Hubungi Saya
        </h2>

        {/* Description */}
        <p className="text-muted-foreground mb-10">
          Tertarik bekerja sama atau memiliki pertanyaan?
          Jangan ragu untuk menghubungi saya melalui WhatsApp atau Email.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          {/* WhatsApp */}
          <a
            href="https://wa.me/62859102857730"
            target="_blank"
            className="
              group inline-flex items-center justify-center gap-3
              rounded-xl px-8 py-4 font-semibold
              bg-green-500 text-white
              transition-all duration-300
              hover:bg-green-600 hover:scale-105
              active:scale-95
              shadow-lg hover:shadow-green-500/40
            "
          >
            <Phone className="w-5 h-5 group-hover:rotate-12 transition" />
            WhatsApp Sekarang
          </a>

          {/* Email */}
          <a
            href="mailto:wasaraadyatma@gmail.com"
            className="
              group inline-flex items-center justify-center gap-3
              rounded-xl px-8 py-4 font-semibold
              border border-border
              bg-background
              transition-all duration-300
              hover:bg-muted hover:scale-105
              active:scale-95
              shadow-lg
            "
          >
            <Mail className="w-5 h-5 group-hover:-rotate-12 transition" />
            Kirim Pesan Email
          </a>
        </div>
      </div>
    </section>
  )
}

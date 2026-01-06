"use client"

import { Code, Layout, Sparkles } from "lucide-react"

export default function Tentang() {
  return (
    <section className="w-full py-20 px-6">
      <div className="mx-auto max-w-4xl">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Tentang WebMurah
        </h2>

        {/* Description */}
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14">
          Website profesional, modern, dan responsif dengan harga terjangkau.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="group rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <Layout className="w-10 h-10 mb-4 text-primary group-hover:scale-110 transition" />
            <h3 className="font-semibold text-lg mb-2">
              Desain Modern
            </h3>
            <p className="text-sm text-muted-foreground">
              Mengutamakan desain yang bersih, minimalis, dan sesuai tren UI/UX
              masa kini.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <Code className="w-10 h-10 mb-4 text-primary group-hover:scale-110 transition" />
            <h3 className="font-semibold text-lg mb-2">
              Kode Berkualitas
            </h3>
            <p className="text-sm text-muted-foreground">
              Menulis kode yang rapi, terstruktur, dan mudah dikembangkan
              menggunakan teknologi modern.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <Sparkles className="w-10 h-10 mb-4 text-primary group-hover:scale-110 transition" />
            <h3 className="font-semibold text-lg mb-2">
              Fokus Pengalaman
            </h3>
            <p className="text-sm text-muted-foreground">
              Mengutamakan kenyamanan pengguna dengan performa cepat dan
              interaksi yang halus.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
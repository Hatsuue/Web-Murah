import Image from "next/image";
import Link from "next/link";
import TextType from "@/components/TextType";
import PricingTable from "@/components/PricingTable";
import Tentang from "@/app/Tentang/page";
import ThemeToggle from "@/components/ThemeToggle";
export default function Home() {
  return (
    <>
      <div className="inline-flex items-center gap-2">
        <span className="text-sm">Mode</span>
        <ThemeToggle />
      </div>

      {/* HERO */}
      <section className="py-10">
        <div className="flex justify-center mt-1">
          <Image
            className="rounded-md"
            src="/WEBMURAH.svg"
            width={500}
            height={300}
            alt="Logo Web Murah"
            priority
          />
        </div>
      </section>

      {/* TENTANG */}
      <Tentang />

      {/* INTRO */}
      <article className="mt-10 text-center space-y-4">
        <h1 className="font-bold text-2xl">
          WEBMURAH – Jasa Pembuatan Website Berkualitas
        </h1>

        <p className="max-w-2xl mx-auto text-muted-foreground">
          <strong className="text-green-600 after:content-['_↗']">
            WEBMURAH
          </strong>{" "}
          menyediakan jasa pembuatan website modern, responsif, dan profesional
          dengan harga terjangkau. Cocok untuk personal, UMKM, hingga bisnis
          yang ingin tampil lebih terpercaya secara online.
        </p>
      </article>

      {/* CTA */}
      <section className="w-full py-10">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/Kontak"
            className="
        inline-flex items-center justify-center
        rounded-xl px-6 py-3
        font-semibold text-white
        bg-green-500
        transition-all duration-300
        hover:bg-green-600 hover:scale-105
        active:scale-95
        shadow-lg hover:shadow-green-500/40
      "
          >
            Hubungi Sekarang
          </Link>

          <Link
            href="/harga"
            className="
        inline-flex items-center justify-center
        rounded-xl px-6 py-3
        font-semibold text-white
        bg-blue-500
        transition-all duration-300
        hover:bg-blue-600 hover:scale-105
        active:scale-95
        shadow-lg hover:shadow-green-500/40
      "
          >
            Cek Daftar Harga
          </Link>
        </div>
      </section>
    </>
  );
}

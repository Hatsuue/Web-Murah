"use client"
import Link from "next/link";
import Image from "next/image";
function Header() {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <Link href="/" 
          className="flex items-center">
            <Image
              src="/logo.svg"
              width={30}
              height={30}
              className="rounded-md"
              alt="logo Website Murah"
            />
            <div className="flex flex-col text-left leading-tight p-2">
              <span className="text-xl font-extrabold">WEB</span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                MURAH
              </span>
            </div>
          </Link>
        </div>
        <div className="nav-links">
          <Link href="/">Beranda</Link>
          <Link href="/Tentang">Tentang</Link>
          <Link href="/Kontak">Kontak</Link>
          <Link href="/harga">Harga</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;

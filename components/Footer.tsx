"use client"
import Link from "next/link"
import Image from "next/image"
function Footer() {
  return (
    <>
    <div className="bg-[#333] p-2">
      <div className="text-center text-white">
        <div className="flex justify-center gap-2">
          {" "}
          <img
            width={30}
            height={30}
            className="rounded-md"
            src="/logo.svg"
          />{" "}
          WebMurah{" "}
        </div>
      <p>&copy; All rights reserved </p>
    </div>
      </div>
    </>
  )
}

export default Footer

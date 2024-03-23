import Image from "next/image"
import Link from "next/link"
import React from "react"
import MobileMenu from "./MobileMenu"

function Navbar() {
  return (
    <div className="navbar bg-dark-200 backdrop-blur-lg bg-opacity-90 rounded-3xl px-4">
      <div className="flex-1">
        <Link href="/" className="btn btn-square btn-ghost">
          <figure className="h-10 w-10">
            <Image
              src="/images/logo.svg"
              alt="logo"
              height={500}
              width={500}
              className="w-full h-full object-cover"
            />
          </figure>
        </Link>
      </div>
      <div className="flex-none">
        <MobileMenu />
      </div>
    </div>
  )
}

export default Navbar

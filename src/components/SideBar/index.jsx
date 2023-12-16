import Image from "next/image"
import React from "react"
import NavigationMenu from "./NavigationMenu"
import { FaGithub } from "react-icons/fa"
import { CiLinkedin } from "react-icons/ci"
import Link from "next/link"

function SideBar() {
  return (
    <div className="sticky z-50 top-0 left-0 min-h-screen px-2 w-full bg-white">
      <div className="min-h-screen flex flex-col">
        {/* Info Section */}
        <div className="flex flex-col gap-3 py-8 border-b border-gray-300 items-center w-full">
          <figure className="h-16 w-16">
            <Image
              src="/images/avatar.jpg"
              alt=""
              height={600}
              width={600}
              priority
              className="w-full h-full object-cover rounded-lg"
            />
          </figure>
          <div className="flex flex-col text-center justify-center">
            <p className="font-bold text-black">Farouk Zemmouri</p>
            <p className="font-light text-gray-500 text-xs">
              Front-End Developer
            </p>
          </div>
        </div>
        <div className="flex items-center h-16 justify-center text-black">
          <Link className="btn btn-circle btn-ghost" href="/">
            <FaGithub className="text-xl" />
          </Link>
          <Link className="btn btn-circle btn-ghost" href="/">
            <CiLinkedin className="text-2xl" />
          </Link>
        </div>
        <NavigationMenu />
      </div>
    </div>
  )
}

export default SideBar

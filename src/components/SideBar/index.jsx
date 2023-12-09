import Image from "next/image"
import React from "react"
import NavigationMenu from "./NavigationMenu"
import { FaGithub } from "react-icons/fa"
import { CiLinkedin } from "react-icons/ci"
import Link from "next/link"

function SideBar() {
  return (
    <div className="fixed z-50 top-0 left-0 min-h-screen px-2 border-r border-gray-300 bg-white flex flex-col justify-between">
      <div className="flex flex-col px-4 items-center">
        {/* Info Section */}
        <div className="flex flex-row gap-2 py-8 border-b border-gray-300">
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
          <div className="flex flex-col text-start justify-center">
            <p className="font-bold text-black">Farouk Zemmouri</p>
            <p className="font-light text-gray-500 text-xs">
              Front-End Developer
            </p>
          </div>
        </div>
        {/* Navigation Links Section & Socials */}
        <NavigationMenu />
      </div>
      {/* Socials */}
      <div className="flex items-center h-16 justify-center text-black border-t border-gray-300">
        <Link className="btn btn-circle btn-ghost" href="/">
          <FaGithub className="text-xl" />
        </Link>
        <Link className="btn btn-circle btn-ghost" href="/">
          <CiLinkedin className="text-2xl" />
        </Link>
      </div>
    </div>
  )
}

export default SideBar

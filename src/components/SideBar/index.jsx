import React from "react"
import Link from "next/link"
import Image from "next/image"
import { GoDotFill } from "react-icons/go"

function SideBar() {
  return (
    <div className="sticky top-2 bg-zinc-800 rounded-3xl h-[100vh] px-3 py-8">
      <div className="flex flex-col justify-between min-h-full items-center">
        <div className="w-full">
          <span className="w-full badge font-light rounded-xl bg-gray-300 text-green-700 text-sm border-opacity-5 mb-8 p-3 flex items-center gap-1">
            <GoDotFill />
            Available for Work
          </span>
          <figure className="mb-8">
            <Image
              src="/images/logo-1.svg"
              alt=""
              height={500}
              width={500}
              priority
              className="w-full h-10 object-cover"
            />
          </figure>
        </div>
        <div className="flex flex-col gap-2">
          <Link
            className="text-3xl uppercase text-white font-bold hover:scale-110 transition duration-500"
            href={"/"}
          >
            Home
          </Link>
          <Link
            className="text-3xl uppercase text-white font-bold hover:scale-110 transition duration-500"
            href={"/projects"}
          >
            Projects
          </Link>
          <Link
            className="text-3xl uppercase text-white font-bold hover:scale-110 transition duration-500"
            href={"/education"}
          >
            Education
          </Link>
          <Link
            className="text-3xl uppercase text-white font-bold hover:scale-110 transition duration-500"
            href={"/stack"}
          >
            Stack
          </Link>
          <Link
            className="text-3xl uppercase text-white font-bold hover:scale-110 transition duration-500"
            href={"/contact"}
          >
            Contact
          </Link>
        </div>
        <div className="flex lg:flex-col gap-2 items-center py-10">
          <figure className="w-16 h-16">
            <Image
              src="/images/avatar.jpg"
              alt=""
              priority
              height={500}
              width={500}
              className="w-full h-full object-cover rounded-full"
            />
          </figure>
          <div className="flex flex-col text-center">
            <p className="text-md text-white">Farouk Zemmouri</p>
            <p className="text-xs">Front-End Web Developer</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar

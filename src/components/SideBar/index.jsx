import React from "react"
import Link from "next/link"
import Image from "next/image"
import { GoDotFill } from "react-icons/go"
import { motion } from "framer-motion"

function SideBar() {
  return (
    <div className="rounded-3xl px-3 h-[100%] bg-dark-200 py-8">
      <div className="flex flex-col justify-between min-h-full items-center">
        <div className="w-full min-h-fit mb-8">
          <div className="flex w-full bg-white h-0 justify-center mb-16">
            <span className="w-48 py-3 badge rounded-xl bg-gray-300 text-green-700 text-sm border-opacity-5 mb-8 flex items-center gap-1">
              <motion.div
                className="rounded-full"
                initial={{
                  scale: 1,
                  boxShadow: "0 0 0 0 #00a86b",
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    "0 0 0 0 #00a86b",
                    "0 0 0 10px rgba(51, 217, 178, 0)",
                    "0 0 0 0 rgba(51, 217, 178, 0)",
                  ],
                }}
                transition={{
                  duration: 4, // Total duration of the animation cycle
                  ease: "easeInOut",
                  times: [0, 0.5, 1],
                  repeat: Infinity,
                }}
              >
                <GoDotFill />
              </motion.div>
              Available for Work
            </span>
          </div>
          <figure>
            <Image
              src="/images/logo-1.svg"
              alt="logo"
              height={500}
              width={500}
              priority
              className="w-full h-16 object-cover"
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
            Skills
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

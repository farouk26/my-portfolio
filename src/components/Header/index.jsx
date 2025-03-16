import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

function Header() {
  return (
    <motion.div
      className="min-h-fit bg-dark-200 shadow-sm rounded-3xl flex items-start justify-center lg:justify-start lg:items-center lg:flex-row flex-col gap-8 p-8"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: [0, 0.5, 1], x: 0 }}
      transition={{
        duration: 0.2,
        ease: "easeInOut",
        delay: 0.22,
        type: "spring",
      }}
    >
      {/* Header  */}
      <div className="lg:w-2/3 flex flex-col gap-4 w-full">
        <h1 className="text-3xl uppercase font-bold text-white mb-2">
          Hello! i&apos;m farouk.
        </h1>
        <p className="text-md font-light text-gray-300">
          A front-end web developer with a unique background in phytopathology,
          specializing in creating user-centric, aesthetically pleasing web
          interfaces. Committed to teamwork and lifelong learning, I also
          maintain an active interest in gaming, fitness, and tech trends.
        </p>
        <Link
          className="btn btn-sm lg:w-36 w-full my-2 border border-opacity-0 rounded-3xl self-start hover:border-opacity-0 bg-green-700 text-gray-100 hover:bg-midnight-green"
          href={
            "https://drive.google.com/file/d/1RbqLl72psxlov5ADuBP_Dfxj0b1tkoHC/view?usp=sharing"
          }
          rel="noopener noreferrer"
          target="_blank"
        >
          Download CV
        </Link>
      </div>
      <figure className="h-48 w-48 lg:block hidden">
        <Image
          src="/images/avatar_1.png"
          alt=""
          height={500}
          width={500}
          priority
          className="w-full h-full object-cover rounded-2xl"
        />
      </figure>
    </motion.div>
  )
}

export default Header

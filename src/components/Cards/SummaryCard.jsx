import Image from "next/image"
import Link from "next/link"
import React from "react"

function SummaryCard() {
  return (
    <div className="flex lg:flex-row flex-col bg-gray-200 border-opacity-0 w-[100%] h-full rounded-3xl">
      <figure className="w-full lg:w-1/2">
        <Image
          src="/images/2.jpg"
          alt="Album"
          height={500}
          width={500}
          className="w-full h-full object-cover rounded-t-3xl lg:rounded-tr-none lg:rounded-l-3xl"
        />
      </figure>
      <div className="w-full h-full lg:p-8 p-4 flex flex-col">
        <h2 className="text-2xl px-4 text-black font-bold">Summary</h2>
        <p className="text-md text-black p-5">
          Born & Raised in the culturally rich city of Medea, Algeria, I am a
          26-year-old professional deeply engaged in the realm of web
          development. My initial background lies in pythopathology, from which
          I seamlessly transitioned into the world of front-end development.
          Specializing in the creation of user-centric web experiences, I bring
          forth a combination of aesthetic finesse and flawless functionality. I
          believe in teamwork and constant learning. Outside of work, I&lsquo;m
          a big fan of video games, enjoy hanging out with friends, hitting the
          gym, going on hikes, and occasionally camping under the stars. I also
          like keeping up with new technologies, always eager to learn and stay
          updated.
        </p>
        <Link
          className="btn btn-sm mt-1 rounded-full lg:w-1/4 w-full border-solid border-1 border-gray-300 self-end bg-red-600 hover:bg-yellow-300 hover:text-black text-gray-100"
          href="/"
        >
          Download CV
        </Link>
      </div>
    </div>
  )
}

export default SummaryCard

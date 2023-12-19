import Image from "next/image"
import React from "react"

function SocialsCard({ Icon, socialName, Url }) {
  return (
    <div className="w-full min-h-fit">
      <div className="flex gap-4 items-center w-full shadow-sm bg-zinc-800 rounded-2xl p-5">
        <a
          href={Url}
          className="hover:scale-125 transition duration-500 cursor-pointer"
        >
          <span className="text-2xl text-white">{Icon}</span>
        </a>
        <p className="text-xl uppercase font-bold text-white w-full">
          {socialName}
        </p>
      </div>
    </div>
  )
}

export default SocialsCard

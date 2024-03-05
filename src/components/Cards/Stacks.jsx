import Image from "next/image"
import React from "react"

function Stacks({ technology, image }) {
  return (
    <div className="w-full min-h-fit">
      <div className="flex gap-4 items-center w-full shadow-sm bg-dark-200 rounded-2xl p-3">
        <figure className="w-12 h-12">
          <Image
            src={image}
            alt=""
            height={500}
            width={500}
            priority
            className="w-full h-full object-cover"
          />
        </figure>
        <p className="text-xl uppercase font-bold text-white w-full">
          {technology}
        </p>
      </div>
    </div>
  )
}

export default Stacks

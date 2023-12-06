import Image from "next/image"
import React from "react"

function SideBar() {
  return (
    <section className="h-screen w-full bg-white flex flex-col py-2 px-4">
      {/* Avatar Section */}
      <div className="border-b border-gray-300 py-8">
        <div className="flex md:flex-row flex-col items-center gap-2">
          <figure className="w-16 h-16">
            <Image
              src="/images/avatar.jpg"
              alt="avatar"
              height={600}
              width={600}
              className="w-full h-full object-cover rounded-lg"
            />
          </figure>
          <div className="flex flex-col">
            <p className="font-bold text-black">Farouk Zemmouri</p>
            <p className="text-xs text-gray-400">Front-End Developer</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SideBar

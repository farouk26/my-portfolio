import React from "react"

function SocialsCard({ Icon, socialName, Url }) {
  return (
    <div className="w-full min-h-fit">
      <div className="flex gap-4 items-center w-full shadow-sm bg-zinc-800 rounded-2xl p-4">
        <a
          href={Url}
          className="hover:scale-125 transition duration-500 cursor-pointer"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="text-2xl text-white">{Icon}</span>
        </a>
        <p className="text-lg font-semibold text-white w-full">{socialName}</p>
      </div>
    </div>
  )
}

export default SocialsCard

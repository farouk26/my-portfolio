import Link from "next/link"
import { BiHomeSmile, BiBriefcaseAlt } from "react-icons/bi"
import { HiOutlineMailOpen } from "react-icons/hi"
import { AiOutlineUser } from "react-icons/ai"

function NavigationMenu() {
  return (
    <div className="flex flex-col gap-4 w-full h-96 py-10 items-center text-black">
      <Link
        className="btn flex items-center gap-1 justify-center btn-ghost rounded-2xl text-sm w-full"
        href="/"
      >
        <BiHomeSmile className="text-xl" /> Home
      </Link>
      <Link
        className="btn flex items-center gap-1 justify-center btn-ghost rounded-2xl text-sm w-full"
        href="/about"
      >
        <AiOutlineUser className="text-xl" /> About
      </Link>
      <Link
        className="btn flex items-center gap-1 justify-center btn-ghost rounded-2xl text-sm w-full"
        href="/projects"
      >
        <BiBriefcaseAlt className="text-xl" /> Projects
      </Link>
      <Link
        className="btn flex items-center gap-2 justify-center btn-ghost rounded-2xl text-sm w-full"
        href="/contact"
      >
        <HiOutlineMailOpen className="text-xl" /> Contact
      </Link>
    </div>
  )
}

export default NavigationMenu

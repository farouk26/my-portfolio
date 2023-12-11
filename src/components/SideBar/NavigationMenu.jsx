import Link from "next/link"
import { BiHomeSmile, BiBriefcaseAlt } from "react-icons/bi"
import { HiOutlineMailOpen } from "react-icons/hi"
import { AiOutlineUser } from "react-icons/ai"

function NavigationMenu() {
  return (
    <div className="flex flex-col gap-4 py-12 px-4 w-full min-h-fit justify-start items-center text-black">
      <Link
        className="btn flex gap-4 items-center justify-start btn-ghost rounded-2xl text-sm w-2/3"
        href="/"
      >
        <BiHomeSmile className="text-xl" /> Home
      </Link>
      <Link
        className="btn flex gap-4 items-center justify-start btn-ghost rounded-2xl text-sm w-2/3"
        href="/about"
      >
        <AiOutlineUser className="text-xl" /> About
      </Link>
      <Link
        className="btn flex gap-4 items-center justify-start btn-ghost rounded-2xl text-sm w-2/3"
        href="/projects"
      >
        <BiBriefcaseAlt className="text-xl" /> Projects
      </Link>
      <Link
        className="btn flex gap-4 items-center justify-start btn-ghost rounded-2xl text-sm w-2/3"
        href="/contact"
      >
        <HiOutlineMailOpen className="text-xl" /> Contact
      </Link>
    </div>
  )
}

export default NavigationMenu

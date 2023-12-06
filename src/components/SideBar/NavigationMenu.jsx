import Link from "next/link"
import { BiHomeSmile, BiBriefcaseAlt } from "react-icons/bi"
import { HiOutlineMailOpen } from "react-icons/hi"
import { AiOutlineUser } from "react-icons/ai"

function NavigationMenu() {
  return (
    <div className="flex flex-col gap-12 py-12 px-4 w-full h-[90%] justify-start text-black border-b border-gray-300">
      <Link className="flex gap-4 items-center text-sm font-light" href="/">
        <BiHomeSmile className="text-lg" /> Home
      </Link>
      <Link className="flex gap-4 items-center text-sm font-light" href="/">
        <AiOutlineUser className="text-lg" /> About
      </Link>
      <Link className="flex gap-4 items-center text-sm font-light" href="/">
        <BiBriefcaseAlt className="text-lg" /> Projects
      </Link>
      <Link className="flex gap-4 items-center text-sm font-light" href="/">
        <HiOutlineMailOpen className="text-lg" /> Contact
      </Link>
    </div>
  )
}

export default NavigationMenu

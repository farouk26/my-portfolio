import { SiBootstrap } from "react-icons/si"
import { FaGithub } from "react-icons/fa6"
import { FaGitAlt } from "react-icons/fa"
import { IoLogoFirebase } from "react-icons/io5"
import { FaHtml5 } from "react-icons/fa"
import { FaCss3Alt } from "react-icons/fa"
import { RiJavascriptFill } from "react-icons/ri"
import { BiLogoTailwindCss } from "react-icons/bi"
import { SiMui } from "react-icons/si"
import { FaReact } from "react-icons/fa"
import { TbBrandNextjs } from "react-icons/tb"
import { SiCanva } from "react-icons/si"

function StackCard() {
  return (
    <div className="grid grid-cols-4 lg:grid-cols-12 p-2 gap-2 place-items-center px-4 rounded-3xl bg-gray-200 h-full lg:h-24 text-black text-xl lg:text-4xl lg:justify-center lg:items-center">
      <FaHtml5 className="text-orange-600" />
      <FaCss3Alt className="text-blue-700" />
      <RiJavascriptFill className="text-yellow-400" />
      <BiLogoTailwindCss className="text-cyan-500" />
      <SiMui className="text-sky-500" />
      <SiBootstrap className="text-violet-600" />
      <FaReact className="text-cyan-400" />
      <TbBrandNextjs className="text-zinc-900" />
      <IoLogoFirebase className="text-amber-400" />
      <FaGitAlt className="text-red-500" />
      <FaGithub className="text-zinc-800" />
      <SiCanva className="text-indigo-600" />
    </div>
  )
}

export default StackCard

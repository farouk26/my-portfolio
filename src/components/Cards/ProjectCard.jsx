import Image from "next/image"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"

function ProjectCard({
  title,
  websiteType,
  appType,
  imageUrl,
  description,
  tech_1,
  tech_2,
  tech_3,
  tech_4,
  demoUrl,
  codeUrl,
}) {
  return (
    <div class="relative flex flex-col mt-6 text-gray-700 bg-gray-50 shadow-md bg-clip-border rounded-xl w-full lg:w-96">
      <div class="relative group h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
        <Image
          src={imageUrl}
          alt="card-image"
          height={500}
          width={500}
          className="h-full w-full object-cover group-hover:scale-110 transition duration-500"
        />
      </div>
      <div class="py-4 px-6">
        <p class="mb-2 text-2xl font-semibold ">{title}</p>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-green-400 font-bold text-sm">
            {websiteType}
          </span>
          <span className="text-green-400 font-bold text-sm">{appType}</span>
        </div>
        <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          {description}
        </p>
      </div>
      <div class="flex lg:justify-between flex-col gap-4 px-6 py-4">
        <div className="flex items-center text-sm gap-2">
          <span className="font-semibold text-black">{tech_1}</span>
          <span className="font-semibold text-cyan-700">{tech_2}</span>
          <span className="font-semibold text-blue-800">{tech_3}</span>
        </div>
        <div className="flex lg:flex-row flex-col items-center gap-2">
          <Link
            href={demoUrl}
            target="_blank"
            rel="noreferer"
            className="btn btn-sm bg-green-100 text-black border border-opacity-10 hover:bg-green-400 hover:text-black hover:border-opacity-10 lg:w-1/2 w-full"
          >
            Demo
          </Link>
          <Link
            href={codeUrl}
            target="_blank"
            rel="noreferer"
            className="btn bg-green-100 text-black border border-opacity-10 btn-sm hover:bg-green-400 hover:text-black hover:border-opacity-10 lg:w-1/2 w-full"
          >
            Code
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard

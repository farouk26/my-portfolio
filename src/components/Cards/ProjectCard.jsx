import Image from "next/image"
import Link from "next/link"
import { IoIosArrowDropright } from "react-icons/io"

function ProjectCard({ title, websiteType, appType, imageUrl, projectUrl }) {
  return (
    <div className="h-full w-full">
      <figure className="p-1 h-[90%] lg:hover:scale-110 lg:transition lg:duration-400 cursor-pointer">
        <Image
          src={imageUrl}
          alt={title}
          height={600}
          width={600}
          priority
          className="w-full h-full object-cover rounded-2xl"
        />
      </figure>
      <div className="flex items-center gap-2 py-2 px-3 mt-1">
        <div className="badge badge-outline text-black badge-sm">
          {websiteType}
        </div>
        <div className="badge badge-outline text-black badge-sm">{appType}</div>
      </div>
      <div className="flex items-center justify-between gap-2 px-4">
        <h1 className="text-black font-bold text-lg w-1/2">{title}</h1>
        <Link
          className="flex gap-1 items-center text-sm  text-black"
          href={projectUrl}
        >
          View Project <IoIosArrowDropright className="text-lg" />
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard

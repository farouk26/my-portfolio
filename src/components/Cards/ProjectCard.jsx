import Image from "next/image"
import Link from "next/link"
import { IoIosArrowDropright } from "react-icons/io"

function ProjectCard({ title, websiteType, appType, imageUrl, projectUrl }) {
  return (
    <div className="card bg-gray-200 rounded-2xl group">
      <figure className="relative h-full p-1">
        <Image
          src={imageUrl}
          alt={title}
          height={600}
          width={600}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-full object-cover rounded-2xl group-hover:scale-110 lg:duration-500 cursor-pointer"
        />
      </figure>
      <div className="h-28">
        <div className="flex items-center gap-2 py-2 px-3 mt-1 self-start">
          <div className="badge badge-outline text-black badge-sm">
            {websiteType}
          </div>
          <div className="badge badge-outline text-black border-opacity-25 bg-opacity-[85%] badge-sm">
            {appType}
          </div>
        </div>
        <div className="flex items-center justify-between gap-2 px-4 self-end">
          <h1 className="text-black font-bold text-lg w-1/2">{title}</h1>
          <Link
            className="flex gap-1 items-center text-sm font-bold text-black"
            href={projectUrl}
          >
            View Project <IoIosArrowDropright className="text-lg" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard

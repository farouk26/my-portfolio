import Image from "next/image"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import { RiLinkUnlink } from "react-icons/ri"

function ProjectCard({
  title,
  websiteType,
  imageUrl,
  tech_1,
  tech_2,
  tech_3,
  githubUrl,
  demoUrl,
}) {
  return (
    <div className="card rounded-3xl group shadow-sm">
      <figure className="relative lg:h-96 w-full lg:max-w-fit rounded-3xl">
        <Image
          src={imageUrl}
          alt={title}
          width={200}
          height={200}
          placeholder="blur"
          blurDataURL="public/images/blur.jpg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="group-hover:scale-110 saturate-100 group-hover:blur-[2px] hover:saturate-50 brightness-[0.73] object-cover object-center w-full h-full duration-500"
        />
      </figure>
      <div className="absolute bottom-[5%] flex flex-col px-3 w-full">
        <h3 className="text-white text-lg font-bold capitalize">{title}</h3>
        <div className="flex justify-between items-center">
          <span className="text-sm text-white pl-1 font-semibold mb-1 w-full">
            {websiteType}
          </span>
          <div className="flex gap-1 items-center mb-2">
            <a
              className="btn btn-circle btn-sm bg-gray-300 border border-opacity-0 text-black hover:bg-yellow-100 hover:text-black"
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              className="btn btn-circle btn-sm bg-gray-300 border-opacity-0 text-black hover:bg-yellow-100 hover:text-black"
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiLinkUnlink />
            </a>
          </div>
        </div>

        <div className="flex items-center gap-1 p-0 w-full">
          <span className="badge badge-md font-light flex gap-1 text-white border-opacity-30 bg-black bg-opacity-25">
            {tech_1}
          </span>
          <span className="badge badge-md font-light text-white border-white border-opacity-30 bg-black bg-opacity-25">
            {tech_2}
          </span>
          <span className="badge badge-md font-light text-white border-white border-opacity-30 bg-black bg-opacity-25">
            {tech_3}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard

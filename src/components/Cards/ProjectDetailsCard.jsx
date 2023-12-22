import Image from "next/image"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import { RiLinkUnlink } from "react-icons/ri"

function ProjectDetailsCard({
  title,
  websiteType,
  devPeriod,
  projectSummary,
  objective,
  featureTitle,
  featureTitle_1,
  featureTitle_2,
  featureTitle_3,
  image_1,
  image_2,
  image_3,
  resultDescription,
  featureDescription,
  featureDescription_1,
  featureDescription_2,
  featureDescription_3,
  githubUrl,
  demoUrl,
}) {
  return (
    <div className="flex flex-col gap-6 mb-5">
      <div className="h-80 bg-zinc-800 rounded-3xl p-6 w-full">
        <div className="flex lg:flex-row flex-col gap-2 h-full w-full justify-between p-2 lg:p-4">
          <div className="lg:w-1/2 w-full h-full lg:flex lg:items-end">
            <h1 className="text-3xl text-white font-bold">{title}</h1>
          </div>
          <div className="flex flex-col gap-6 justify-end text-start lg:text-end w-full lg:w-1/2">
            <p className="text-md text-white">{websiteType}</p>
            <div className="flex flex-col gap-1">
              <p className="text-md text-white">Development Period</p>
              <p className="text-sm text-gray-200">{devPeriod}</p>
            </div>
            <div className="flex flex-row items-center justify-between lg:justify-end gap-2 mt-2">
              <a
                href={githubUrl}
                rel="noopener noreferrer"
                target="_blank"
                className="btn btn-sm w-1/2 lg:w-24 bg-green-700 text-gray-300 hover:bg-blue-600 hover:text-gray-300 self-end rounded-3xl"
              >
                Code <FaGithub className="text-md" />
              </a>
              <a
                href={demoUrl}
                rel="noopener noreferrer"
                target="_blank"
                className="btn btn-sm w-1/2 lg:w-28 bg-green-700  text-gray-300 hover:bg-blue-600 hover:text-gray-300 self-end rounded-3xl"
              >
                Demo <RiLinkUnlink className="text-md" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Summary Section */}
      <div className="min-h-fit lg:h-64 bg-zinc-800 rounded-3xl p-4 lg:p-6">
        <div className="flex flex-col gap-3 p-4 justify-center h-full w-full">
          <h1 className="text-2xl text-white font-bold">Project Summary</h1>
          <p className="text-md font-light">{projectSummary}</p>
        </div>
      </div>
      <div className="min-h-fit w-full flex lg:flex-row flex-col gap-6">
        <div className="flex flex-col gap-6 lg:w-[50%] w-full">
          <div className="lg:h-80 min-h-fit bg-zinc-800 rounded-3xl p-4 lg:p-6">
            <div className="flex flex-col gap-6  justify-center w-full h-full p-4">
              <h1 className="text-2xl font-bold text-white">Objective</h1>
              <p className="text-md font-light">{objective}</p>
            </div>
          </div>
          <div className="w-full min-h-fit p-4 lg:p-6 bg-zinc-800 rounded-3xl">
            <div className="flex flex-col gap-6 p-4">
              <h1 className="text-2xl text-white font-bold">Features</h1>
              <div className="flex flex-col gap-2 p-2">
                <h1 className="text-lg text-white font-bold">{featureTitle}</h1>
                <li className="font-light list-disc">{featureDescription}</li>
              </div>
              <div className="flex flex-col gap-2 p-2">
                <h1 className="text-lg text-white font-bold">
                  {featureTitle_1}
                </h1>
                <li className="font-light list-disc">{featureDescription_1}</li>
              </div>
              <div className="flex flex-col gap-2 p-2">
                <h1 className="text-lg text-white font-bold">
                  {featureTitle_2}
                </h1>
                <li className="font-light list-disc">{featureDescription_2}</li>
              </div>
              <div className="flex flex-col gap-2 p-2">
                <h1 className="text-lg text-white font-bold">
                  {featureTitle_3}
                </h1>
                <li className="font-light list-disc">{featureDescription_3}</li>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:gap-6 lg:w-[50%] w-full">
          <figure className="relative h-full w-full ">
            <Image
              src={image_1}
              alt="project-img"
              height={600}
              width={600}
              className="w-full h-full object-cover rounded-3xl"
            />
          </figure>
          <figure className="relative h-full w-full">
            <Image
              src={image_2}
              alt="project-img"
              height={600}
              width={600}
              className="w-full h-full object-cover object-center rounded-3xl"
            />
          </figure>
          <figure className="relative h-full w-full">
            <Image
              src={image_3}
              alt="project-img"
              height={500}
              width={500}
              className="w-full h-full object-cover rounded-3xl"
            />
          </figure>
        </div>
      </div>
      <div className="w-full min-h-fit p-4 lg:p-6 bg-zinc-800 rounded-3xl shadow-sm">
        <div className="w-full h-full  flex flex-col gap-2 p-4 ">
          <h1 className="text-2xl text-white font-bold">Results</h1>
          <p className="font-light">{resultDescription}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailsCard

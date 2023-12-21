import Image from "next/image"
import React from "react"

function ProjectDetailsCard({
  title,
  websiteType,
  devPeriod,
  projectSummary,
  devProcess,
  featureTitle,
  featureDescription,
  imageUrl,
  resultDescription,
}) {
  return (
    <div className="flex flex-col gap-6 mb-5">
      <div className="h-80 bg-zinc-800 rounded-3xl p-6 w-full">
        <div className="flex lg:flex-row flex-col gap-2 h-full w-full justify-between p-4">
          <div className="lg:w-1/2 w-full h-full lg:flex lg:items-end">
            <h1 className="text-3xl text-white font-bold">{title}</h1>
          </div>
          <div className="flex flex-col gap-6 justify-end text-start lg:text-end w-full lg:w-1/2">
            <p className="text-md text-white">{websiteType}</p>
            <div className="flex flex-col gap-1">
              <p className="text-md text-white">Development Period</p>
              <p className="text-sm text-gray-200">{devPeriod}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Summary Section */}
      <div className="flex flex-col gap-3 min-h-fit lg:h-64 bg-zinc-800 rounded-3xl p-6 justify-center">
        <h1 className="text-2xl text-white font-bold">Project Summary</h1>
        <p className="text-md font-light">{projectSummary}</p>
      </div>
      <div className="min-h-fit w-full flex lg:flex-row flex-col gap-6">
        <div className="flex flex-col gap-6 lg:w-[50%] w-full">
          <div className="flex flex-col gap-6 lg:h-80 min-h-fit bg-zinc-800 rounded-3xl p-6 justify-center">
            <h1 className="text-2xl font-bold text-white">
              Development Process
            </h1>
            <p className="text-md font-light">{devProcess}</p>
          </div>
          <div className="flex flex-col gap-8 w-full min-h-fit p-6 bg-zinc-800 rounded-3xl">
            <h1 className="text-2xl text-white font-bold">Features</h1>
            <div className="flex flex-col gap-2">
              <h1 className="text-xl text-white font-bold">{featureTitle}</h1>
              <p className="font-light">{featureDescription}</p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-xl text-white font-bold">{featureTitle}</h1>
              <p className="font-light">{featureDescription}</p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-xl text-white font-bold">{featureTitle}</h1>
              <p className="font-light">{featureDescription}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 lg:w-[50%] w-full">
          <figure className="w-full">
            <Image
              src={imageUrl}
              alt=""
              height={600}
              width={600}
              className="w-full h-full object-cover rounded-3xl"
            />
          </figure>
          <figure>
            <Image
              src={imageUrl}
              alt=""
              height={500}
              width={500}
              className="w-full h-full object-cover rounded-3xl"
            />
          </figure>
          <figure>
            <Image
              src={imageUrl}
              alt=""
              height={500}
              width={500}
              className="w-full h-full object-cover rounded-3xl"
            />
          </figure>
        </div>
      </div>
      <div className="w-full min-h-fit flex flex-col gap-2 p-6 bg-zinc-800 rounded-3xl shadow-sm">
        <h1 className="text-2xl text-white font-bold">Results</h1>
        <p className="font-light">{resultDescription}</p>
      </div>
    </div>
  )
}

export default ProjectDetailsCard

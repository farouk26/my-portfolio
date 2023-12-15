import Carousel from "@/components/Swiper/Carousel"
import Image from "next/image"
import React from "react"

function ProjectsPage() {
  return (
    <div className="min-h-full w-full mt-2 ">
      {/* Header */}
      <div className="lg:h-72 min-h-fit lg:pb-0 pb-10 border-b border-gray-300">
        <div className="w-1/2">
          <p className="lg:text-4xl mb-2 text-gray-200">4 DISTINCT PROJECTS </p>
          <h1 className="lg:text-7xl text-4xl font-bold text-gray-200">
            Designed, <span className="text-yellow-200">Developped</span> &
            Delivered
          </h1>
        </div>
      </div>
      {/* Projects */}
      <div className="w-full min-h-fit mt-12">
        <div className="bg-green-950 min-h-fit min-w-fit rounded-3xl grid grid-cols-6 content-center">
          <div className="lg:col-span-4 col-span-6 lg:py-16 py-8 px-8">
            <Carousel />
          </div>
          <div className="lg:col-span-2 col-span-6 min-h-fit flex justify-center flex-col">
            <h1 className="text-3xl font-bold lg:pt-6 text-gray-200">
              Reelio Movie Project
            </h1>
            <div className="flex flex-row gap-4 items-center p-2 mt-4 w-2/3">
              <div className="flex-1 h-[0.9px] bg-gray-200 mt-1"></div>
              <p className="text-gray-200">Web Application</p>
            </div>
            <p className="text-gray-200">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              maiores assumenda quisquam voluptas omnis enim sit, beatae
              dignissimos odio! Expedita voluptate eum corrupti veniam
              voluptates, rerum vitae atque repudiandae at.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage

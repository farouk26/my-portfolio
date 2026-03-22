import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import ProjectCard from "../Cards/ProjectCard"

function ProjectSection() {
  return (
    <motion.div
      className="w-full min-h-fit mb-8"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: [0, 0.7, 1], x: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
        delay: 0.25,
        type: "spring",
      }}
    >
      <div className="flex items-center justify-between w-full min-h-fit">
        <h1 className="pl-2 py-3 text-2xl uppercase text-white font-bold mb-2 lg:mt-0 mt-2">
          Recent Projects
        </h1>
        <Link
          className="btn btn-sm rounded-2xl bg-green-700 border border-opacity-0 hover:border-opacity-0 text-gray-100 hover:bg-midnight-green w-28 lg:w-24"
          href={"#"}
        >
          View All
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row w-full min-h-fit gap-5">
        <div className="w-full min-h-fit flex justify-center items-center py-6">
          <div className="w-full rounded-3xl bg-dark-200 min-h-fit p-4 flex justify-center items-center">
            <p className="text-white text-2xl p-4 font-light">
              New projects will drop{" "}
              <span className="text-green-500 font-bold">Soon !</span>
            </p>
          </div>
        </div>
        {/* <Link
          href={"/projects/unify"}
          rel="noopener noreferrer"
          target="_blank"
        >
          <ProjectCard
            title={"Unify"}
            imageUrl={"/images/unify.png"}
            websiteType={"Community Sharing"}
            tech_1={"Next.js"}
            tech_2={"TailwindCSS"}
            tech_3={"Firebase"}
          />
        </Link>
        <Link
          href={"/projects/reelio"}
          rel="noopener noreferrer"
          target="_blank"
        >
          <ProjectCard
            title={"Reelio"}
            imageUrl={"/images/reelio-1.png"}
            websiteType={"Movie Platform"}
            tech_1={"Next.js"}
            tech_2={"TailwindCSS"}
            tech_3={"IMdb.API"}
          />
        </Link>
        <Link href={"/projects/neon"} rel="noopener noreferrer" target="_blank">
          <ProjectCard
            title={"Neon City"}
            imageUrl={"/images/neoncity.png"}
            websiteType={"Mini Game"}
            tech_1={"HTML"}
            tech_2={"CSS"}
            tech_3={"Vanilla JS"}
          />
        </Link> */}
      </div>
    </motion.div>
  )
}

export default ProjectSection

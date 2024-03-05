import Image from "next/image"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import { RiLinkUnlink } from "react-icons/ri"
import { motion } from "framer-motion"

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
      <motion.div
        className="h-80 bg-dark-200 rounded-3xl p-6 w-full"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: [0, 0.8, 1], x: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          delay: 0.22,
          type: "spring",
        }}
      >
        <div className="flex lg:flex-row flex-col gap-2 h-full w-full justify-between p-2 lg:p-4">
          <div className="lg:w-1/2 w-full h-full lg:flex lg:items-end">
            <h1 className="text-3xl text-gray-100 font-bold">{title}</h1>
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
                className="btn btn-sm w-1/2 lg:w-24 bg-green-700 text-gray-100 hover:bg-blue-600 hover:text-gray-100 self-end rounded-3xl"
              >
                Code <FaGithub className="text-md" />
              </a>
              <a
                href={demoUrl}
                rel="noopener noreferrer"
                target="_blank"
                className="btn btn-sm w-1/2 lg:w-28 bg-green-700  text-gray-100 hover:bg-blue-600 hover:text-gray-100 self-end rounded-3xl"
              >
                Demo <RiLinkUnlink className="text-md" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
      {/* Summary Section */}
      <motion.div
        className="min-h-fit lg:h-64 bg-dark-200 rounded-3xl p-4 lg:p-6"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: [0, 0.8, 1], x: 0 }}
        transition={{
          duration: 0.7,
          ease: "easeInOut",
          delay: 0.3,
          type: "spring",
        }}
      >
        <div className="flex flex-col gap-3 p-4 justify-center h-full w-full">
          <h1 className="text-2xl text-white font-bold">Project Summary</h1>
          <p className="text-md font-light text-gray-300">{projectSummary}</p>
        </div>
      </motion.div>
      <div className="min-h-fit w-full flex lg:flex-row flex-col gap-6">
        <div className="flex flex-col gap-6 lg:w-[50%] w-full">
          <motion.div
            className="lg:h-80 min-h-fit bg-dark-200 rounded-3xl p-4 lg:p-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
              delay: 0.4,
              type: "spring",
            }}
          >
            <div className="flex flex-col gap-6  justify-center w-full h-full p-4">
              <h1 className="text-2xl font-bold text-white">Objective</h1>
              <p className="text-md font-light text-gray-300">{objective}</p>
            </div>
          </motion.div>
          <motion.div
            className="w-full min-h-fit p-4 lg:p-6 bg-dark-200 rounded-3xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
              delay: 0.4,
              type: "spring",
            }}
          >
            <div className="flex flex-col gap-6 p-4">
              <h1 className="text-2xl text-white font-bold">Features</h1>
              <div className="flex flex-col gap-2 p-2">
                <h1 className="text-lg text-white font-bold">{featureTitle}</h1>
                <li className="font-light list-disc text-gray-300">
                  {featureDescription}
                </li>
              </div>
              <div className="flex flex-col gap-2 p-2">
                <h1 className="text-lg text-white font-bold">
                  {featureTitle_1}
                </h1>
                <li className="font-light list-disc text-gray-300">
                  {featureDescription_1}
                </li>
              </div>
              <div className="flex flex-col gap-2 p-2">
                <h1 className="text-lg text-white font-bold">
                  {featureTitle_2}
                </h1>
                <li className="font-light list-disc text-gray-300">
                  {featureDescription_2}
                </li>
              </div>
              <div className="flex flex-col gap-2 p-2">
                <h1 className="text-lg text-white font-bold">
                  {featureTitle_3}
                </h1>
                <li className="font-light list-disc text-gray-300">
                  {featureDescription_3}
                </li>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="flex flex-col gap-4 lg:gap-6 lg:w-[50%] w-full">
          <motion.figure
            className="relative h-full w-full "
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: 0.5,
              type: "spring",
            }}
          >
            <Image
              src={image_1}
              alt="project-img"
              height={600}
              width={600}
              className="w-full h-full object-cover rounded-3xl"
            />
          </motion.figure>
          <motion.figure
            className="relative h-full w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: 0.6,
              type: "spring",
            }}
          >
            <Image
              src={image_2}
              alt="project-img"
              height={600}
              width={600}
              className="w-full h-full object-cover object-center rounded-3xl"
            />
          </motion.figure>
          <motion.figure
            className="relative h-full w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: 0.7,
              type: "spring",
            }}
          >
            <Image
              src={image_3}
              alt="project-img"
              height={500}
              width={500}
              className="w-full h-full object-cover rounded-3xl"
            />
          </motion.figure>
        </div>
      </div>
      <motion.div
        className="w-full min-h-fit p-4 lg:p-6 bg-dark-200 rounded-3xl shadow-sm"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: [0, 0.8, 1], x: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
          delay: 0.8,
          type: "spring",
        }}
      >
        <div className="w-full h-full  flex flex-col gap-2 p-4 ">
          <h1 className="text-2xl text-white font-bold">Results</h1>
          <p className="font-light text-gray-300">{resultDescription}</p>
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectDetailsCard

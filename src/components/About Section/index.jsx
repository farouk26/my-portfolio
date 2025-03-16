import React from "react"
import { motion } from "framer-motion"
import InfoCard from "../Cards/InfoCard"
import { LiaBrainSolid } from "react-icons/lia"
import { TbListDetails } from "react-icons/tb"
import { LuUsers2 } from "react-icons/lu"
import Link from "next/link"
import Stacks from "../Cards/Stacks"

function AboutSection() {
  return (
    <div className="flex xl:flex-row flex-col w-full min-h-fit gap-5">
      {/* About */}
      <motion.div
        className="flex flex-col xl:w-[60%] w-full min-h-fit"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: [0, 0.9, 1], x: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.2,
          type: "spring",
        }}
      >
        <h1 className="pl-2 py-3 text-2xl uppercase font-bold text-white">
          About
        </h1>
        <div className="grid grid-cols-4 gap-4">
          <motion.div
            className="lg:col-span-2 col-span-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: [0, 0.7, 1], x: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 0.2,
              type: "spring",
            }}
          >
            <InfoCard
              title={"Problem Solver"}
              description={
                "Fresh perspective, passionate about innovative solutions."
              }
              icon={<LiaBrainSolid />}
            />
          </motion.div>
          <motion.div
            className="lg:col-span-2 col-span-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: [0, 0.7, 1], x: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 0.3,
              type: "spring",
            }}
          >
            <InfoCard
              title={"Detail Oriented"}
              description={"Detail-oriented, aligning pixels with precision."}
              icon={<TbListDetails />}
            />
          </motion.div>
          <motion.div
            className="col-span-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: [0, 0.7, 1], x: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 0.4,
              type: "spring",
            }}
          >
            <InfoCard
              title={"Team Player & Fast Learner"}
              icon={<LuUsers2 />}
              description={
                "In the dynamic world of web development, collaboration is key. I thrive in team environments, fostering open communication and working seamlessly with designers and fellow developers."
              }
            />
          </motion.div>
        </div>
      </motion.div>
      {/* Stack  */}
      <motion.div
        className="flex flex-col xl:w-[40%] w-full"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: [0, 0.7, 1], x: 0 }}
        transition={{
          duration: 0.15,
          ease: "easeInOut",
          delay: 0.2,
          type: "spring",
        }}
      >
        <div className="pl-2 py-3 flex justify-between items-center">
          <h1 className="text-2xl w-full uppercase font-bold text-white">
            Stack
          </h1>
          <Link
            className="btn btn-sm rounded-2xl  bg-green-700 border border-opacity-0 hover:border-opacity-0 text-gray-100 hover:bg-midnight-green w-28 lg:w-24"
            href={"/stack"}
          >
            View All
          </Link>
        </div>
        <div className="flex flex-col gap-5 h-full w-full">
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: [0, 0.7, 1], x: 0 }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
              delay: 0.3,
              type: "spring",
            }}
          >
            <Stacks technology={"REACT.JS"} image={"/images/react.png"} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: [0, 0.7, 1], x: 0 }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
              delay: 0.4,
              type: "spring",
            }}
          >
            <Stacks technology={"NEXT.JS"} image={"/images/nextjs.png"} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: [0, 0.7, 1], x: 0 }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
              delay: 0.5,
              type: "spring",
            }}
          >
            <Stacks
              technology={"JAVASCRIPT"}
              image={"/images/javascript.png"}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: [0, 0.7, 1], x: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 0.6,
              type: "spring",
            }}
          >
            <Stacks technology={"TAILWIND"} image={"/images/tailwind.png"} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default AboutSection

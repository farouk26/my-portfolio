import InfoCard from "@/components/Cards/InfoCard"
import { LiaBrainSolid } from "react-icons/lia"
import { TbListDetails } from "react-icons/tb"
import { LuUsers2 } from "react-icons/lu"
import Stacks from "@/components/Cards/Stacks"
import Link from "next/link"
import ProjectCard from "@/components/Cards/ProjectCard"
import Image from "next/image"
import Slider from "@/components/Swiper"
import { motion } from "framer-motion"

function Home() {
  return (
    <section className="min-h-screen">
      <div className="flex flex-col min-h-fit w-full gap-4">
        <motion.div
          className="min-h-fit bg-dark-200 shadow-sm rounded-3xl flex items-start justify-center lg:justify-start lg:items-center lg:flex-row flex-col gap-8 p-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: [0, 0.8, 1], x: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            delay: 0.22,
            type: "spring",
          }}
        >
          {/* Header */}
          <div className="lg:w-2/3 flex flex-col gap-4 w-full">
            <h1 className="text-3xl uppercase font-bold text-white mb-2">
              Hello! i&apos;m farouk.
            </h1>
            <p className="text-md font-light text-gray-300">
              A front-end web developer with a unique background in
              phytopathology, specializing in creating user-centric,
              aesthetically pleasing web interfaces. Committed to teamwork and
              lifelong learning, I also maintain an active interest in gaming,
              fitness, and tech trends.
            </p>
            <Link
              className="btn btn-sm lg:w-36 w-full my-2 border border-opacity-0 rounded-3xl self-start hover:border-opacity-0 bg-green-700 text-gray-100 hover:bg-blue-600"
              href={
                "https://drive.google.com/file/d/1EMyg2Jqnvg31apnveSjePKrdZRJVs3MH/view?usp=sharing"
              }
              rel="noopener noreferrer"
              target="_blank"
            >
              Download CV
            </Link>
          </div>
          <figure className="h-48 w-48 lg:block hidden">
            <Image
              src="/images/avatar_1.png"
              alt=""
              height={500}
              width={500}
              priority
              className="w-full h-full object-cover rounded-2xl"
            />
          </figure>
        </motion.div>
        {/* Second Section */}
        <div className="flex xl:flex-row flex-col w-full min-h-fit gap-5">
          {/* About */}
          <motion.div
            className="flex flex-col xl:w-[60%] w-full min-h-fit"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: [0, 0.7, 1], x: 0 }}
            transition={{
              duration: 0.6,
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
                  duration: 0.6,
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
                  duration: 0.6,
                  ease: "easeInOut",
                  delay: 0.3,
                  type: "spring",
                }}
              >
                <InfoCard
                  title={"Detail Oriented"}
                  description={
                    "Detail-oriented, aligning pixels with precision."
                  }
                  icon={<TbListDetails />}
                />
              </motion.div>
              <motion.div
                className="col-span-4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: [0, 0.7, 1], x: 0 }}
                transition={{
                  duration: 0.6,
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
          {/* Stack */}
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
                className="btn btn-sm rounded-2xl  bg-green-700 border border-opacity-0 hover:border-opacity-0 text-gray-100 hover:bg-blue-600 w-28 lg:w-24"
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
                  duration: 0.3,
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
                  duration: 0.3,
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
                  duration: 0.3,
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
                <Stacks
                  technology={"TAILWIND"}
                  image={"/images/tailwind.png"}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
        {/* Projects Section */}
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
              className="btn btn-sm rounded-2xl bg-green-700 border border-opacity-0 hover:border-opacity-0 text-gray-100 hover:bg-blue-600 w-28 lg:w-24"
              href={"/projects"}
            >
              View All
            </Link>
          </div>
          <div className="flex flex-col lg:flex-row w-full min-h-fit gap-5">
            <Link
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
            <Link
              href={"/projects/neon"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <ProjectCard
                title={"Neon City"}
                imageUrl={"/images/neoncity.png"}
                websiteType={"Mini Game"}
                tech_1={"HTML"}
                tech_2={"CSS"}
                tech_3={"Vanilla JS"}
              />
            </Link>
          </div>
        </motion.div>
        {/* Testimonials */}
        <motion.div
          className="min-h-fit w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: [0, 0.7, 1], x: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: 0.25,
            type: "spring",
          }}
        >
          <h1 className="text-2xl text-white font-bold uppercase pl-2 py-3 mb-2">
            Testimonials
          </h1>
          <Slider />
        </motion.div>
      </div>
    </section>
  )
}

export default Home

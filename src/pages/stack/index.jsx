import StackCard from "@/components/Cards/StackCard"
import { motion } from "framer-motion"

function StackPage() {
  return (
    <motion.div className="min-h-screen w-full">
      <motion.div className="flex flex-col gap-6 min-h-fit mb-6">
        {/* Header */}
        <motion.div
          className="h-80 bg-dark-200 rounded-3xl p-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: [0, 0.8, 1], x: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            delay: 0.22,
            type: "spring",
          }}
        >
          <motion.div className="h-full flex flex-col gap-3 w-full justify-end p-4">
            <h1 className="md:text-3xl text-2xl uppercase text-white font-bold">
              Tech Skills
            </h1>
            <p className="text-md text-gray-200">
              My top tools, languages and resources
            </p>
          </motion.div>
        </motion.div>
        <motion.div className="w-full min-h-fit grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
              delay: 0.4,
              type: "spring",
            }}
          >
            <StackCard
              title={"HTML"}
              description={"Markup language for web documents."}
              imageUrl={"/images/html.png"}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
              delay: 0.5,
              type: "spring",
            }}
          >
            <StackCard
              title={"CSS"}
              description={"Styling language for web design."}
              imageUrl={"/images/css.png"}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
              delay: 0.6,
              type: "spring",
            }}
          >
            <StackCard
              title={"Javascript"}
              description={"Dynamic scripting for web interactivity."}
              imageUrl={"/images/javascript.png"}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
              delay: 0.7,
              type: "spring",
            }}
          >
            <StackCard
              title={"Boostrap"}
              description={"Responsive framework for web development."}
              imageUrl={"/images/bootstrap.png"}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
              delay: 0.8,
              type: "spring",
            }}
          >
            <StackCard
              title={"TailwindCSS"}
              description={"Utility-first CSS framework for flexibility."}
              imageUrl={"/images/tailwind.png"}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
              delay: 0.9,
              type: "spring",
            }}
          >
            <StackCard
              title={"Material UI"}
              description={"React UI framework with components."}
              imageUrl={"/images/mui.png"}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
              delay: 1,
              type: "spring",
            }}
          >
            <StackCard
              title={"React.js"}
              description={"JavaScript library for building interfaces."}
              imageUrl={"/images/react.png"}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
              delay: 1.1,
              type: "spring",
            }}
          >
            <StackCard
              title={"Next.js"}
              description={"React-based framework for web applications."}
              imageUrl={"/images/nextjs.png"}
            />
          </motion.div>
          <motion.div
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
              delay: 1.2,
              type: "spring",
            }}
          >
            <StackCard
              title={"Firebase"}
              description={"Cloud platform for development."}
              imageUrl={"/images/firebase.png"}
            />
          </motion.div>
          <motion.div
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
              delay: 1.3,
              type: "spring",
            }}
          >
            <StackCard
              title={"Git"}
              description={"Distributed version control system."}
              imageUrl={"/images/git.png"}
            />
          </motion.div>
          <motion.div
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
              delay: 1.4,
              type: "spring",
            }}
          >
            <StackCard
              title={"GitHub"}
              description={"Web-based platform for collaboration."}
              imageUrl={"/images/github.png"}
            />
          </motion.div>
          <motion.div
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: 1.5,
              type: "spring",
            }}
          >
            <StackCard
              title={"Canva"}
              description={"Graphic design platform online."}
              imageUrl={"/images/canva.png"}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default StackPage

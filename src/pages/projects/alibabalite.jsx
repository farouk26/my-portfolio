import { motion } from "framer-motion"

function alibabalitePage() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <motion.div
        className="h-1/2 w-full lg:w-1/2 p-8 bg-dark-200 rounded-3xl"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: [0, 0.8, 1], x: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
          delay: 0.3,
          type: "spring",
        }}
      >
        <p className="text-lg text-white font-bold text-center">
          Coming Soon ..
        </p>
      </motion.div>
    </div>
  )
}

export default alibabalitePage

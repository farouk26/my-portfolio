import React from "react"
import { motion } from "framer-motion"
import Slider from "../Swiper"

function Testimonial() {
  return (
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
  )
}

export default Testimonial

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
import { BsFillExclamationCircleFill } from "react-icons/bs"
import Head from "next/head"
import Header from "@/components/Header"
import AboutSection from "@/components/About Section"
import ProjectSection from "@/components/Project Section"
import Testimonial from "@/components/Testimonials"

function Home() {
  return (
    <section className="min-h-screen flex justify-center items-center">
      <Head>
        <title>Under Maintenance &#x26A0;</title>
      </Head>
      <div className="flex flex-col min-h-fit w-full justify-center items-center gap-4">
        <div className="lg:w-1/3 w-full min-h-fit flex flex-col bg-dark-200 rounded-3xl lg:p-4 p-2">
          <p className="text-white text-center p-4">
            Website Under Maintenance.
          </p>
        </div>
        {/* <Header />
        <AboutSection />
        <ProjectSection />
        <Testimonial /> */}
      </div>
    </section>
  )
}

export default Home

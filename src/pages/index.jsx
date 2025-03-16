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
        <title>Under Maintenance !</title>
      </Head>
      <div className="flex flex-col min-h-fit w-full gap-4">
        <Header />
        <AboutSection />
        <ProjectSection />
        <Testimonial />
      </div>
    </section>
  )
}

export default Home

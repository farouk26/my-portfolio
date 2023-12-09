import EducationCard from "@/components/Cards/EducationCard"
import ExperienceCard from "@/components/Cards/ExperienceCard"
import StackCard from "@/components/Cards/StackCard"
import Image from "next/image"
import Link from "next/link"
import { MdShareLocation } from "react-icons/md"

function AboutPage() {
  return (
    <section className="min-h-screen w-full mt-12">
      {/* About Me Section */}
      <div className="lg:h-80 min-h-fit">
        <div className="flex lg:flex-row justify-start flex-col-reverse gap-2 lg:gap-4 text-black w-full lg:h-72 h-full">
          <div className="lg:w-[50%] flex flex-col justify-start items-center lg:justify-center p-2 lg:p-4 gap-4 lg:h-full h-[35%]">
            <h1 className="lg:text-5xl text-4xl font-bold w-full">
              About Me: Crafting Digital Excellence
            </h1>
            <p className="lg:text-md w-full">
              I am a passionate web developer dedicated to crafting visually
              stunning and user-friendly websites, i thrive on transforming
              ideas into captivating online experiences while staying at the
              forefront of design trends
            </p>
            <Link
              className="btn btn-sm mt-1 rounded-full lg:w-1/3 w-full text-white self-start bg-gray-900"
              href="/"
            >
              Download CV
            </Link>
          </div>
          <figure className="lg:h-full h-72 md:h-96 w-full lg:w-[50%]">
            <Image
              src="https://images.unsplash.com/photo-1613064756072-52b429a1e06f?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="portrait"
              height={500}
              width={500}
              priority
              className="h-full w-full object-cover object-center rounded-xl"
            />
          </figure>
        </div>
      </div>
      <div className="flex flex-row gap-2 items-center p-2 mt-4 w-full">
        <span className="flex gap-1 items-center text-sm text-black">
          <MdShareLocation className="text-lg text-green-400" />
          Medea, Algeria
        </span>
        <div className="flex-1 h-[1.9px] bg-gray-300 mt-1"></div>
      </div>
      {/* Experience */}
      <div className="w-full min-h-fit p-4 mt-2">
        <h2 className="text-3xl font-bold text-black">Experience</h2>
        <div className="flex flex-col gap-4 mt-8 lg:px-6">
          <ExperienceCard
            title={`Pastry Shop Manager`}
            subtitle={`Iline's Pastry Shop`}
            year={`2018-2022`}
            description={`Managed and led interdisciplinary teams, fostering collaboration between pastry chefs, customer service representatives, and delivery staff.`}
          />
          <ExperienceCard
            title={`Cashier`}
            subtitle={`Family Shop`}
            year={`2016-2017`}
            description={`Processed customer transactions efficiently by handling cash, credit cards, and digital payment methods and demonstrated excellent customer skills.`}
          />
          <ExperienceCard
            title={`Gaming Clan Recruiter`}
            subtitle={`Iline's Pastry Shop`}
            year={`2013-2014`}
            description={`Recruited and onboarded new members, contributing to the clan's growth & success, implemented a new recruitment strategy resulting in an increase in quality recruits.`}
          />
        </div>
      </div>
      {/* Education */}
      <div className="w-full min-h-fit p-4 mt-2">
        <h2 className="text-3xl font-bold text-black">Education</h2>
        <div className="flex lg:flex-row flex-col gap-4 mt-8 lg:px-6">
          <EducationCard
            title={`Front-End Web Development Bootcamp`}
            subtitle={`Re:Coded`}
            year={`06/2023-12/2023`}
            location={`Remote`}
          />
          <EducationCard
            title={`Master's Degree in Phytopathology`}
            subtitle={`University of Yahia Fares`}
            year={`2020-2022`}
            location={`Medea, Algeria`}
          />
          <EducationCard
            title={`Bachelor's Degree in Plant Protection`}
            subtitle={`University of Yahia Fares `}
            year={`2016-2020`}
            location={`Medea, Algeria`}
          />
        </div>
      </div>
      {/* Tech Stack */}
      <div className="w-full min-h-fit p-4 mt-2">
        <h2 className="text-3xl font-bold text-black">Stack</h2>
        <div className="w-full h-full mt-8 lg:px-6">
          <StackCard />
        </div>
      </div>
    </section>
  )
}

export default AboutPage

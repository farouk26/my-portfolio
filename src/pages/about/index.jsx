import EducationCard from "@/components/Cards/EducationCard"
import ExperienceCard from "@/components/Cards/ExperienceCard"
import StackCard from "@/components/Cards/StackCard"
import SummaryCard from "@/components/Cards/SummaryCard"
import Link from "next/link"
import { MdShareLocation } from "react-icons/md"

function AboutPage() {
  return (
    <section className="min-h-screen w-full mt-2 px-2 lg:px-20">
      <div className="lg:h-72 min-h-fit">
        <div className="flex lg:flex-row justify-between items-center flex-col-reverse gap-2 lg:gap-4 text-gray-300 w-full lg:h-72 h-full">
          <div className="lg:w-[60%] mr-auto flex flex-col justify-start items-center lg:justify-center p-2 lg:p-4 gap-4 lg:h-full h-[35%]">
            <h1 className="lg:text-5xl text-4xl font-bold w-full">
              About Me: Crafting Digital Excellence
            </h1>
            <p className="lg:text-lg text-md w-full">
              I am a passionate web developer dedicated to crafting visually
              stunning and user-friendly websites, i thrive on transforming
              ideas into captivating online experiences while staying at the
              forefront of design trends.
            </p>
            <Link
              href={"/"}
              className="lg:w-1/3 w-full btn btn-sm bg-yellow-200 text-black self-start my-2 rounded-3xl hover:bg-gray-300 hover:text-black"
            >
              Download CV
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4 items-center p-2 w-full mt-4 lg:mt-6">
        <span className="flex gap-1 items-center text-sm text-gray-300">
          <MdShareLocation className="text-lg text-green-400" />
          Medea, Algeria
        </span>
        <div className="flex-1 h-[.9px] bg-gray-300 mt-1"></div>
      </div>
      {/* Bento Grid */}
      <div className="w-full min-h-fit p-4 mt-5">
        <div className="w-full min-h-fit bg-gray-200 rounded-3xl">
          <SummaryCard />
        </div>
        <div className="h-full w-full mt-2">
          <div className="min-h-fit w-full flex flex-col gap-4">
            <div className="grid grid-cols-4 gap-4 w-full min-h-fit rounded-3xl">
              <h2 className="lg:text-3xl text-gray-300 text-lg font-bold my-3">
                Education
              </h2>
              <div className="col-span-4">
                <EducationCard
                  title={"Front-End Web Development Bootcamp"}
                  subtitle={"Re:Coded"}
                  year={"06/2023-12/2023"}
                  location={"Remote"}
                />
              </div>
              <div className="lg:col-span-2 col-span-4 h-full">
                <EducationCard
                  title={"Master's Degree In Phyto-Pathology"}
                  subtitle={"University of Yahia Fares"}
                  year={"2020-2022"}
                  location={"Medea, Algeria"}
                />
              </div>
              <div className="lg:col-span-2 col-span-4">
                <EducationCard
                  title={"Bachelor's Degree In Plant Protection"}
                  subtitle={"University of Yahia Fares"}
                  year={"2016-2020"}
                  location={"Medea, Algeria"}
                />
              </div>
            </div>
            <h1 className="lg:text-3xl text-lg text-gray-300 font-bold my-2">
              Languages
            </h1>
            <div className="min-h-fit rounded-3xl flex flex-col gap-4 transition lg:hover:scale-105 duration-400 lg:cursor-pointer">
              <p className="p-4 text-black bg-gray-200 rounded-3xl">
                I am a native Arabic speaker, with advanced proficiency in both
                English and French. These linguistic skills not only enrich my
                communication abilities but also enhance my versatility as a web
                developer. They enable me to create user-friendly interfaces and
                seamless online experiences that cater to a global audience with
                diverse language preferences.
              </p>
            </div>
            <div className="rounded-3xl px-4 pb-4">
              <h2 className="lg:text-3xl text-lg font-bold text-gray-300 py-4">
                Stack
              </h2>

              <div className="bg-gray-200 h-20 rounded-3xl transition lg:hover:scale-105 duration-400 lg:cursor-pointer">
                <StackCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPage

import EducationCard from "@/components/Cards/EducationCard"
import ExperienceCard from "@/components/Cards/ExperienceCard"
import StackCard from "@/components/Cards/StackCard"
import SummaryCard from "@/components/Cards/SummaryCard"
import Link from "next/link"
import { MdShareLocation } from "react-icons/md"

function AboutPage() {
  return (
    <section className="min-h-screen w-full mt-2">
      <div className="lg:h-72 min-h-fit">
        <div className="flex lg:flex-row justify-start flex-col-reverse gap-2 lg:gap-4 text-gray-300 w-full lg:h-72 h-full">
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
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4 items-center p-2 w-full">
        <span className="flex gap-1 items-center text-sm text-gray-300">
          <MdShareLocation className="text-lg text-green-400" />
          Medea, Algeria
        </span>
        <div className="flex-1 h-[.9px] bg-gray-300 mt-1"></div>
      </div>
      {/* Bento Grid */}
      <div className="w-full min-h-fit p-4 mt-10">
        <div className="w-full h-full">
          <SummaryCard />
        </div>
        <div className="grid grid-cols-5 h-full w-full gap-4 mt-5">
          <div className="lg:col-span-3 col-span-5 min-h-fit w-full flex flex-col gap-4">
            <h2 className="lg:text-3xl text-gray-300 text-lg font-bold">
              Education
            </h2>
            <div className="grid grid-cols-4 gap-4 w-full min-h-fit rounded-3xl">
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
            <h1 className="lg:text-3xl text-lg text-gray-300 font-bold">
              Stack
            </h1>
            <div className="bg-gray-200 h-20 rounded-3xl">
              <StackCard />
            </div>
          </div>
          <div className="lg:col-span-2 col-span-5 bg-gray-200 w-full text-black h-full flex gap-2 flex-col rounded-3xl p-4">
            <h2 className="lg:text-2xl text-lg mb-2 font-bold pl-2">
              Experience
            </h2>
            <ExperienceCard
              title={"Pastry Shop Manager"}
              year={"2018-2022"}
              subtitle={"Iline's Pastry Shop"}
              description={
                "Managed and led interdisciplinary teams, fostering collaboration between pastry chefs, customer service representatives, and delivery staff."
              }
              location={"On-Site"}
            />
            <ExperienceCard
              title={"Cashier"}
              year={"2016-2017"}
              subtitle={"Family Shop"}
              description={
                "Processed customer transactions efficiently by handling cash, credit cards, and digital payment methods and demonstrated excellent customer skills."
              }
              location={"On-Site"}
            />
            <ExperienceCard
              title={"Gaming Clan Recruiter"}
              year={"2013-2014"}
              subtitle={"The Chaos Vanguard"}
              description={
                "Recruited and onboarded new members, contributing to the clan's growth & success, implemented a new recruitment strategy resulting in an increase in quality recruits."
              }
              location={"Remote"}
            />
          </div>
        </div>
      </div>
      <div className="w-full min-h-fit p-4 mt-2"></div>
      <div className="w-full min-h-fit p-4 mt-2"></div>
    </section>
  )
}

export default AboutPage

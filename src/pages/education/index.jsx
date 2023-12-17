import EducationCard from "@/components/Cards/EducationCard"
import StackCard from "@/components/Cards/StackCard"
import SummaryCard from "@/components/Cards/SummaryCard"
import Image from "next/image"
import Link from "next/link"
import { MdShareLocation } from "react-icons/md"

function EducationPage() {
  return (
    <section className="min-h-screen w-full mt-2 px-2 lg:px-20">
      <div className="lg:h-80 min-h-fit">
        <div className="flex lg:flex-row justify-between items-center flex-col-reverse gap-2 lg:gap-4 text-black w-full lg:h-80 h-full">
          <div className="lg:w-[60%] mr-auto flex flex-col justify-start items-center lg:justify-center p-2 lg:p-4 gap-4 lg:h-full min-h-fit">
            <h1 className="lg:text-5xl text-4xl font-bold w-full">
              About Me: Crafting Digital{" "}
              <span className="text-green-300">Excellence</span>
            </h1>
            <p className="min-h-fit w-full text-lg">
              I am a native Arabic speaker, with advanced proficiency in both
              English and French. These linguistic skills not only enrich my
              communication abilities but also enhance my versatility as a web
              developer. They enable me to create user-friendly interfaces and
              seamless online experiences that cater to a global audience with
              diverse language preferences.
            </p>
            <Link
              href={
                "https://drive.google.com/file/d/1JL269lIdCZKRhPJOm3tmQsu3f1SND2iv/view?usp=sharing"
              }
              rel="noreferrer noopener"
              target="_blank"
              className="lg:w-1/3 w-full btn btn-sm bg-green-100 text-black border border-opacity-10 self-start my-2 rounded-3xl hover:bg-gray-300 hover:text-black"
            >
              Download CV
            </Link>
          </div>
          <div className="h-full w-[40%] justify-start lg:block hidden">
            <figure className="h-52 w-52">
              <Image
                src="/images/2.jpg"
                alt=""
                height={500}
                width={500}
                className="object-cover h-full w-full rounded-2xl"
              />
            </figure>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4 items-center p-2 w-full mt-4 lg:mt-6">
        <span className="flex gap-1 items-center text-sm text-black">
          <MdShareLocation className="text-lg text-green-400" />
          Medea, Algeria
        </span>
        <div className="flex-1 h-[.8px] bg-gray-300 mt-1"></div>
      </div>
      {/* Bento Grid */}
      <div className="w-full min-h-fit p-4 mt-5">
        <div className="h-full w-full mt-2">
          <div className="min-h-fit w-full flex flex-col gap-4">
            <div className="grid grid-cols-4 gap-4 w-full min-h-fit rounded-3xl">
              <h2 className="lg:text-3xl text-black text-lg font-bold my-3">
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
            <h1 className="lg:text-3xl text-lg text-black font-bold my-2">
              Languages
            </h1>
            <div className="min-h-fit rounded-3xl flex flex-col gap-4 transition lg:hover:scale-105 duration-400 lg:cursor-pointer"></div>
            <h2 className="lg:text-3xl text-lg font-bold text-black py-1">
              Stack
            </h2>
            <div className="bg-gray-50 h-20 rounded-3xl transition lg:hover:scale-105 duration-400 lg:cursor-pointer mb-2">
              <StackCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationPage

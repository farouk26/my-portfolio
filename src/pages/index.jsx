import InfoCard from "@/components/Cards/InfoCard"
import { LiaBrainSolid } from "react-icons/lia"
import { TbListDetails } from "react-icons/tb"
import { LuUsers2 } from "react-icons/lu"
import Stacks from "@/components/Cards/Stacks"
import Link from "next/link"
import ProjectCard from "@/components/Cards/ProjectCard"
import Image from "next/image"
import Slider from "@/components/Swiper"
import { easeOut, motion, spring } from "framer-motion"

function Home() {
  return (
    <section className="min-h-screen">
      <div className="flex flex-col min-h-fit w-full gap-4">
        <div className="min-h-fit bg-zinc-800 shadow-sm rounded-3xl flex items-start justify-center lg:justify-start lg:items-center lg:flex-row flex-col gap-8 p-8">
          {/* Header */}
          <div className="lg:w-2/3 flex flex-col gap-4 w-full">
            <h1 className="text-3xl uppercase font-bold text-white mb-2">
              Hello! i&apos;m farouk.
            </h1>
            <p className="text-md font-light text-gray-300">
              Born & Raised in the culturally rich city of Medea, Algeria, I am
              a 26-year-old professional deeply engaged in the realm of web
              development. My initial background lies in pythopathology, from
              which I seamlessly transitioned into the world of front-end
              development. Specializing in the creation of user-centric web
              experiences, I bring forth a combination of aesthetic finesse and
              flawless functionality. I believe in teamwork and constant
              learning. Outside of work, I&apos;m a big fan of video games,
              enjoy hanging out with friends, hitting the gym, I also like
              keeping up with new technologies, always eager to learn and stay
              updated.
            </p>
            <Link
              className="btn btn-sm lg:w-36 w-full my-2 border border-opacity-0 rounded-3xl self-start hover:border-opacity-0 bg-green-700 text-gray-100 hover:bg-blue-600"
              href={
                "https://drive.google.com/file/d/1JL269lIdCZKRhPJOm3tmQsu3f1SND2iv/view?usp=sharing"
              }
              rel="noopener noreferrer"
              target="_blank"
            >
              Download CV
            </Link>
          </div>
          <figure className="h-48 w-48 lg:block hidden">
            <Image
              src="/images/2.jpg"
              alt=""
              height={500}
              width={500}
              priority
              className="w-full h-full object-cover rounded-2xl"
            />
          </figure>
        </div>
        {/* Second Section */}
        <div className="flex lg:flex-row flex-col w-full min-h-fit gap-8">
          {/* About */}
          <div className="flex flex-col lg:w-[60%] w-full min-h-fit">
            <h1 className="pl-2 py-3 text-2xl uppercase font-bold text-white">
              About
            </h1>
            <div className="grid grid-cols-4 gap-4">
              <div className="lg:col-span-2 col-span-4">
                <InfoCard
                  title={"Problem Solver"}
                  description={
                    "I bring a fresh perspective and a passion for innovative solutions to the table.  My proficiency in JavaScript, React.js, Next.js, and Firebase enables me to craft dynamic and cutting-edge web applications."
                  }
                  icon={<LiaBrainSolid />}
                />
              </div>
              <div className="lg:col-span-2 col-span-4">
                <InfoCard
                  title={"Detail Oriented"}
                  description={
                    "I pride myself on my meticulous attention to detail, ensuring that every pixel aligns seamlessly with the overall design. I am committed to delivering not just functional but aesthetically pleasing websites."
                  }
                  icon={<TbListDetails />}
                />
              </div>
              <div className="col-span-4">
                <InfoCard
                  title={"Team Player & Fast Learner"}
                  icon={<LuUsers2 />}
                  description={
                    "In the dynamic world of web development, collaboration is key. I thrive in team environments, fostering open communication and working seamlessly with designers and fellow developers."
                  }
                />
              </div>
            </div>
          </div>
          {/* Stack */}
          <div className="flex flex-col lg:w-[40%] w-full">
            <div className="pl-2 py-3 flex justify-between">
              <h1 className="text-2xl uppercase font-bold text-white">
                Skills
              </h1>
              <Link
                className="btn btn-sm rounded-2xl bg-green-700 border border-opacity-0 hover:border-opacity-0 text-gray-100 hover:bg-blue-600 w-28 lg:w-24"
                href={"/stack"}
              >
                View All
              </Link>
            </div>
            <div className="flex flex-col gap-5 w-full">
              <Stacks technology={"REACT.JS"} image={"/images/react.png"} />
              <Stacks technology={"NEXT.JS"} image={"/images/nextjs.png"} />
              <Stacks
                technology={"JAVASCRIPT"}
                image={"/images/javascript.png"}
              />
              <Stacks technology={"TAILWIND"} image={"/images/tailwind.png"} />
            </div>
          </div>
        </div>
        {/* Projects Section */}
        <div className="w-full min-h-fit mb-8">
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
          <div className="flex flex-col lg:flex-row w-full min-h-fit gap-6">
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
        </div>
        {/* Testimonials */}
        <div className="min-h-fit w-full">
          <h1 className="text-2xl text-white font-bold uppercase pl-2 py-3 mb-2">
            Testimonials
          </h1>
          <Slider />
        </div>
      </div>
    </section>
  )
}

export default Home

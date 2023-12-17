import InfoCard from "@/components/Cards/InfoCard"
import { LiaBrainSolid } from "react-icons/lia"
import { TbListDetails } from "react-icons/tb"
import { LuUsers2 } from "react-icons/lu"
import Stacks from "@/components/Cards/Stacks"
import Link from "next/link"
import ProjectCard from "@/components/Cards/ProjectCard"
import Image from "next/image"

function Home() {
  return (
    <section className="min-h-screen">
      <div className="flex flex-col min-h-fit w-full gap-4">
        <div className="h-80 bg-zinc-800 shadow-sm rounded-3xl flex items-start justify-center lg:justify-start lg:items-center lg:flex-row flex-col gap-8 p-8">
          {/* Header */}
          <div className="lg:w-2/3 flex flex-col gap-4 w-full">
            <h1 className="text-5xl uppercase font-bold text-white">
              Hello! i&apos;m farouk.
            </h1>
            <p className="text-xl text-white">
              I am a native Arabic speaker, with advanced proficiency in both
              English and French. These linguistic skills not only enrich my
              communication abilities but also enhance my versatility as a web
              developer. They enable me to create user-friendly interfaces and
              seamless online experiences that cater to a global audience with
              diverse language preferences.
            </p>
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
          <div className="flex flex-col lg:w-[50%] w-full">
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
          <div className="flex flex-col lg:w-1/2 w-full">
            <div className="pl-2 py-3 flex justify-between">
              <h1 className="text-2xl uppercase font-bold text-white">Stack</h1>
              <Link
                className="btn btn-sm rounded-2xl bg-green-400 text-white w-1/4 lg:w-1/5"
                href={"/projects"}
              >
                View All
              </Link>
            </div>
            <div className="flex flex-col gap-5 w-full">
              <Stacks technology={"HTML"} image={"/images/html.png"} />
              <Stacks technology={"CSS"} image={"/images/css.png"} />
              <Stacks
                technology={"JAVASCRIPT"}
                image={"/images/javascript.png"}
              />
              <Stacks technology={"REACT.JS"} image={"/images/react.png"} />
            </div>
          </div>
        </div>
        {/* Projects Section */}
        <div className="w-full min-h-fit mb-8">
          <h1 className="pl-2 py-3 text-2xl uppercase text-white font-bold mb-2">
            Selected Projects
          </h1>
          <div className="flex flex-col lg:flex-row w-full min-h-fit gap-6">
            <ProjectCard
              title={"Reelio"}
              imageUrl={"/images/unify.png"}
              websiteType={"Community Sharing"}
              tech_1={"Next.js"}
              tech_2={"TailwindCSS"}
              tech_3={"IMdb.API"}
            />
            <ProjectCard
              title={"Unify"}
              imageUrl={"/images/reelio-1.png"}
              websiteType={"Community Sharing"}
              tech_1={"Next.js"}
              tech_2={"TailwindCSS"}
              tech_3={"Firebase"}
            />
            <ProjectCard
              title={"Neon City"}
              imageUrl={"/images/neoncity.png"}
              websiteType={"Mini Game"}
              tech_1={"HTML"}
              tech_2={"CSS"}
              tech_3={"Vanilla JS"}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home

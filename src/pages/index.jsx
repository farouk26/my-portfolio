import InfoCard from "@/components/Cards/InfoCard"
import ProjectCard from "@/components/Cards/ProjectCard"
import Link from "next/link"
import { LiaBrainSolid } from "react-icons/lia"
import { TbListDetails } from "react-icons/tb"
import { LuUsers2 } from "react-icons/lu"
import Slider from "@/components/Swiper"
import { FaGithub } from "react-icons/fa"
import { TiLink } from "react-icons/ti"
function Home() {
  return (
    <div className="min-h-screen lg:px-20 px-4">
      {/* Header */}
      <div className="lg:h-80 min-h-fit lg:pb-0 pb-10 border-b border-gray-300">
        <div className=" flex flex-col p-2 lg:p-2 gap-4 lg:h-full h-[35%] lg:w-[40%] justify-center mr-auto w-full text-black">
          <h1 className="lg:text-5xl text-4xl font-bold">
            Hey there! I&apos;m <span className="text-green-300">Farouk</span>
            ...
          </h1>
          <p className="lg:text-md w-full">
            A passionate front-end web developer with a knack for turning ideas
            into visually, stunning, user-friendly websites.
          </p>
          <Link
            className="btn btn-ghost text-black border border-opacity-10 btn-sm mt-1 rounded-full lg:w-2/4 w-full font-semibold hover:bg-green-300 hover:text-black bg-green-100 self-start"
            href="/about"
          >
            More about Me
          </Link>
        </div>
      </div>
      {/* Recent Projects Bento */}
      <div className="w-full min-h-fit lg:py-6 mt-6 lg:mt-2">
        <h2 className="md:text-3xl text-2xl font-bold text-black">
          Selected Projects
        </h2>
        {/* Projects */}
        <div className="flex lg:flex-row flex-col gap-6 lg:gap-4 justify-center w-full min-h-fit mt-8">
          <ProjectCard
            title={"Neon City"}
            websiteType={"Mini-Game"}
            appType={"Web App"}
            imageUrl={"/images/madlibs.png"}
            description={
              "Neon City is an interactive mini-game, allowing users to personalize pre-generated stories by filling in the blanks creating dynamic original stories."
            }
            tech_1={"HTML"}
            tech_2={"CSS"}
            tech_3={"Javascript"}
            demoUrl={""}
            codeUrl={""}
          />
          <ProjectCard
            title={"Reelio"}
            websiteType={"Movie Platform"}
            description={
              "A dynamic platform for movie enthusiasts, offering a user-friendly interface and modern technologies for discovering, exploring, and watching favorite movies and series."
            }
            appType={"Web App"}
            tech_1={"Next.js"}
            tech_2={"TailwindCSS"}
            tech_3={"IMdb API"}
            imageUrl={"/images/reelio-1.png"}
            demoUrl={"https://movie-project-devsquad.vercel.app/"}
            codeUrl={""}
          />
        </div>
        <div className="flex flex-row gap-4 items-center p-2 mt-4 w-full">
          <div className="flex-1 h-[0.9px] bg-gray-300 mt-4"></div>
          <Link
            href="/projects"
            className="btn btn-outline btn-sm text-sm mt-4 text-black bg-yellow-200 rounded-3xl"
          >
            View All Projects
          </Link>
        </div>
      </div>
      <div className="w-full h-full mb-8">
        <h2 className="md:text-3xl text-2xl font-bold text-black w-full mb-8">
          Why Choose Me
        </h2>
        {/* Bento Grid */}
        <div className="grid grid-cols-4 w-full h-full gap-4">
          <div className="col-span-4 h-full lg:h-52 rounded-3xl">
            <InfoCard
              title={"Problem Solver"}
              description={
                "I bring a fresh perspective and a passion for innovative solutions to the table. My proficiency in JavaScript, React.js, Next.js, and Firebase enables me to craft dynamic and cutting-edge web applications. I thrive on dissecting challenges, finding elegant solutions, and transforming abstract concepts into tangible, user-centric experiences. When you choose me, you're choosing a developer with a knack for turning complex problems into user-friendly solutions."
              }
              icon={<LiaBrainSolid />}
            />
          </div>
          <div className="lg:col-span-2 col-span-4 h-full lg:h-64 rounded-3xl">
            <InfoCard
              title={"Detail-Oriented"}
              description={
                "When it comes to creating visually appealing websites, precision matters. I pride myself on my meticulous attention to detail, ensuring that every pixel aligns seamlessly with the overall design.  I am committed to delivering not just functional but aesthetically pleasing websites."
              }
              icon={<TbListDetails />}
            />
          </div>
          <div className="lg:col-span-2 col-span-4 h-full lg:h-64 rounded-3xl">
            <InfoCard
              title={" Team Player & Fast Learner"}
              description={
                "In the dynamic world of web development, collaboration is key. I thrive in team environments, fostering open communication and working seamlessly with designers and fellow developers. I am not just an individual contributor; I'm a team player who adapts swiftly to new technologies."
              }
              icon={<LuUsers2 />}
            />
          </div>
        </div>
      </div>
      <div className="w-full min-h-fit">
        <h2 className="lg:text-3xl text-lg w-full text-black font-bold mb-6">
          Testimonials
        </h2>
        <Slider />
      </div>
    </div>
  )
}

export default Home

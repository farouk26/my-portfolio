import InfoCard from "@/components/Cards/InfoCard"
import ProjectCard from "@/components/Cards/ProjectCard"
import Link from "next/link"
import { LiaBrainSolid } from "react-icons/lia"
import { TbListDetails } from "react-icons/tb"
import { LuUsers2 } from "react-icons/lu"

function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="lg:h-72 min-h-fit lg:pb-0 pb-10 border-b border-gray-300">
        <div className=" flex flex-col p-2 lg:p-4 gap-4 lg:h-full h-[35%] lg:w-[50%] mr-auto w-full text-gray-300">
          <h1 className="lg:text-5xl text-4xl font-bold w-full">
            Hey there! I&apos;m Farouk...
          </h1>
          <p className="lg:text-md w-full">
            A passionate front-end web developer with a knack for turning ideas
            into visually, stunning, user-friendly websites.
          </p>
          <Link
            className="btn btn-ghost btn-outline border-gray-900 btn-sm mt-1 rounded-full lg:w-2/5 w-full text-slate-900 font-semibold hover:bg-gray-100 hover:text-black bg-yellow-200 bg-opacity-[85%] self-start"
            href="/about"
          >
            More about Me
          </Link>
        </div>
      </div>
      {/* Recent Projects Bento */}
      <div className="w-full min-h-fit lg:py-6 px-4 mt-6 lg:mt-2">
        <h2 className="md:text-3xl text-2xl font-bold text-gray-300">
          Recent Projects
        </h2>
        {/* Projects */}
        <div className="flex lg:flex-row flex-col gap-6 lg:gap-2 justify-center w-full min-h-fit mt-8">
          <ProjectCard
            title={"Neon City"}
            websiteType={"Mini-Game"}
            appType={"Web App"}
            imageUrl={"/images/madlibs.png"}
            projectUrl={"https://madlibs-404-brain-not-found.vercel.app/"}
          />
          <ProjectCard
            title={"Reelio"}
            websiteType={"Movie Platform"}
            appType={"Web App"}
            imageUrl={"/images/reelio.png"}
            projectUrl={"https://movie-project-devsquad.vercel.app/"}
          />
        </div>
        <div className="flex flex-row gap-4 items-center p-2 mt-4 w-full">
          <div className="flex-1 h-[0.9px] bg-gray-300 mt-4"></div>
          <Link
            href="/projects"
            className="btn btn-outline btn-sm text-sm mt-4 text-black bg-yellow-200 bg-opacity-[85%] rounded-3xl"
          >
            View All Projects
          </Link>
        </div>
      </div>
      <h2 className="md:text-3xl text-2xl font-bold lg:mt-0 mt-8 text-gray-300 px-4 w-full">
        Why Choose Me
      </h2>

      <div className="w-full h-full px-4 py-4">
        {/* Bento Grid */}
        <div className="grid grid-cols-4 w-full h-full gap-4 lg:px-20 mt-8">
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
    </div>
  )
}

export default Home

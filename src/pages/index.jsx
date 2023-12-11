import ProjectCard from "@/components/Cards/ProjectCard"
import Link from "next/link"

function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="lg:h-72 min-h-fit lg:pb-0 pb-10 border-b border-gray-300">
        <div className=" flex flex-col p-2 lg:p-4 gap-4 lg:h-full h-[35%] lg:w-[50%] mr-auto w-full text-black">
          <h1 className="lg:text-5xl text-4xl font-bold w-full">
            Hey there! I&apos;m Farouk...
          </h1>
          <p className="lg:text-md w-full">
            A passionate front-end web developer with a knack for turning ideas
            into visually, stunning, user-friendly websites.
          </p>
          <Link
            className="btn btn-ghost btn-outline border-gray-900 btn-sm mt-1 rounded-full lg:w-2/5 w-full text-black self-start"
            href="/about"
          >
            More about Me
          </Link>
        </div>
      </div>
      {/* Recent Projects Bento */}
      <div className="w-full min-h-fit lg:py-6 px-4 mt-6 lg:mt-2">
        <h2 className="text-3xl font-bold text-black">Recent Projects</h2>
        {/* Projects */}
        <div className="flex lg:flex-row flex-col gap-10 lg:gap-2 justify-center w-full h-full mt-8">
          <ProjectCard
            title={"Neon City Madlibs"}
            websiteType={"Community Sharing"}
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
        <div className="flex flex-row gap-4 items-center p-2 mt-8 w-full">
          <div className="flex-1 h-[0.9px] bg-gray-300 mt-1"></div>
          <Link
            href="/projects"
            className="btn btn-outline btn-sm text-sm text-black rounded-3xl"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home

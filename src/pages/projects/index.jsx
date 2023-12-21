import ProjectCard from "@/components/Cards/ProjectCard"
import { projects } from "@/libs/projectsList"
import Link from "next/link"

function ProjectsPage() {
  return (
    <section className="min-h-screen w-full">
      <div className="flex flex-col w-full min-h-fit gap-2">
        {/* Header */}
        <div className="bg-zinc-800 h-80 w-full rounded-3xl p-8 shadow-sm">
          <div className="flex flex-col h-full gap-3 lg:w-1/2 w-full justify-end">
            <h1 className="text-4xl uppercase font-bold text-white">
              Projects
            </h1>
            <p className="text-md text-white font-light">
              This section serves as a portfolio showcase, featuring a
              compilation of my latest work.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 h-full w-full mb-8 mt-6">
          <Link href={"/projects/unify"}>
            <ProjectCard
              title={"Unify"}
              imageUrl={"/images/unify.png"}
              websiteType={"Community Sharing"}
              tech_1={"Next.js"}
              tech_2={"TailwindCSS"}
              tech_3={"Firebase"}
              githubUrl={"https://github.com/202306-NEA-DZ-FEW/team-a"}
              demoUrl={"https://unify-team-a.vercel.app/"}
            />
          </Link>
          <Link href={"/projects/reelio"}>
            <ProjectCard
              title={"Reelio"}
              imageUrl={"/images/reelio-1.png"}
              websiteType={"Movie Platform"}
              tech_1={"Next.js"}
              tech_2={"TailwindCSS"}
              tech_3={"IMdb.API"}
              githubUrl={
                "https://github.com/202306-NEA-DZ-FEW/movie-project-devsquad"
              }
              demoUrl={"https://movie-project-devsquad.vercel.app/"}
            />
          </Link>
          <Link href={"/projects/neon"}>
            <ProjectCard
              title={"Neon City"}
              imageUrl={"/images/neoncity.png"}
              websiteType={"Mini Game"}
              tech_1={"HTML"}
              tech_2={"CSS"}
              tech_3={"Vanilla JS"}
              demoUrl={"https://madlibs-404-brain-not-found.vercel.app/"}
              githubUrl={
                "https://github.com/202306-NEA-DZ-FEW/madlibs-404-brain-not-found"
              }
            />
          </Link>
          <Link href={"/projects/alibabalite"}>
            <ProjectCard
              title={"Alibaba Lite"}
              imageUrl={"/images/alibabalite.png"}
              websiteType={"E-Commerce Website"}
              tech_1={"Next.js"}
              tech_2={"TailwindCSS"}
              tech_3={"Firebase"}
              demoUrl={"https://alibabalite-two.vercel.app/"}
              githubUrl={
                "https://github.com/farouk26/AlibabaLite-E-Commerce-Website"
              }
            />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProjectsPage

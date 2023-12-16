import ProjectCard from "@/components/Cards/ProjectCard"

function ProjectsPage() {
  return (
    <div className="min-h-screen w-full mt-2 px-4 lg:px-20 ">
      {/* Header */}
      <div className="lg:h-80 border-b border-gray-300 min-h-fit w-full">
        <div className="w-full md:w-2/3 lg:w-1/2 flex flex-col gap-4 h-full font-bold">
          <p className="lg:text-5xl text-4xl text-black font-light">
            <span className="text-cyan-500 lg:text-6xl text-5xl">4 </span>
            Distinct Projects
          </p>
          <h1 className="lg:text-6xl text-5xl text-black">
            Designed, <span className="text-green-300">Developped</span>,
            Delivered
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 my-10 min-h-fit">
        <ProjectCard
          title={"Unify"}
          websiteType={"Community Sharing Platform"}
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
    </div>
  )
}

export default ProjectsPage

import StackCard from "@/components/Cards/StackCard"
import React from "react"

function StackPage() {
  return (
    <div className="min-h-screen w-full">
      <div className="flex flex-col gap-6 min-h-fit mb-6">
        {/* Header */}
        <div className="h-80 bg-zinc-800 rounded-3xl p-6">
          <div className="h-full flex flex-col gap-3 w-full justify-end p-4">
            <h1 className="md:text-3xl text-2xl uppercase text-white font-bold">
              Tech Skills
            </h1>
            <p className="text-md text-gray-200">
              My top tools, languages and resources
            </p>
          </div>
        </div>
        <div className="w-full min-h-fit grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          <StackCard
            title={"HTML"}
            description={"Markup language for web documents."}
            imageUrl={"/images/html.png"}
          />
          <StackCard
            title={"CSS"}
            description={"Styling language for web design."}
            imageUrl={"/images/css.png"}
          />
          <StackCard
            title={"Javascript"}
            description={"Dynamic scripting for web interactivity."}
            imageUrl={"/images/javascript.png"}
          />
          <StackCard
            title={"Boostrap"}
            description={"Responsive framework for web development."}
            imageUrl={"/images/bootstrap.png"}
          />
          <StackCard
            title={"TailwindCSS"}
            description={"Utility-first CSS framework for flexibility."}
            imageUrl={"/images/tailwind.png"}
          />
          <StackCard
            title={"Material UI"}
            description={"React UI framework with components."}
            imageUrl={"/images/mui.png"}
          />
          <StackCard
            title={"React.js"}
            description={"JavaScript library for building interfaces."}
            imageUrl={"/images/react.png"}
          />
          <StackCard
            title={"Next.js"}
            description={"React-based framework for web applications."}
            imageUrl={"/images/nextjs.png"}
          />
          <StackCard
            title={"Firebase"}
            description={"Cloud platform for development."}
            imageUrl={"/images/firebase.png"}
          />
          <StackCard
            title={"Git"}
            description={"Distributed version control system."}
            imageUrl={"/images/git.png"}
          />
          <StackCard
            title={"GitHub"}
            description={"Web-based platform for collaboration."}
            imageUrl={"/images/github.png"}
          />
          <StackCard
            title={"Canva"}
            description={"Graphic design platform online."}
            imageUrl={"/images/canva.png"}
          />
        </div>
      </div>
    </div>
  )
}

export default StackPage

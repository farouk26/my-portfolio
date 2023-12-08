import Image from "next/image"
import React from "react"

function AboutPage() {
  return (
    <section className="h-screen w-full">
      {/* About Me Section */}
      <div className="lg:h-80 min-h-fit border-b border-gray-300">
        <div className="flex lg:flex-row justify-start flex-col-reverse gap-2 lg:gap-4 text-black w-full lg:h-72 h-full">
          <div className="lg:w-[50%] flex flex-col justify-start items-center lg:justify-center p-2 lg:p-4 gap-4 lg:h-full h-[35%]">
            <h1 className="lg:text-5xl text-4xl font-bold w-full">
              About Me: Crafting Digital Excellence
            </h1>
            <p className="lg:text-sm w-full">
              I am a passionate web developer dedicated to crafting visually
              stunning and user-friendly websites, i thrive on transforming
              ideas into captivating online experiences while staying at the
              forefront of design trends
            </p>
          </div>
          <figure className="lg:h-full h-72 md:h-96 w-full lg:w-[50%]">
            <Image
              src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="portrait"
              height={500}
              width={500}
              priority
              className="h-full w-full object-cover rounded-xl"
            />
          </figure>
        </div>
      </div>
      {/* Education & Stack */}
    </section>
  )
}

export default AboutPage

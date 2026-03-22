import Head from "next/head"
import Header from "@/components/Header"
import AboutSection from "@/components/About Section"
import ProjectSection from "@/components/Project Section"
import Testimonial from "@/components/Testimonials"

function Home() {
  return (
    <section className="min-h-screen flex justify-center items-center">
      <Head>
        <title>Farouk Zemmouri.</title>
      </Head>
      <div className="flex flex-col min-h-fit w-full justify-center items-center gap-4">
        <Header />
        <AboutSection />
        <ProjectSection />
        <Testimonial />
      </div>
    </section>
  )
}

export default Home

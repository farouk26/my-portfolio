import ProjectDetailsCard from "@/components/Cards/ProjectDetailsCard"
import Head from "next/head"
import { motion } from "framer-motion"

function reelioPage() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <Head>
        <title>Reelio - Under Maintenance</title>
      </Head>
      <motion.div
        className="h-1/2 w-full lg:w-1/2 p-8 bg-dark-200 rounded-3xl"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: [0, 0.8, 1], x: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
          delay: 0.3,
          type: "spring",
        }}
      >
        <p className="text-lg text-white font-bold text-center">
          Under Maintenance ..
        </p>
      </motion.div>
      {/* <ProjectDetailsCard
        title={"Reelio"}
        websiteType={"Movie Platform"}
        devPeriod={"1 Week"}
        projectSummary={
          "Reelio is a dynamic movie platform designed for movie enthusiasts, featuring a user-friendly interface powered by Next.js, Tailwind CSS, and IMDb API. The project aimed to offer a seamless experience for users to discover, explore, and enjoy their favorite movies and series."
        }
        objective={
          "The objective of Reelio was to develop a dynamic platform catering to movie enthusiasts, providing a user-friendly interface for discovering, exploring, and watching favorite movies and series. The goal was to create a modern and responsive movie platform."
        }
        featureTitle={"Landing Page Showcase"}
        featureDescription={
          "Implemented a visually appealing landing page showcasing the latest movies and series, providing users with an engaging introduction to the platform."
        }
        featureTitle_1={"Search and Filtering Options"}
        featureDescription_1={
          "Integrated user-friendly search and filtering options in the navbar, enabling efficient navigation and empowering users to find specific movies or series. "
        }
        featureTitle_2={"Movie Details Page"}
        featureDescription_2={
          "Developed a dedicated page offering comprehensive details about each movie, enhancing the user's understanding and providing an immersive experience."
        }
        featureTitle_3={"Movie Details Page"}
        featureDescription_3={
          "Created detailed actor pages, offering in-depth information about actors, enriching the user's exploration of movie-related content"
        }
        image_1={"/images/reelio-1.png"}
        image_2={"/images/reelio-2.png"}
        image_3={"/images/reelio-3.png"}
        resultDescription={
          "Reelio successfully realized its objective by delivering a dynamic movie platform with a visually appealing landing page, intuitive search and filtering options, detailed movie pages, and informative actor pages. Users can seamlessly explore the latest content, access specific movie details, and delve into comprehensive actor information, creating an immersive and user-friendly movie-watching experience. The integration of Next.js, Tailwind CSS, and IMDb API ensures a modern and streamlined platform for movie enthusiasts."
        }
        githubUrl={
          "https://github.com/202306-NEA-DZ-FEW/movie-project-devsquad"
        }
        demoUrl={"https://movie-project-devsquad.vercel.app/"}
      /> */}
    </div>
  )
}

export default reelioPage

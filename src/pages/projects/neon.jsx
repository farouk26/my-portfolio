import ProjectDetailsCard from "@/components/Cards/ProjectDetailsCard"
import React from "react"

function neonPage() {
  return (
    <div className="w-full min-h-screen">
      <ProjectDetailsCard
        title={"Neon City"}
        websiteType={"Madlibs Mini Game"}
        devPeriod={"1 Week"}
        projectSummary={
          "Neon City is an interactive mini-game, allowing users to personalize pre-generated stories by filling in the blanks to create unique original outcome."
        }
        objective={
          "Inspired by a cyberpunk video game, The objective of Neon City was to create an engaging and interactive mini-game that allows users to personalize pre-generated stories by filling in the blanks. The aim was to deliver a unique and immersive experience within a one-week development timeframe, showcasing creativity, efficiency, and user-centric design."
        }
        featureTitle={"Cyberpunk Aesthetic Landing Page"}
        featureDescription={
          "Designed a visually striking cyberpunk-themed landing page to set the tone for the mini-game."
        }
        featureTitle_1={"Personalized Story Interaction"}
        featureDescription_1={
          "Developed an interactive system allowing users to personalize pre-generated stories."
        }
        featureTitle_2={"Efficient Development Process"}
        featureDescription_2={
          "Completed the entire development process, from conceptualization to deployment, in just one week."
        }
        featureTitle_3={"Technologies Used"}
        featureDescription_3={
          "HTML, CSS, JavaScript for the user interface and interaction."
        }
        image_1={"/images/neoncity.png"}
        image_2={"/images/neon-city.png"}
        image_3={"/images/neon-city-2.png"}
        resultDescription={
          "The result of the Neon City Interactive Mini-Game was a visually captivating and engaging user experience, seamlessly combining a cyberpunk aesthetic with personalized storytelling. Developed within a week using HTML, CSS, and JavaScript, the project successfully captured the essence of a cyberpunk video game. The end product stands as a polished and creative showcase, demonstrating proficiency in both technical execution and agile problem-solving."
        }
        githubUrl={"https://github.com/farouk26/Neon-City-Madlibs-Mini-Game"}
        demoUrl={"https://madlibs-404-brain-not-found.vercel.app/"}
      />
    </div>
  )
}

export default neonPage

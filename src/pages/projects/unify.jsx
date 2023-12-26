import ProjectDetailsCard from "@/components/Cards/ProjectDetailsCard"

function unifyPage() {
  return (
    <div className="w-full min-h-screen">
      <ProjectDetailsCard
        title={"Unify."}
        websiteType={"Community Sharing Platform"}
        devPeriod={"7 Weeks"}
        projectSummary={
          "Unify is a revolutionary online platform fostering community by promoting the sharing and reuse of various items among members. The platform features a comprehensive landing page with statistics, causes, and user blogs. Users can sign in and sign up seamlessly, access a personalized dashboard to manage listed items, explore a diverse range of items through a filtered display, and view detailed information on each item. Unify emphasizes community engagement and sustainable practices through its multifaceted design."
        }
        objective={
          "The objective of Unify is to revolutionize online sharing by building a strong community that actively shares and reuses various items. The platform aims to provide users with a seamless experience, encouraging sustainable practices and fostering a sense of community through shared resources."
        }
        featureTitle={"Informative Landing Page"}
        featureDescription={
          "Delivers insightful platform statistics, supported causes, and user-generated blogs for a comprehensive introduction to the community."
        }
        featureTitle_1={"Unified User Access"}
        featureDescription_1={
          "Ensures seamless and secure access through a streamlined sign-in/sign-up process and a personalized dashboard, facilitating user interaction."
        }
        featureTitle_2={"Exploratory Item Hub"}
        featureDescription_2={
          "Displays a visually rich assortment of listed items, enhanced by filtering options, promoting user exploration and engagement within the community."
        }
        featureTitle_3={"In-Depth Item Insights"}
        featureDescription_3={
          "Provides comprehensive details about each item, including user contact information, fostering effective communication and vibrant community participation."
        }
        image_1={"/images/unify.png"}
        image_2={"/images/unify1.png"}
        image_3={"/images/unify2.png"}
        resultDescription={
          "Unify successfully achieves its objective by providing a revolutionary online platform that fosters a sense of community through item sharing and reuse. The comprehensive landing page, unified sign-in/sign-up and dashboard, diverse item display with filtering options, and detailed item information with user contact contribute to a user-friendly and engaging experience. The platform actively promotes sustainability and community building, making a positive impact on the way users share and interact with resources."
        }
        githubUrl={"https://github.com/farouk26/Unify"}
        demoUrl={"https://unify-team-a.vercel.app/"}
      />
    </div>
  )
}

export default unifyPage

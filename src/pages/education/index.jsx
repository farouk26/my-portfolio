import EducationCard from "@/components/Cards/EducationCard"

function EducationPage() {
  return (
    <section className="min-h-screen w-full">
      <div className="flex flex-col w-full min-h-fit gap-6 mb-6">
        {/* Header */}
        <div className="lg:h-80 min-h-fit w-full rounded-3xl shadow-sm p-8 bg-zinc-800">
          <div className="flex flex-col h-full gap-3 w-full lg:w-[65%] justify-end">
            <h1 className="text-4xl uppercase font-bold text-white">
              Education
            </h1>
            <p className="text-md text-white font-light">
              This comprehensive portfolio highlights not only my academic
              achievements and certifications but also emphasizes the specific
              soft skills cultivated throughout my educational journey,
              contributing to my effectiveness as a dynamic professional.
            </p>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col w-full min-h-fit gap-6">
          <div className="flex flex-col gap-6 lg:w-[60%] w-full">
            <EducationCard
              title={"Front-End Web Development Bootcamp"}
              organization={"Re:Coded"}
              description_1={
                "Completed over 500 hours of intensive, project-based learning, showcasing proficiency in front-end development and best practices in collaborative coding."
              }
              description_2={
                "Collaborated with different teams on four diverse projects, utilizing HTML, CSS frameworks like Tailwind, JavaScript, Firebase, API integration, , React, and Next.js, while maintaining version control through Git."
              }
              year={"06/2023 - 12/2023"}
            />
            <EducationCard
              title={"Master of Sciences (MSc)"}
              occupation={"Phytopathology / Agronomy"}
              organization={"University of Yahia Fares"}
              description_1={
                "Conducted research projects on identifying and characterizing plant pathogens using molecular techniques and advanced diagnostic methods."
              }
              description_2={
                "Specialized in the study of plant diseases, their causes, and methods of control and management."
              }
              year={"2020 - 2022"}
            />
            <EducationCard
              title={"Bachelor of Sciences (BSc)"}
              occupation={"Plant Disease / Agronomy"}
              organization={"University of Yahia Fares"}
              description_1={
                "Participated in academic projects focused on identifying and mitigating common plant diseases, pests, and weeds affecting agricultural crops."
              }
              description_2={
                "Collaborated with peers on group projects, honing teamwork and communication skills while developing solutions for real-world plant protection challenges."
              }
              year={"2016 - 2020"}
            />
          </div>
          <div className="flex flex-col gap-6 min-h-fit lg:w-[40%] w-full">
            <div className="min-h-fit w-full bg-zinc-800 p-6 rounded-3xl">
              <div className="min-h-fit w-full flex flex-col gap-3 p-4">
                <h1 className="md:text-3xl text-2xl font-bold uppercase text-white">
                  Soft Skills
                </h1>
                <ul className="list-disc w-full p-5 text-lg font-light text-gray-200 flex flex-col gap-3">
                  <li>Research</li>
                  <li>Web Design</li>
                  <li>Project Management</li>
                  <li>Time Management</li>
                  <li>Front-End Development</li>
                  <li>Code Review</li>
                  <li>Attention to Detail</li>
                  <li>Collaboration</li>
                  <li>Teamwork</li>
                  <li>Team Leadership</li>
                </ul>
              </div>
            </div>
            <div className="w-full h-full p-6 bg-zinc-800 rounded-3xl">
              <div className="w-full min-h-fit flex flex-col gap-4 p-4">
                <h1 className="md:text-3xl text-2xl font-bold uppercase text-white">
                  Certifications
                </h1>
                <p className="text-lg text-gray-200 font-light">
                  + Front-End Web Development Certificate/Re:Coded
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationPage

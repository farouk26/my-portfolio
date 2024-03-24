import EducationCard from "@/components/Cards/EducationCard"
import { motion } from "framer-motion"
import Image from "next/image"

function EducationPage() {
  return (
    <section className="min-h-screen w-full">
      <div className="flex flex-col w-full min-h-fit gap-6 mb-6">
        {/* Header */}
        <motion.div
          className="lg:h-80 min-h-fit w-full rounded-3xl shadow-sm p-8 bg-dark-200"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: [0, 0.8, 1], x: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            delay: 0.22,
            type: "spring",
          }}
        >
          <div className="flex flex-col h-full gap-3 w-full lg:w-[70%] justify-end">
            <h1 className="text-4xl uppercase font-bold text-white">
              Education
            </h1>
            <p className="text-md text-gray-300 font-light">
              This comprehensive portfolio highlights not only my academic
              achievements and certifications but also emphasizes the specific
              soft skills cultivated throughout my educational journey,
              contributing to my effectiveness as a dynamic professional.
            </p>
          </div>
        </motion.div>
        <div className="flex lg:flex-row flex-col w-full min-h-fit gap-5">
          <div className="flex flex-col gap-6 lg:w-[60%] w-full">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: [0, 0.8, 1], x: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: 0.4,
                type: "spring",
              }}
            >
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: [0, 0.8, 1], x: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: 0.5,
                type: "spring",
              }}
            >
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: [0, 0.8, 1], x: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: 0.6,
                type: "spring",
              }}
            >
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
            </motion.div>
          </div>
          <div className="flex flex-col gap-6 min-h-fit lg:w-[40%] w-full">
            <motion.div
              className="min-h-fit w-full bg-dark-200 p-6 rounded-3xl"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: [0, 0.8, 1], x: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: 0.5,
                type: "spring",
              }}
            >
              <div className="min-h-fit w-full flex flex-col gap-3 p-4">
                <h1 className="md:text-3xl text-2xl font-bold uppercase text-white">
                  Soft Skills
                </h1>
                <ul className="list-disc w-full p-5 text-md font-light text-gray-200 flex flex-col gap-3">
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
            </motion.div>
            <motion.div
              className="w-full h-full p-6 bg-dark-200 rounded-3xl"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: [0, 0.8, 1], x: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: 0.6,
                type: "spring",
              }}
            >
              <h1 className="md:text-3xl text-2xl font-bold uppercase text-white p-4 mb-2">
                Certifications
              </h1>
              <div className="w-full min-h-fit p-4">
                <a
                  href="https://www.credential.net/fcaf13d7-eb4c-4b68-bbf5-48deb48dd14e#gs.5zc6jz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-105 transition duration-500 cursor-pointer"
                >
                  <li className="text-md text-gray-200 font-light hover:text-blue-600">
                    Front-End Web Development Certificate
                  </li>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationPage

import SocialsCard from "@/components/Cards/SocialsCard"
import ContactForm from "@/components/Form"
import { CiLinkedin } from "react-icons/ci"
import { FaGithub } from "react-icons/fa"
import { IoCallOutline } from "react-icons/io5"
import { motion } from "framer-motion"

function ContactPage() {
  return (
    <div className="min-h-screen w-full">
      <div className="flex flex-col gap-6 min-h-fit w-full">
        {/* Header */}
        <motion.div
          className="h-80 bg-dark-200 rounded-3xl w-full p-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: [0, 0.8, 1], x: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            delay: 0.22,
            type: "spring",
          }}
        >
          <div className="flex flex-col gap-3 justify-end p-4 h-full text-gray-300">
            <h1 className="text-3xl text-white uppercase font-bold">Contact</h1>
            <p className="text-md tracking-normal">
              Looking for a{" "}
              <span className="text-green-400 font-bold">Collaboration ?</span>,
              Want to{" "}
              <span className="font-bold text-green-400">Hire Me ?</span>, Send
              me a message!
            </p>
          </div>
        </motion.div>
        <motion.div
          className="min-h-fit w-full flex lg:flex-row flex-col gap-4 mb-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: [0, 0.8, 1], x: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            delay: 0.3,
            type: "spring",
          }}
        >
          <div className="lg:w-[60%] w-full h-full flex flex-col gap-3">
            <h1 className="text-2xl uppercase text-white py-3 font-bold">
              Send a Message
            </h1>
            <ContactForm />
          </div>
          <motion.div
            className="lg:w-[40%] flex flex-col w-full gap-3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              delay: 0.4,
              type: "spring",
            }}
          >
            <h1 className="text-2xl uppercase text-white font-bold py-3 ">
              Socials
            </h1>
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
              <SocialsCard
                Icon={<FaGithub />}
                Url={"https://github.com/farouk26"}
                socialName={"Github"}
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
              <SocialsCard
                Icon={<CiLinkedin />}
                Url={"https://www.linkedin.com/in/faroukisme/"}
                socialName={"LinkedIn"}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: [0, 0.8, 1], x: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: 0.7,
                type: "spring",
              }}
            >
              <SocialsCard
                Icon={<IoCallOutline />}
                socialName={"+213782062515"}
                Url={"tel:+213782062515"}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default ContactPage

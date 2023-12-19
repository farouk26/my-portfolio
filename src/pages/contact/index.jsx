import SocialsCard from "@/components/Cards/SocialsCard"
import ContactForm from "@/components/Form"
import React from "react"
import { CiLinkedin } from "react-icons/ci"
import { FaDiscord, FaGithub } from "react-icons/fa"

function ContactPage() {
  return (
    <div className="min-h-screen w-full">
      <div className="flex flex-col gap-6 min-h-fit w-full">
        {/* Header */}
        <div className="h-80 bg-zinc-800 rounded-3xl w-full p-6">
          <div className="flex flex-col gap-3 justify-end p-4 h-full">
            <h1 className="text-3xl text-white uppercase font-bold">Contact</h1>
            <p className="text-md">
              Looking for a
              <span className="text-white font-bold"> Collaboration ?</span>{" "}
              Want to <span className="font-bold text-white">Hire Me ?</span>{" "}
              Send me a message!
            </p>
          </div>
        </div>
        <div className="min-h-fit w-full flex lg:flex-row flex-col gap-4 mb-6">
          <div className="lg:w-[60%] w-full h-full flex flex-col gap-3">
            <h1 className="text-2xl uppercase text-white py-3 font-bold">
              Send a Message
            </h1>
            <ContactForm />
          </div>
          <div className="lg:w-[40%] flex flex-col w-full gap-3">
            <h1 className="text-2xl uppercase text-white font-bold py-3 ">
              Socials
            </h1>
            <SocialsCard
              Icon={<FaGithub />}
              Url={"https://github.com/farouk26"}
              socialName={"GitHub"}
            />
            <SocialsCard
              Icon={<CiLinkedin />}
              Url={"https://www.linkedin.com/in/faroukisme/"}
              socialName={"Linkedin"}
            />
            <SocialsCard
              Icon={<FaDiscord />}
              Url={"/contact"}
              socialName={"Discord"}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage

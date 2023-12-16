import Image from "next/image"
import React from "react"

function SummaryCard() {
  return (
    <div className="w-full h-full flex flex-col justify-start p-4 gap-2">
      <div className="flex items-center gap-4 w-full">
        <figure className="h-20 w-20">
          <Image
            alt="Picture"
            src="/images/2.jpg"
            height={400}
            width={400}
            className="object-cover h-full w-full rounded-full"
          />
        </figure>
        <h2 className="text-xl font-bold text-black">Summary</h2>
      </div>
      <p className="p-2 text-black">
        {" "}
        Born & Raised in the culturally rich city of Medea, Algeria, I am a
        26-year-old professional deeply engaged in the realm of web development.
        My initial background lies in pythopathology, from which I seamlessly
        transitioned into the world of front-end development. Specializing in
        the creation of user-centric web experiences, I bring forth a
        combination of aesthetic finesse and flawless functionality. I believe
        in teamwork and constant learning. Outside of work, I&lsquo;m a big fan
        of video games, enjoy hanging out with friends, hitting the gym, going
        on hikes, and occasionally camping under the stars. I also like keeping
        up with new technologies, always eager to learn and stay updated.
      </p>
    </div>
  )
}

export default SummaryCard

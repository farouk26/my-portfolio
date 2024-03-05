import { useRef, useState } from "react"
import { CiCircleCheck } from "react-icons/ci"
import emailjs from "@emailjs/browser"
import { motion } from "framer-motion"

function ContactForm() {
  const form = useRef()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSending, setIsSending] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setIsSending(true)

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY,
      )
      .then(
        (result) => {
          setIsSubmitted(true)
        },
        (error) => {
          console.log(error.text)
        },
      )
      .finally(() => {
        setIsSending(false)
      })
    e.target.reset()
  }

  const handleReturn = () => {
    setIsSubmitted(false)
  }

  return (
    <>
      {!isSubmitted ? (
        <form
          ref={form}
          onSubmit={sendEmail}
          className="min-h-fit w-full flex flex-col gap-4"
        >
          <div className="w-full min-h-fit flex flex-col gap-4 md:flex-row md:gap-2">
            <motion.input
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: [0, 0.8, 1], x: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: 0.4,
                type: "spring",
              }}
              type="text"
              name="user_name"
              placeholder="Full Name"
              className="bg-dark-200 rounded-xl text-sm text-white p-4 h-14 w-full lg:w-1/2"
              required
            />
            <motion.input
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: [0, 0.8, 1], x: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: 0.5,
                type: "spring",
              }}
              type="email"
              name="user_email"
              placeholder="Email"
              className="bg-dark-200 rounded-xl text-sm text-white p-4 h-14 w-full lg:w-1/2"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
          </div>
          <motion.textarea
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              delay: 0.6,
              type: "spring",
            }}
            className="textarea rounded-2xl text-white h-40 text-md bg-dark-200"
            name="message"
            placeholder="Message"
            required
          />
          <motion.button
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: [0, 0.8, 1], x: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              delay: 0.7,
              type: "spring",
            }}
            type="submit"
            value="Send"
            className="btn bg-green-700 text-white hover:bg-blue-600 hover:text-white rounded-2xl"
            disabled={isSending}
          >
            {isSending && (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="loading text-green-500 loading-infinity loading-lg"></span>
              </div>
            )}
            Send Message
          </motion.button>
        </form>
      ) : (
        <div className="w-full min-h-fit flex flex-col gap-4 p-4 bg-dark-200 rounded-3xl items-center">
          <CiCircleCheck className="text-6xl" />
          <h1 className="font-bold text-gray-200 text-3xl">Thank You</h1>
          <p className="text-md lg:text-lg text-center text-gray-200">
            Your message was sent successfully.
          </p>
          <button
            onClick={handleReturn}
            className="btn  bg-green-600 text-gray-300 hover:bg-blue-500 hover:text-gray-300 rounded-2xl"
          >
            Return to Form
          </button>
        </div>
      )}
    </>
  )
}

export default ContactForm

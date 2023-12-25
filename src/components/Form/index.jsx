import { useRef, useState } from "react"
import { CiCircleCheck } from "react-icons/ci"
import emailjs from "@emailjs/browser"

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
            <input
              type="text"
              name="user_name"
              placeholder="Full Name"
              className="bg-zinc-800 rounded-xl text-sm text-white p-4 h-14 w-full lg:w-1/2"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              className="bg-zinc-800 rounded-xl text-sm text-white p-4 h-14 w-full lg:w-1/2"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
          </div>
          <textarea
            className="textarea rounded-2xl text-white h-40 text-md bg-zinc-800"
            name="message"
            placeholder="Message"
            required
          />
          <button
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
          </button>
        </form>
      ) : (
        <div className="w-full min-h-fit flex flex-col gap-4 p-4 bg-zinc-800 rounded-3xl items-center">
          <CiCircleCheck className="text-6xl" />
          <h1 className="font-bold text-gray-200 text-3xl">Thank You</h1>
          <p className="text-lg text-gray-200">
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

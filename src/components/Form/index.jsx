import React from "react"

function ContactForm() {
  return (
    <div className="min-h-fit w-full flex flex-col gap-4">
      <div className="w-full min-h-fit flex flex-col gap-4 md:flex-row md:gap-2">
        <input
          type="text"
          placeholder="Full Name"
          className="bg-zinc-800 rounded-xl text-sm p-4 h-14 w-full lg:w-1/2"
        ></input>
        <input
          type="email"
          placeholder="Email"
          className="bg-zinc-800 rounded-xl text-sm p-4 h-14 w-full lg:w-1/2"
        ></input>
      </div>
      <textarea
        className="textarea rounded-2xl h-40 text-md bg-zinc-800"
        placeholder="Message"
      ></textarea>
      <button className="btn bg-gray-200 text-black hover:bg-blue-500 hover:text-white rounded-2xl">
        Send Message
      </button>
    </div>
  )
}

export default ContactForm

import React from "react"
import { Poppins } from "next/font/google"
import SideBar from "../SideBar"
import Navbar from "../Navbar"
import { GoDotFill } from "react-icons/go"
import Footer from "../Footer"

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["200", "300", "500", "700", "900"],
  fallback: ["Poppins", "sans-serif"],
  preload: true,
})
function Layout({ children }) {
  return (
    <main
      className={`${poppins.variable} font-poppins grid grid-cols-5 min-h-fit bg-white`}
    >
      <div className="col-span-5 lg:hidden block">
        <Navbar />
      </div>
      <div className="col-span-1 lg:block hidden">
        <SideBar />
      </div>
      <div className="lg:col-span-4 col-span-5 px-8 py-6">
        <span className="badge rounded-xl bg-emerald-50 text-green-500 font-semibold text-sm border-opacity-5 p-3 my-4 flex items-center gap-1">
          <GoDotFill />
          Available For Work
        </span>
        {children}
      </div>
      <div className="col-span-5 w-full">
        <Footer />
      </div>
    </main>
  )
}

export default Layout

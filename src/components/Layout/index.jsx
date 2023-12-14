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
      className={`${poppins.variable} font-poppins grid grid-cols-5 min-h-fit bg-slate-900`}
    >
      <div className="col-span-5 lg:hidden block sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="col-span-1 lg:block border-r border-gray-300 hidden">
        <SideBar />
      </div>
      <div className="lg:col-span-4 col-span-5 px-2 lg:px-8 pt-6 w-full overflow-y-auto">
        <span className="badge rounded-xl bg-gray-100 text-green-600 font-semibold text-sm border-opacity-5 ml-5 lg:ml-20 p-3 my-5 flex items-center gap-1">
          <GoDotFill />
          Available for Work
        </span>
        {children}
        <Footer />
      </div>
    </main>
  )
}

export default Layout

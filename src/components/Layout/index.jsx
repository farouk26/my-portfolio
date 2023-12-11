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
      <div className="col-span-5 lg:hidden block sticky top-0">
        <Navbar />
      </div>
      <div className="bg-red-200 col-span-1 lg:block border-r border-gray-300 hidden">
        <SideBar />
      </div>
      <div className="lg:col-span-4 col-span-5 px-8 pt-6 w-full overflow-y-auto">
        <span className="badge rounded-xl bg-emerald-50 text-green-500 font-semibold text-sm border-opacity-5 ml-1 md:ml-4 p-3 my-5 flex items-center gap-1">
          <GoDotFill />
          Available For Work
        </span>
        {children}
        <Footer />
      </div>
    </main>
  )
}

export default Layout

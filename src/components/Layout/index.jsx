import React from "react"
import { Bebas_Neue, Poppins } from "next/font/google"
import SideBar from "../SideBar"
import Navbar from "../Navbar"
import Footer from "../Footer"
import { motion } from "framer-motion"

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["200", "300", "500", "700", "900"],
  fallback: ["Poppins", "sans-serif"],
  preload: true,
})
const bebasneue = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebasneue",
  weight: "400",
})
function Layout({ children }) {
  return (
    <main
      className={`${poppins.className} font-poppins w-full bg-dark-100 p-4 lg:p-6`}
    >
      <div className="relative flex lg:flex-row flex-col 2xl:gap-11 lg:gap-6 gap-5">
        <div className="lg:hidden block sticky top-0 z-50">
          <Navbar />
        </div>
        <div className="lg:w-[16.5rem] 2xl:w[18rem] relative lg:block hidden">
          <div className="lg:w-[16.5rem] fixed 2xl:w-[18rem] h-full py-6 top-0 rounded-3xl">
            <SideBar />
          </div>
        </div>
        <div className="lg:flex-1 w-full overflow-y-auto bg-dark-100 rounded-3xl">
          {children}
          <Footer />
        </div>
      </div>
    </main>
  )
}

export default Layout

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
      className={`${poppins.className} font-poppins w-full bg-neutral-900 p-4 lg:p-6`}
    >
      <div className="relative flex lg:flex-row flex-col gap-8">
        <div className="lg:hidden block sticky top-0 z-50">
          <Navbar />
        </div>
        <div className="w-1/5 relative lg:block hidden">
          <div className="fixed w-1/5 h-full py-6 top-0 rounded-3xl">
            <SideBar />
          </div>
        </div>
        <div className="lg:flex-1 w-full overflow-y-auto bg-neutral-900 rounded-3xl">
          {children}
          <Footer />
        </div>
      </div>
    </main>
  )
}

export default Layout

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
      className={`${poppins.variable} font-poppins min-h-screen w-full bg-neutral-900 p-6`}
    >
      <div className="relative flex lg:flex-row flex-col gap-6">
        <div className="lg:hidden block sticky top-0 z-50">
          <Navbar />
        </div>
        <div className="lg:block w-1/5 hidden rounded-3xl">
          <SideBar />
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

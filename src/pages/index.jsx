import Navbar from "@/components/Navbar"
import SideBar from "@/components/SideBar"

export default function Home() {
  return (
    <main className="w-full h-full grid grid-cols-5">
      <div className="col-span-1 lg:block hidden bg-red-200 h-full">
        <SideBar />
      </div>
      <div className="col-span-5 lg:hidden block">
        <Navbar />
      </div>
      <div className="lg:col-span-4 col-span-5 bg-white h-full">CONTENT2</div>
    </main>
  )
}

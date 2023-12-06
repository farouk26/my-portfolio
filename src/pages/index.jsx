import SideBar from "@/components/SideBar"

export default function Home() {
  return (
    <main className="w-full grid grid-cols-5">
      <div className="col-span-1 bg-red-200 h-full">
        <SideBar />
      </div>
      <div className="col-span-4 bg-blue-300 h-full">CONTENT2</div>
    </main>
  )
}

import React from "react"

function SingleProject() {
  return (
    <div className="min-h-screen w-full">
      <div className="flex flex-col gap-6">
        {/* Header */}
        <div className="h-80 bg-zinc-800 rounded-3xl p-6 w-full">
          <div className="flex lg:flex-row flex-col gap-2 h-full w-full justify-between p-4">
            <div className="lg:w-1/2 w-full h-full lg:flex lg:items-end">
              <h1 className="text-3xl text-white font-bold">Unify.</h1>
            </div>
            <div className="flex flex-col gap-6 justify-center text-start lg:text-end w-full lg:w-1/2">
              <p className="text-md text-white">Community Sharing Platform</p>
              <div className="flex flex-col gap-1">
                <p className="text-md text-white">Development Period</p>
                <p className="text-sm text-gray-200">7 Weeks</p>
              </div>
            </div>
          </div>
        </div>
        {/* Summary Section */}
        <div className="flex flex-col gap-3 min-h-fit lg:h-64 bg-zinc-800 rounded-3xl p-6 justify-around">
          <h1 className="text-2xl text-white font-bold">Project Summary</h1>
          <p className="text-md font-light">
            Unify is a revolutionary online platform that fosters a sense of
            community by promoting the sharing and reuse of various items among
            its members. This project aims to create an intuitive and
            user-friendly website where individuals can seamlessly exchange
            clothes, food, electronics, and more, contributing to a sustainable
            and connected community.
          </p>
        </div>
        <div className="min-h-fit w-full flex lg:flex-row flex-col gap-6">
          <div className="flex flex-col gap-6 lg:w-[50%] w-full">
            <div className="flex flex-col gap-1 lg:h-80 min-h-fit bg-zinc-800 rounded-3xl p-6 justify-around">
              <h1 className="text-2xl font-bold text-white">
                Development Process
              </h1>
              <p className="text-md font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                eius cum ipsum aut explicabo dolor fuga, qui minus odio dolorem
                quia accusamus veritatis placeat fugit omnis iste praesentium
                reprehenderit quaerat.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 lg:w-[50%] w-full"></div>
        </div>
      </div>
    </div>
  )
}

export default SingleProject

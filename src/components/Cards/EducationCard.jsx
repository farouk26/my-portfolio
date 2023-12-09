import { MdShareLocation } from "react-icons/md"
import { PiStudentLight } from "react-icons/pi"

function EducationCard({ title, subtitle, year, location }) {
  return (
    <div className="flex lg:flex-row flex-col gap-4 items-center bg-gray-50 p-4 rounded-3xl">
      {/* Job Section */}
      <div className="flex gap-2 w-full">
        <PiStudentLight className=" text-black text-3xl" />
        <div className="flex flex-col">
          <h2 className=" text-md lg:text-lg font-bold text-black">{title}</h2>
          <p className="text-sm text-red-600 mb-2">{subtitle}</p>
          <div className="flex justify-between items-center">
            <span className="badge badge-outline badge-sm text-black">
              {year}
            </span>
            <p className="flex gap-2 items-center text-sm mb-1 text-black">
              <MdShareLocation />
              {location}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EducationCard

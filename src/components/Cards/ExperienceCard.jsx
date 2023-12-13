import { MdShareLocation } from "react-icons/md"

function ExperienceCard({ title, subtitle, year, description, location }) {
  return (
    <div className="flex flex-col items-center w-full gap-4 lg:gap-2 bg-slate-800 p-6 rounded-3xl ">
      <div className="w-full flex items-center justify-between h-full">
        <div className="h-full w-full">
          <h2 className="font-bold text-gray-200">{title}</h2>
          <p className="text-sm text-yellow-300 mb-2">{subtitle}</p>
        </div>
      </div>
      <p className="text-gray-100 text-sm lg:text-md text-start w-full">
        {description}
      </p>
      <div className="flex flex-row items-center justify-between w-full gap-2">
        <span className="badge badge-outline badge-sm text-gray-100">
          {year}
        </span>
        <p className="flex gap-2 items-center text-xs mb-1 text-gray-100">
          <MdShareLocation className="text-green-300" />
          {location}
        </p>
      </div>
    </div>
  )
}

export default ExperienceCard

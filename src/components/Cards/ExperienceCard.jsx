import { TbBadge } from "react-icons/tb"

function ExperienceCard({ title, subtitle, year, description }) {
  return (
    <div className="flex lg:flex-row flex-col gap-4 items-center justify-between lg:gap-12 bg-gray-200 p-4 rounded-3xl">
      {/* Job Section */}
      <div className="flex gap-2 w-full">
        <TbBadge className="mt-[0.45rem] text-black" />
        <div className="flex flex-col">
          <h2 className="text-lg font-bold text-black">{title}</h2>
          <p className="text-sm text-red-600 mb-2">{subtitle}</p>
          <span className="badge badge-outline badge-sm text-black">
            {year}
          </span>
        </div>
      </div>
      {/* Job Description */}
      <div className="w-full">
        <p className="text-black text-sm lg:text-md text-start w-full lg:px-4 px-2">
          {description}
        </p>
      </div>
    </div>
  )
}

export default ExperienceCard

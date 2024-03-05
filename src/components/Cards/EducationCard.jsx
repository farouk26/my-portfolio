function EducationCard({
  title,
  year,
  occupation,
  organization,
  description_1,
  description_2,
}) {
  return (
    <div className="w-full min-h-fit p-4 bg-dark-200 rounded-3xl">
      <div className="flex flex-col p-4 gap-6">
        <div className="flex flex-col gap-1 w-full">
          <h1 className="md:text-3xl text-2xl text-white capitalize font-bold">
            {title}
          </h1>
          <p className="text-md text-gray-200 font-semibold">{occupation}</p>
          <p className="text-md text-gray-300 font-light">{organization}</p>
        </div>
        <ul className="w-full list-disc px-4 flex flex-col gap-2 font-light">
          <li className="text-md text-gray-200">{description_1}</li>
          <li className="text-md text-gray-200">{description_2}</li>
        </ul>
        <div className="px-4">
          <p className="text-sm">{year}</p>
        </div>
      </div>
    </div>
  )
}

export default EducationCard

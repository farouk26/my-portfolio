function InfoCard({ icon: IconComponent, title, description }) {
  return (
    <div className="w-full min-h-full bg-dark-200 rounded-3xl shadow-sm p-5">
      <div className="flex flex-col gap-2 w-full min-h-fit">
        <span className="self-start text-3xl text-white">{IconComponent}</span>
        <div className="flex flex-col w-full p-1">
          <h2 className="text-xl font-bold text-white">{title}</h2>
          <p className="text-md text-gray-300 font-light w-[95%] p-1 min-h-fit">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default InfoCard

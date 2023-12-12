function InfoCard({ icon: IconComponent, title, description }) {
  return (
    <div className="w-full h-full bg-gray-200 rounded-3xl p-5 transition lg:hover:scale-105 duration-400 lg:cursor-pointer">
      <div className="flex flex-col gap-2 w-full min-h-fit">
        <span className="self-start text-2xl text-black">{IconComponent}</span>
        <h2 className="text-lg font-bold text-black">{title}</h2>
        <p className="text-sm text-black p-1">{description}</p>
      </div>
    </div>
  )
}

export default InfoCard

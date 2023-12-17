function InfoCard({ icon: IconComponent, title, description }) {
  return (
    <div className="w-full min-h-full bg-zinc-800 rounded-3xl shadow-sm p-5 transition lg:hover:scale-105 duration-400 lg:cursor-pointer">
      <div className="flex flex-col gap-2 w-full min-h-fit">
        <span className="self-start text-3xl text-white">{IconComponent}</span>
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <p className="text-md text-white p-1 font-light min-h-fit">
          {description}
        </p>
      </div>
    </div>
  )
}

export default InfoCard

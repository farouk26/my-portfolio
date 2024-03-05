function SocialsCard({ Icon, socialName, Url }) {
  return (
    <div className="w-full min-h-fit">
      <div className="w-full shadow-sm bg-dark-200 rounded-2xl p-4">
        <a
          href={Url}
          rel="noopener noreferrer"
          target="_blank"
          className="flex gap-4 items-center hover:scale-105 transition duration-500 cursor-pointer"
        >
          <span className="text-3xl text-white">{Icon}</span>
          <p className="text-lg text-white w-full">{socialName}</p>
        </a>
      </div>
    </div>
  )
}

export default SocialsCard

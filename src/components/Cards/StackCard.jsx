import Image from "next/image"

function StackCard({ title, description, imageUrl }) {
  return (
    <div className="h-72 w-full p-6 bg-dark-200 rounded-3xl hover:bg-zinc-800 transition duration-500">
      <div className="h-full w-full flex flex-col justify-between">
        <figure className="w-16 h-16">
          <Image
            src={imageUrl}
            alt="skill img"
            height={500}
            width={500}
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="flex flex-col gap-3 w-full px-4">
          <h1 className="text-2xl text-white font-bold">{title}</h1>
          <p className="text-md font-light text-gray-200">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default StackCard

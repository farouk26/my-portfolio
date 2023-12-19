import Image from "next/image"

function StackCard({ title, description, imageUrl }) {
  return (
    <div className="h-72 w-full p-6 bg-zinc-800 rounded-3xl hover:bg-zinc-700 transition duration-500 cursor-pointer">
      <div className="h-full w-full flex flex-col justify-between">
        <figure className="w-16 h-24">
          <Image
            src={imageUrl}
            alt=""
            height={500}
            width={500}
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="flex flex-col gap-3 w-full px-4">
          <h1 className="text-2xl text-white font-bold">{title}</h1>
          <p className="text-md">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default StackCard

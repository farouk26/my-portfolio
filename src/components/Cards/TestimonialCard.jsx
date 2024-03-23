import Image from "next/image"

function TestimonialCard({ imageUrl, title, subtitle, description }) {
  return (
    <div className="h-full">
      <div className="bg-dark-200 flex flex-col gap-1 p-4 rounded-3xl mb-10 md:h-72 lg:h-60 h-[525px]">
        <div className="flex items-center gap-4 min-h-fit">
          <figure className="h-16 w-16">
            <Image
              alt="Picture"
              src={imageUrl}
              height={400}
              width={400}
              priority
              className="object-cover h-full w-full rounded-full"
            />
          </figure>
          <div>
            <h2 className="text-xl font-bold text-white">{title}</h2>
            <p className="text-sm text-gray-300 font-light">{subtitle}</p>
          </div>
        </div>
        <div className="h-full w-full p-3">
          <p className="text-gray-300 text-md font-light">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard

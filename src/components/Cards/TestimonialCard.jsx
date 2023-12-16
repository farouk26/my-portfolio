import Image from "next/image"

function TestimonialCard({ imageUrl, title, subtitle, description }) {
  return (
    <div className="h-full">
      <div className="bg-gray-50 flex flex-col gap-1 p-4 rounded-3xl mb-10">
        <div className="flex items-center gap-4 min-h-fit">
          <figure className="h-16 w-16">
            <Image
              alt="Picture"
              src={imageUrl}
              height={400}
              width={400}
              className="object-cover h-full w-full rounded-full"
            />
          </figure>
          <div>
            <h2 className="text-xl font-bold text-black">{title}</h2>
            <p className="text-sm text-gray-600">{subtitle}</p>
          </div>
        </div>
        <div className="h-full w-full p-3">
          <p className="text-black text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard

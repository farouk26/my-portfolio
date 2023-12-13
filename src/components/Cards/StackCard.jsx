import Image from "next/image"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import skills from "@/libs/skills"
import Slider from "react-slick"

function StackCard() {
  const autoplaySettings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 980, // from 820 px wide and down
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  }
  return (
    <div className="w-full h-full flex justfy-center items-center">
      <Slider {...autoplaySettings} className="w-full min-h-fit">
        {skills[0].map((part) => (
          <div key={part.name}>
            <Image
              src={part.image}
              alt={part.name}
              width={120}
              height={120}
              className="object-cover w-20 px-1 rounded-full h-20"
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default StackCard

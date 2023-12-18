import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import Image from "next/image"
function Carousel({ image_1, image_2, image_3, image_4 }) {
  return (
    <section className="min-h-fit w-full mb-2">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-96 group"
      >
        <SwiperSlide>
          <Image
            src={image_1}
            alt="project-picture"
            height={800}
            width={800}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="h-full w-full object-cover object-center group-hover:scale-110 lg:duration-500 cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={image_2}
            alt="project-picture"
            height={800}
            width={800}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="h-full w-full object-contain rounded-lg group-hover:scale-110 lg:duration-500 cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={image_3}
            alt="project-picture"
            height={800}
            width={800}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="h-full w-full object-contain object-center rounded-lg group-hover:scale-110 lg:duration-500 cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={image_4}
            alt="project-picture"
            height={800}
            width={800}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="h-full w-full object-contain object-center group-hover:scale-110 lg:duration-500 cursor-pointer"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Carousel

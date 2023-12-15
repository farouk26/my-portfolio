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
function Carousel() {
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
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="/images/madlibs.png"
            alt="project-picture"
            height={400}
            width={400}
            className="h-full w-full object-cover object-center rounded-3xl"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Carousel

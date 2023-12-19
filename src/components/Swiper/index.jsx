import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import TestimonialCard from "../Cards/TestimonialCard"

export default function Slider() {
  return (
    <section className="mb-2">
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
          <TestimonialCard
            title={"Hadia Djadallah"}
            description={
              "Farouk has the gift of making mundane designs into coded art. With his amazing attention to details, great commitment and fruitful teamwork, I only see a great and exceptional developer. I was honored to have a collaboration in Unify with him."
            }
            subtitle={"Front-End Developer"}
            imageUrl={"/images/hadia.jpg"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            title={"Darine Tag"}
            description={
              "Farouk brought life to the party, solutions to the problem and art to the projects. I had known Farouk as a friend who's always there to help whether it be technical or diplomatic.  His energy was so influential that it brought positive impact on the whole team. An aspiring developer, an amazing team player and a person who will make great things in whatever situation he's put in."
            }
            subtitle={"Front-End Developer"}
            imageUrl={"/images/darinetag.png"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            title={"Merzouk Fatima Zohra"}
            subtitle={"Front-End Developer"}
            imageUrl={"/images/fatima.jpg"}
            description={
              "I had the pleasure of working with Farouk on the mad lib project, where he showed his exceptional design skills on the Landing Page. His creativity knows no bounds, and his commitment to delivering outstanding work is truly admiring. He also showed a strong desire to learn new things and improve his skills. He was not shy to ask questions and seek feedback. Farouk is a valuable asset to any team and I highly recommend him."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            title={"Manel Hasna Haddoud"}
            subtitle={"Front-End Developer"}
            imageUrl={"/images/manel.jpg"}
            description={
              "I had the pleasure of working with Faruk on our movie project. His exceptional leadership skills were evident as he guided and motivated the team. Faruk was always keen to learn and his enthusiasm inspired us all to improve. What impressed me the most was Farouk's willingness to help others. He was always available to answer questions and provide support, making him a true team player. Our collaboration flowed effortlessly because of his efforts. I strongly recommend Farouk for any project."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            title={"Sorour Rahem"}
            subtitle={"Front-End Developer"}
            imageUrl={"/images/sorour.jpg"}
            description={
              "Our collaboration across three projects was nothing short of extraordinary. Your knack for innovative design and commitment to crafting efficient code brought a unique flair to our work. Wishing you continued success, and I'm excited about the possibility of future collaborations."
            }
          />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderNavigationButton from "./SliderNavigationButton";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const Card = ({ title, subTitle, content }) => {
  return (
    <div className="">
      <p>Welcome to Unify Wellness Pvt Ltd</p>
      <h2>Empowering Health Through Innovative Solutions</h2>

      <p className="text-base opacity-70 text-white">{content}</p>
      <div>
        <a href="/" className="btn-main px-8 py-2">
          Learn More
        </a>
        <a
          href="/"
          className=" rounded-md border border-[#00AEF3] text-[#00AEF3] px-8 py-2"
        >
          Try it for Free
        </a>
      </div>
    </div>
  );
};

function Hero() {
  return (
    <div className="hero-bg">
      <div className="container-wrapper">
        <div className=" py-12 max-w-lg h-full">
          <Swiper
            navigation={{
              nextEl: "#nextEl",
              prevEl: "#prevEl",
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Card  />
            </SwiperSlide>
            <SwiperSlide>
            <Card  />
            </SwiperSlide>
            <SwiperSlide>
            <Card  />
            </SwiperSlide>
            <SwiperSlide>
            <Card  />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="flex items-center space-x-5 justify-start">
        <SliderNavigationButton id="prevEl" className="rotate-180" />
        <SliderNavigationButton id="nextEl" />
      </div>
    </div>
  );
}

export default Hero;

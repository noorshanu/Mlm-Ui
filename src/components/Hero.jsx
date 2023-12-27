import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderNavigationButton from "./SliderNavigationButton";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const Card = () => {
  return (
    <div className=" mt-8">
      <p className=" text-white text-2xl font-medium capitalize mb-2">Welcome to <span className=" text-[#008EF9]"> Unify Wellness Pvt Ltd </span></p>
      <h2 className=" text-white font-sfpro text-[50px] font-bold lh-1_1 mb-3">Empowering Health Through Innovative Solutions</h2>

      <p className="text-lg opacity-70 text-white mb-4">
        At Unify Wellness Pvt Ltd, we are dedicated to enhancing your health and
        wellbeing through innovative healthcare solutions. Our mission is to
        offer products that blend the latest in wellness technology with
        everyday usability, ensuring that you experience optimum health benefits
        seamlessly integrated into your daily life.
      </p>
      <div className=" flex  items-center gap-4">
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
        <div className=" py-12 max-w-2xl h-full">
          {/* <Swiper
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
          </Swiper> */}
          <Card />
        </div>
      </div>

      {/* <div className="flex items-center space-x-5 justify-start">
        <SliderNavigationButton id="prevEl" className="rotate-180" />
        <SliderNavigationButton id="nextEl" />
      </div> */}
    </div>
  );
}

export default Hero;

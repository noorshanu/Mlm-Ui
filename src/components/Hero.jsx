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
      <p className=" text-white text-2xl font-medium capitalize mb-2">
        Welcome to{" "}
        <span className=" text-[#008EF9]"> Unify Wellness Pvt Ltd </span>
      </p>
      <h2 className=" text-white font-sfpro text-[50px] font-bold lh-1_1 mb-3">
        Empowering Health Through Innovative Solutions
      </h2>

      <p className="text-lg opacity-70 text-white mb-4">
        At Unify Wellness Pvt Ltd, we are dedicated to enhancing your health and
        wellbeing through innovative healthcare solutions. Our mission is to
        offer products that blend the latest in wellness technology with
        everyday usability, ensuring that you experience optimum health benefits
        seamlessly integrated into your daily life.
      </p>
      <div className=" flex  items-center gap-4">
        <a href="/" className="btn-main px-8 py-2 font-bold">
          Sign Up
        </a>
      </div>
    </div>
  );
};

function Hero() {
  return (
    <>
      <Swiper
        navigation={{
          nextEl: "#nextEl",
          prevEl: "#prevEl",
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="hero-bg">
            <div className="container-wrapper">
              <div className=" py-12 max-w-2xl h-full">
                <Card />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="hero-bg2">
            <div className="container-wrapper">
              <div className=" py-12 max-w-2xl h-full mx-auto">
                <div className=" flex justify-center mx-auto items-center flex-col mt-[20%]">
                  <h2 className=" text-white font-sfpro text-[50px] text-center font-bold lh-1_1 mb-3">
                    Empowering Health Through Innovative Solutions
                  </h2>

                  <p>
                    {" "}
                    <p className="text-lg text-center  text-black mb-4">
                      At Unify Wellness Pvt Ltd, we are dedicated to enhancing
                      your health and wellbeing through innovative healthcare
                      solutions. Our mission is to offer products that blend the
                      latest in wellness technology with everyday usability,
                      ensuring that you experience optimum health benefits
                      seamlessly integrated into your daily life.
                    </p>
                  </p>

                  <div className=" flex justify-center gap-6 items-center">
                    <a href="/" className="btn-main px-8 py-2 font-bold">
                      Products
                    </a>
                    <a href="/" className="btn-main px-8 py-2 font-bold">
                      Gallery
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-bg3">
            <div className="container-wrapper">
              <div className=" py-12 max-w-2xl h-full">
                <Card />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="flex items-center space-x-5 justify-center my-4">
        <SliderNavigationButton id="prevEl" className="rotate-180" />
        <SliderNavigationButton id="nextEl" />
      </div>
    </>
  );
}

export default Hero;

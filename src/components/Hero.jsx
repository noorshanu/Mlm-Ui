import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination,  } from 'swiper/modules';

const Card = () => {
  return (
    <div className=" mt-24">
      <p className=" text-white text-2xl font-medium capitalize mb-2">
        Welcome to{" "}
        <span className=" text-[#008EF9]"> Unify Wellness Pvt Ltd </span>
      </p>
      <h2 className=" text-white font-sfpro text-[50px] font-bold lh-1_1 mb-3">
        Embark on a Journey of Harmonized Health
      </h2>

      <p className="text-lg opacity-70 text-white mb-4">
        "Discover the transformative power of Biomagnetic Therapy at Unify
        Wellness. Where your well-being is our priority.
      </p>
      <div className=" flex  items-center gap-4">
        <a href="/" className="btn-main px-8 py-2 font-bold">
          Explore Our Services
        </a>
      </div>
    </div>
  );
};

function Hero() {
  return (
    <>
      <Swiper
       spaceBetween={30}
       centeredSlides={true}
       autoplay={{
         delay: 2500,
         disableOnInteraction: false,
       }}
       pagination={{
         clickable: true,
       }}
     
       modules={[Autoplay, Pagination]}
    
        className="mySwiper"
      >

<SwiperSlide>
          <div className="hero-bg4">
            <div className="container-wrapper">
              <div className=" py-12 max-w-2xl h-full">
                <div className=" mt-32">
                  <p className=" text-[#fff] text-2xl font-medium capitalize mb-2">
                  Empower Your Health at Home
                  </p>
                  <h2 className=" text-white font-sfpro text-[50px] font-bold lh-1_1 mb-3">
                  Continue Your Healing Journey Anywhere
                  </h2>

                  <p className="text-lg opacity-90 text-white mb-4">
                  "With our Home Therapy Kits, maintain and enhance your wellness in the comfort of your home
                  </p>
                  <div className=" flex  items-center gap-4">
                    <a href="/" className="btn-main px-8 py-2 font-bold">
                    Shop Our Products
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
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
                  <p className="  text-[#fff] text-2xl font-medium capitalize mb-2">
                    {" "}
                    The Science of Biomagnetism
                  </p>
                  <h2 className=" text-white font-sfpro text-[50px] text-center font-bold lh-1_1 mb-3">
                    Revitalize Your Life with Biomagnetic Balance
                  </h2>

                  <p>
                    {" "}
                    <p className="text-lg text-center  text-white mb-4">
                      Unlock the secrets of natural healing. Biomagnetic Therapy
                      – a path to restoring your body's harmony."
                    </p>
                  </p>

                  <div className=" flex justify-center gap-6 items-center">
                    <a href="/" className="btn-main px-8 py-2 font-bold">
                      Learn About Biomagnetic Therapy
                    </a>
                    {/* <a href="/" className="btn-main px-8 py-2 font-bold">
                      Gallery
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="hero-bg3">
            <div className="container-wrapper">
              <div className=" py-12 max-w-2xl h-full">
                <div className=" mt-24">
                  <p className=" text-[#000] text-2xl font-medium capitalize mb-2">
                    Personalized Wellness Programs
                  </p>
                  <h2 className=" text-white font-sfpro text-[50px] font-bold lh-1_1 mb-3">
                    Your Unique Path to Wellness
                  </h2>

                  <p className="text-lg opacity-70 text-white mb-4">
                    Experience personalized biomagnetic therapy sessions,
                    tailored to your body's specific needs.
                  </p>
                  <div className=" flex  items-center gap-4">
                    <a href="/" className="btn-main px-8 py-2 font-bold">
                      Explore Our Products
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
    
      </Swiper>

      {/* <div className="flex items-center space-x-5 justify-center my-4">
        <SliderNavigationButton id="prevEl" className="rotate-180" />
        <SliderNavigationButton id="nextEl" />
      </div> */}
    </>
  );
}

export default Hero;

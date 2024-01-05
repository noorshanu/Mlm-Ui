import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderNavigationButton from "./SliderNavigationButton";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const Cards = ({
  iconSrc,
  title,
  description,
  price,
  gstPrice,
  TotalPrice,
}) => (
  <div className="card-p  border sm:m-0 m-4 ">
    <div className=" text-center">
      <img
        src={iconSrc}
        alt=""
        className="  rounded-lg h-[180px] w-auto  mx-auto "
      />
      {/* <img src="images/prodimg.png" alt=""  className=" mx-auto rounded-lg"/> */}
    </div>
    <div>
      <h2 className=" text-black font-sfpro font-medium text-xl mb-1">
        {title}
      </h2>
      <p className=" text-[#979797] text-sm font-sfpro mb-1">{description}</p>

      <div className=" flex justify-between items-center">
        <h3 className="text-[#979797] text-sm font-sfpro font-normal">
          MRP Price inc GST
        </h3>
        <p className="text-[#000] text-sm font-sfpro font-semibold">
          ₹ {TotalPrice}{" "}
        </p>
      </div>
    </div>
  </div>
);

function Products() {
  return (
    <section className=" py-4 sm:py-14">
      <div className="container-wrapper">
        <div>
          <h1 className="text-[24px] sm:text-[50px] font-bold text-black text-center my-2">
            Our Products
          </h1>
        </div>

        <div className="sm:flex justify-between items-center gap-4 py-4 hidden">
          <Cards
            title="Regular Biomagnetic Mattress"
            iconSrc="images/prod/prod9.jpg"
            description="Single Regular Mattress + One Pillow (80+20 Magnets)"
            TotalPrice="7,500.00"
          />

          <Cards
            title="Premium Biomagnetic Mattress"
            iconSrc="images/prod/prod3.jpg"
            description="Single Premium Mattress + One Pillow (100+20 Magnets)"
            TotalPrice="11,000.00"
          />

          <Cards
            title="Bracelet"
            iconSrc="images/prod/prod2.jpg"
            description="Enhance Your Strength and StaminaA magnetic Bracelet"
            TotalPrice="600.00"
          />

          <Cards
            title="Foot Massager "
            iconSrc="images/prod/prod1.jpg"
            description="Relieves foot tension, pain, and chronic fatigue ."
            TotalPrice="1,500.00"
          />
        </div>
        <div className=" block sm:hidden ">
          <Swiper
            navigation={{
              nextEl: "#nextEl",
              prevEl: "#prevEl",
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Cards
                title="Biomagnetic Mattress"
                iconSrc="images/prod/prod4.jpg"
                description="Single Regular Mattress + One Pillow (80+20 Magnets)"
                TotalPrice="7,500.00"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Cards
                title="Biomagnetic Mattress"
                iconSrc="images/prod/prod3.jpg"
                description="Single Premium Mattress + One Pillow (100+20 Magnets)"
                TotalPrice="11,000.00"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Cards
                title="Bracelet"
                iconSrc="images/prod/prod2.jpg"
                description="Enhance Your Strength and StaminaA magnetic Bracelet"
                TotalPrice="600.00"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Cards
                title="Foot Massager "
                iconSrc="images/prod/prod1.jpg"
                description="Relieves foot tension, pain, and chronic fatigue ."
                TotalPrice="1,500.00"
              />
            </SwiperSlide>

            <SwiperSlide>
            <Cards
            title="Water pad "
            iconSrc="images/prod/prod5.jpg"
            description="ultimate solution  to stay hydrated for improving thier  health "
            TotalPrice="800.00"
          />
            </SwiperSlide>
            <SwiperSlide>
            <Cards
            title="Knee Cap Single Knee "
            iconSrc="images/prod/prod6.jpg"
            description="it's designed for any and all knee injuries,arthritis,ACL tears etc"
            TotalPrice="2,000.00"
          />

            </SwiperSlide>
            <SwiperSlide>
            <Cards
            title="Posture Corrector"
            iconSrc="images/prod/prod7.jpg"
            description="it's to mold seamlessly with the upper and middle back support ."
            TotalPrice="2,500.00"
          />
            </SwiperSlide>
            <SwiperSlide>
            <Cards
            title="Neck Massager"
            iconSrc="images/prod/prod8.jpg"
            description=" the massager help to increase blood flow to the neck muscles, promoting healing and relaxation"
           
            TotalPrice="1,250.00"
          />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex sm:hidden items-center space-x-5 justify-center">
        <SliderNavigationButton id="prevEl" className="rotate-180" />
        <SliderNavigationButton id="nextEl" />
      </div>

        <div className=" hidden sm:flex justify-between items-center gap-4 py-4 mt-4">
          <Cards
            title="Water pad "
            iconSrc="images/prod/prod5.jpg"
            description="ultimate solution  to stay hydrated for improving thier  health "
            TotalPrice="800.00"
          />

          <Cards
            title="Knee Cap Single Knee "
            iconSrc="images/prod/prod6.jpg"
            description="it's designed for any and all knee injuries,arthritis,ACL tears etc"
            TotalPrice="2,000.00"
          />

          <Cards
            title="Posture Corrector"
            iconSrc="images/prod/prod7.jpg"
            description="it's to mold seamlessly with the upper and middle back support ."
            TotalPrice="2,500.00"
          />

          <Cards
            title="Neck Massager"
            iconSrc="images/prod/prod8.jpg"
            description=" the massager help to increase blood flow to the neck muscles, promoting healing and relaxation"
           
            TotalPrice="1,250.00"
          />
        </div>
      </div>
    </section>
  );
}

export default Products;

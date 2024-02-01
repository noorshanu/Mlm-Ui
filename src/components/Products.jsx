import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';

// import required modules
import { Autoplay,Pagination  } from "swiper/modules";


const Cards = ({
  iconSrc,
  title,
  description,
 
  TotalPrice,
}) => (
  <div className="card-p  border sm:m-0 m-4 ">
    <div className=" text-center relative card__three">
      <img
        src={iconSrc}
        alt=""
        className="  rounded-lg h-[180px] w-auto  mx-auto "
      />
    
    </div>
    <div>
      <h2 className=" text-black font-sfpro font-medium text-xl mb-1">
        {title}
      </h2>
      <p className=" text-[#979797] text-sm font-sfpro mb-1">{description}</p>

      {/* <div className=" flex justify-between items-center">
        <h3 className="text-[#979797] text-sm font-sfpro font-normal">
          MRP Price inc GST
        </h3>
        <p className="text-[#000] text-sm font-sfpro font-semibold">
          ₹ {TotalPrice}{" "}
        </p>
      </div> */}
    </div>
  </div>
);

function Products() {
  return (
    <section className=" py-4 sm:py-14" id="prod">
      <div className="container-wrapper">
        <div className=" text-center ">
          <h1 className="text-[24px] sm:text-[50px] font-bold text-black text-center mt-2 ">
            Our Products
          </h1>
          <div className=" bg-[#00aef3] h-[4px] w-[200px] mx-auto mb-2"></div>
        </div>

        <div className=" py-4 hidden sm:block" 
     
    >
          <Swiper
            slidesPerView={4}
            loop={true}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper py-2"
          >
            <SwiperSlide>
              {" "}
              <Cards
                title="Regular Biomagnetic Mattress"
                iconSrc="images/prod/prod9.png"
                description="Single Regular Mattress + One Pillow (80+20 Magnets)"
                TotalPrice="7,500.00"
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Cards
                title="Premium Biomagnetic Mattress"
                iconSrc="images/prod/prod3.png"
                description="Single Premium Mattress + One Pillow (100+20 Magnets)"
                TotalPrice="11,000.00"
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Cards
                title="Foot Massager "
                iconSrc="images/prod/prod1.png"
                description="Relieves foot tension, pain, and chronic fatigue ."
                TotalPrice="1,500.00"
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Cards
                title="Bracelet"
                iconSrc="images/prod/prod2.png"
                description="Enhance Your Strength and StaminaA magnetic Bracelet"
                TotalPrice="600.00"
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Cards
                title="Foot Massager "
                iconSrc="images/prod/prod1.png"
                description="Relieves foot tension, pain, and chronic fatigue ."
                TotalPrice="1,500.00"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className=" block sm:hidden ">
          <Swiper
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
             <SwiperSlide>
              {" "}
              <Cards
                title="Regular Biomagnetic Mattress"
                iconSrc="images/prod/prod9.png"
                description="Single Regular Mattress + One Pillow (80+20 Magnets)"
                TotalPrice="7,500.00"
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Cards
                title="Premium Biomagnetic Mattress"
                iconSrc="images/prod/prod3.png"
                description="Single Premium Mattress + One Pillow (100+20 Magnets)"
                TotalPrice="11,000.00"
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Cards
                title="Foot Massager "
                iconSrc="images/prod/prod1.png"
                description="Relieves foot tension, pain, and chronic fatigue ."
                TotalPrice="1,500.00"
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Cards
                title="Bracelet"
                iconSrc="images/prod/prod2.png"
                description="Enhance Your Strength and StaminaA magnetic Bracelet"
                TotalPrice="600.00"
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Cards
                title="Foot Massager "
                iconSrc="images/prod/prod1.png"
                description="Relieves foot tension, pain, and chronic fatigue ."
                TotalPrice="1,500.00"
              />
            </SwiperSlide>
            
          </Swiper>
        </div>
     

        <div className=" hidden sm:flex justify-between items-center gap-4 py-4 mt-4" 
    
    >
          <Cards
            title="Water pad "
            iconSrc="images/prod/prod5.png"
            description="ultimate solution  to stay hydrated for improving thier  health "
            TotalPrice="800.00"
          />

          <Cards
            title="Knee Cap Single Knee "
            iconSrc="images/prod/prod6.png"
            description="it's designed for any and all knee injuries,arthritis,ACL tears etc"
            TotalPrice="2,000.00"
          />

          <Cards
            title="Posture Corrector"
            iconSrc="images/prod/prod7.png"
            description="it's to mold seamlessly with the upper and middle back support ."
            TotalPrice="2,500.00"
          />

          <Cards
            title="Neck Massager"
            iconSrc="images/prod/prod8.png"
            description="massager help to increase blood flow to the neck muscles."
            TotalPrice="1,250.00"
          />
        </div>
      </div>
    </section>
  );
}

export default Products;

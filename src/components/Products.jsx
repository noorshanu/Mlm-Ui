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
  <div className="card-p  ">
    <div>
      <img src={iconSrc} alt="" className=" mx-auto rounded-lg h-[180px] w-auto sm:w-[266px]" />
      {/* <img src="images/prodimg.png" alt=""  className=" mx-auto rounded-lg"/> */}
    </div>
    <div>
      <h2 className=" text-black font-sfpro font-medium text-xl mb-1">{title}</h2>
      <p className=" text-[#979797] text-sm font-sfpro mb-1">{description}</p>
      {/* <div className=" flex justify-between items-center mb-1">
        <h3 className="text-[#00AEF3] font-bold text-xl font-sfpro"> ₹ {price}</h3>
        <p className=" text-[#979797] text-sm font-sfpro ">with GST ₹ {gstPrice}</p>
      </div> */}

      <div className=" flex justify-between items-center">
        <h3 className="text-[#979797] text-sm font-sfpro font-normal">MRP Price inc GST</h3>
        <p className="text-[#000] text-sm font-sfpro font-semibold" >₹ {TotalPrice}  </p>
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
            title="Regular Mattress"
            iconSrc='images/prod/prod4.jpg'
            description="Single Regular Mattress + One Pillow (80+20 Magnets)"
            price="950.00"
            gstPrice=" 950.00"
            TotalPrice="7,500.00"
          />

          <Cards
            title="Regular Mattress"
            iconSrc='images/prod/prod3.jpg'
            description="Single Regular Mattress + One Pillow (80+20 Magnets)"
            price="950.00"
            gstPrice=" 950.00"
            TotalPrice="7,500.00"
          />

          <Cards
            title="Regular Mattress"
            iconSrc='images/prod/prod2.jpg'
            description="Single Regular Mattress + One Pillow (80+20 Magnets)"
            price="950.00"
            gstPrice=" 950.00"
            TotalPrice="7,500.00"
          />

          <Cards
            title="Regular Mattress"
            iconSrc='images/prod/prod1.jpg'
            description="Single Regular Mattress + One Pillow (80+20 Magnets)"
            price="950.00"
            gstPrice=" 950.00"
            TotalPrice="7,500.00"
          />
        </div>
        <div className=" block sm:hidden"> 
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
            title="Regular Mattress"
            iconSrc='images/prod/prod4.jpg'
            description="Single Regular Mattress + One Pillow (80+20 Magnets)"
            price="€950.00"
            gstPrice=" €950.00"
            TotalPrice="7,500.00"
          />
            </SwiperSlide>
            <SwiperSlide>
            <Cards
            title="Regular Mattress"
            iconSrc='images/prod/prod3.jpg'
            description="Single Regular Mattress + One Pillow (80+20 Magnets)"
            price="€950.00"
            gstPrice=" €950.00"
            TotalPrice="7,500.00"
          />
            </SwiperSlide>
            <SwiperSlide>
            <Cards
            title="Regular Mattress"
            iconSrc='images/prod/prod2.jpg'
            description="Single Regular Mattress + One Pillow (80+20 Magnets)"
            price="€950.00"
            gstPrice=" €950.00"
            TotalPrice="7,500.00"
          />
            </SwiperSlide>
            <SwiperSlide>
            <Cards
            title="Regular Mattress"
            iconSrc='images/prod/prod1.jpg'
            description="Single Regular Mattress + One Pillow (80+20 Magnets)"
            price="€950.00"
            gstPrice=" €950.00"
            TotalPrice="7,500.00"
          />
            </SwiperSlide>
          </Swiper>
        </div>


        <div className=" hidden sm:flex justify-between items-center gap-4 py-4">
          <Cards
            title="Regular Mattress"
            iconSrc='images/prod/prod5.jpg'
            description="Single Regular Mattress + One Pillow (80+20 Magnets)"
            price="€950.00"
            gstPrice=" €950.00"
            TotalPrice="7,500.00"
          />

          <Cards
            title="Regular Mattress"
            iconSrc='images/prod/prod6.jpg'
            description="Single Regular Mattress + One Pillow (80+20 Magnets)"
            price="€950.00"
            gstPrice=" €950.00"
            TotalPrice="7,500.00"
          />

          <Cards
            title="Regular Mattress"
            iconSrc='images/prod/prod7.jpg'
            description="Single Regular Mattress + One Pillow (80+20 Magnets)"
            price="€950.00"
            gstPrice=" €950.00"
            TotalPrice="7,500.00"
          />

          <Cards
            title="Regular Mattress"
            iconSrc='images/prod/prod8.jpg'
            description="Single Regular Mattress + One Pillow (80+20 Magnets)"
            price="€950.00"
            gstPrice=" €950.00"
            TotalPrice="7,500.00"
          />
        </div>
      </div>
    </section>
  );
}

export default Products;

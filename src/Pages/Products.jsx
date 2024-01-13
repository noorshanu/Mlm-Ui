import React from "react";

import MenuBar from "../components/MenuBar";
import SearchMenu from "../components/SearchMenu";
import Footer from "../components/Footer";
import Disclaimer from "../components/Disclaimer";



function Products() {
  return (
    <>
    <SearchMenu />
    <MenuBar />

    <div className="container-wrapper" >

    <div className=" text-center ">
          <h1 className="text-[24px] sm:text-[50px] font-bold text-black text-center mt-2 ">
            Our Products
          </h1>
          <div className=" bg-[#00aef3] h-[4px] w-[200px] mx-auto mb-2"></div>
        </div>

    </div>

    <Footer />
      <Disclaimer />
    </>
  )
}

export default Products
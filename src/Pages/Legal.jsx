import React from 'react'
import MenuBar from "../components/MenuBar";
import SearchMenu from "../components/SearchMenu";
import Footer from "../components/Footer";
import Disclaimer from "../components/Disclaimer";


function Legal() {
  return (
    <section>
            <SearchMenu />
      <MenuBar />
         <div className="container-wrapper py-8">
         <div className=" text-center ">
          <h1 className="text-[24px] sm:text-[50px] font-bold text-black text-center mt-2  ">
           Legal Documents
          </h1>
          <div className=" bg-[#00aef3] h-[4px] w-[200px] mx-auto mb-8"></div>
        </div>

            <div className=' flex flex-col sm:flex-row items-center justify-between gap-4 '>
                <img src="images/coi.jpg" alt="" className='w-full h-auto  sm:h-[800px] border rounded-md p-2' />
                <img src="images/pan.jpeg" alt=""  className='w-full h-auto sm:h-[300px]  p-2' />

            </div>
         </div>

         <Footer />
      <Disclaimer />
    </section>
  )
}

export default Legal
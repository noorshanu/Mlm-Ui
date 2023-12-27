import React from 'react'
import { FaXTwitter,FaInstagram ,FaYoutube} from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

function SearchMenu() {
  return (
   <section className='bg-[#00AEF3]'>
    <div className='container-wrapper flex justify-end items-center py-1'>
     
        <div className=" flex items-center gap-6">
          <div className=" flex items-center gap-3">
            <a
              href="/"
              className=" text-sm font-sfpro font-normal uppercase  text-[#000000]"
            >
              WHO WE ARE /
            </a>
            <a
              href="/"
              className=" text-sm font-sfpro font-normal uppercase  text-[#000000]"
            >
              Certificates /
            </a>
            <a
              href="/"
              className=" text-sm font-sfpro font-normal uppercase  text-[#000000]"
            >
              Patent
            </a>
          </div>

          <div className=" flex items-center gap-2">
            <a href="/" className="  text-black text-lg hover:text-[#000000]">
              <FaXTwitter />
            </a>
            <a href="/" className="  text-black text-lg hover:text-[#000000]">
            <FaFacebook />
            </a>
            <a href="/" className="  text-black text-lg hover:text-[#000000]"> 
            <FaInstagram />
            </a>
            <a href="/" className="  text-black text-lg hover:text-[#000000]">
            <FaYoutube />
            </a>
          </div>
        </div>
    </div>
   </section>
  )
}

export default SearchMenu
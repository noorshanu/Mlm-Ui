import React from 'react'
import { FaXTwitter,FaInstagram ,FaYoutube} from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

function SearchMenu() {
  return (
   <section className='bg-[#00AEF3]'>
    <div className='container-wrapper flex justify-center sm:justify-end items-center py-1'>
     
        <div className=" flex flex-col sm:flex-row items-center gap-6">
          <div className=" hidden sm:flex items-center gap-3 ">
            <a
              href="/privacy-policy" target='_blank'
              className=" text-xs sm:text-sm font-sfpro font-normal uppercase  text-[#000000]"
            >
              privicy&Policy 
            </a>
            <a
              href="/terms-conditions" target='_blank'
              className=" text-xs sm:text-sm font-sfpro font-normal uppercase  text-[#000000]"
            >
              Terms 
            </a>
            <a
              href="/grievance-cell"
              className=" text-xs sm:text-sm font-sfpro font-normal uppercase  text-[#000000]"
            >
           Grievance cell 
            </a>
            <a
              href="/grievance-redressal"
              className=" text-xs sm:text-sm font-sfpro font-normal uppercase  text-[#000000]"
            >
           Grievance Redressal 
            </a>
          </div>

          <div className=" flex items-center gap-2   sm:hidden">
            {/* <a href="/" className="  text-black text-lg hover:text-[#000000]">
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
            </a> */}

            <a href="https://unifywellness.in/Web/aspx/member-login.aspx" target='_blank' className=' underline'>
              Login 
            </a>
            <a href="https://unifywellness.in/Web/aspx/SignUp.aspx" className=' underline ' target='_blank'>
              Signup
            </a>
          </div>
        </div>
    </div>
   </section>
  )
}

export default SearchMenu
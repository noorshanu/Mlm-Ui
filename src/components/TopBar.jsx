import React from "react";
import { FaXTwitter,FaInstagram ,FaYoutube} from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

function TopBar() {
  return (
    <section className="top-bg ">
      <div className="flex justify-between items-center container-wrapper">
        <div>
          <p className=" text-white max-w-md text-base font-normal">
            Unify Wellness, a distinguished manufacturer, brings you the
            excellence of patented 3D magnetotherapy.
          </p>
        </div>
        <div className=" flex items-center gap-6">
          <div className=" flex items-center gap-3">
            <a
              href="/"
              className=" text-sm font-sfpro font-normal uppercase text-white hover:text-[#000000]"
            >
              WHO WE ARE /
            </a>
            <a
              href="/"
              className=" text-sm font-sfpro font-normal uppercase text-white hover:text-[#000000]"
            >
              Certificates /
            </a>
            <a
              href="/"
              className=" text-sm font-sfpro font-normal uppercase text-white hover:text-[#000000]"
            >
              Patent
            </a>
          </div>

          <div className=" flex items-center gap-2">
            <a href="/" className=" text-white text-lg hover:text-[#000000]">
              <FaXTwitter />
            </a>
            <a href="/" className=" text-white text-lg hover:text-[#000000]">
            <FaFacebook />
            </a>
            <a href="/" className=" text-white text-lg hover:text-[#000000]"> 
            <FaInstagram />
            </a>
            <a href="/" className=" text-white text-lg hover:text-[#000000]">
            <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopBar;

import React from "react";
import { FaXTwitter,FaInstagram ,FaYoutube} from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <section className="bg-[#F0FCFF] mt-8 py-6 sm:py-16">
      <div className="container-wrapper mx-auto">
        <div className=" flex justify-between gap-28">
          <div>
            <img src="images/logo.png" alt="" className=" mb-3"/>

            <p className=" max-w-sm mb-2 text-xs font-normal">
              We merge the latest in wellness technology with everyday
              usability. Our mission is to provide products that seamlessly
              integrate optimum health benefits into your daily life. Discover a
              holistic approach to well-being with Unify Wellness – your trusted
              partner on the path to a healthier, happier life.
            </p>
            <div className=" flex items-center gap-2 pt-2">
            <a href="/" className="  text-lg text-[#000000]">
              <FaXTwitter />
            </a>
            <a href="/" className="  text-lg text-[#000000]">
            <FaFacebook />
            </a>
            <a href="/" className="  text-lg text-[#000000]"> 
            <FaInstagram />
            </a>
            <a href="/" className=" text-lg text-[#000000]">
            <FaYoutube />
            </a>
          </div>
          </div>

          <div>
            <h2 className=" text-xl text-black font-bold mb-4">Magnetotherapy Biomag</h2>

           <div className=" flex flex-col gap-3 items-start justify-start">
           <a href="/" className=" text-lg font-normal ">Favourite sets</a>
            <a href="/" className=" text-lg font-normal ">Applicators</a>
            <a href="/" className=" text-lg font-normal ">Devices</a>
            <a href="/" className=" text-lg font-normal ">Accessories</a>
            <a href="/" className=" text-lg font-normal ">Certificates</a>
            <a href="/" className=" text-lg font-normal ">Warranty extension 2+1</a>
            <a href="/" className=" text-lg font-normal ">All about magnetotherapy</a>
            <a href="/" className=" text-lg font-normal ">3D pulsed magnetotherapy</a>
           </div>

           
          </div>

          <div>
            <h2 className=" text-xl text-black font-bold mb-4">Encyclopedia</h2>

           <div className=" flex flex-col gap-3 items-start justify-start">
           <a href="/" className=" text-lg font-normal ">Arthrosis of the joints</a>
            <a href="/" className=" text-lg font-normal ">Carpal tunnel syndrome</a>
            <a href="/" className=" text-lg font-normal ">Devices</a>
            <a href="/" className=" text-lg font-normal ">Accessories</a>
            <a href="/" className=" text-lg font-normal ">Certificates</a>
            <a href="/" className=" text-lg font-normal ">Warranty extension 2+1</a>
            <a href="/" className=" text-lg font-normal ">All about magnetotherapy</a>
            <a href="/" className=" text-lg font-normal ">3D pulsed magnetotherapy</a>
           </div>

           
          </div>


          <div>
            <h2 className=" text-xl text-black font-bold mb-4">More information</h2>

           <div className=" flex flex-col gap-3 items-start justify-start">
           <a href="/" className=" text-lg font-normal ">Contact</a>
            <a href="/" className=" text-lg font-normal ">News</a>
            <a href="/" className=" text-lg font-normal ">Devices</a>
            <a href="/" className=" text-lg font-normal ">Accessories</a>
            <a href="/" className=" text-lg font-normal ">Certificates</a>
            <a href="/" className=" text-lg font-normal ">Warranty extension 2+1</a>
            <a href="/" className=" text-lg font-normal ">All about magnetotherapy</a>
            <a href="/" className=" text-lg font-normal ">3D pulsed magnetotherapy</a>
           </div>

           
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;

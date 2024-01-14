import React from "react";
import { FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <section className="bg-[#F0FCFF] mt-8 py-6 sm:py-16">
      <div className="container-wrapper mx-auto">
        <div className=" flex flex-col sm:flex-row justify-between gap-28">
          <div>
            <img src="images/logo.png" alt="" className=" mb-3" />

            <p className=" max-w-full pr-4 sm:pr-0 sm:max-w-sm mb-2 text-xs font-normal">
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
            <h2 className=" text-xl text-black font-bold mb-4">Products</h2>

            <div className=" flex flex-col gap-3 items-start justify-start">
              <a href="/" className=" text-lg font-normal ">
                Biomagnetic Mattress
              </a>
              <a href="/" className=" text-lg font-normal ">
                Foot Massager
              </a>
              <a href="/" className=" text-lg font-normal ">
                Bracelet
              </a>

              <a href="/" className=" text-lg font-normal ">
                Water pad
              </a>
              <a href="/" className=" text-lg font-normal ">
                Knee Cap
              </a>

              <a href="/" className=" text-lg font-normal ">
                Neck Massager
              </a>
            </div>
          </div>

          <div>
            <h2 className=" text-xl text-black font-bold mb-4">
              Important Links
            </h2>

            <div className=" flex flex-col gap-3 items-start justify-start">
              <a href="/" className=" text-lg font-normal ">
                Home
              </a>
              <a href="/" className=" text-lg font-normal ">
                About us
              </a>
              <a href="/" className=" text-lg font-normal ">
                Gallery
              </a>
              <a href="/" className=" text-lg font-normal ">
                Team
              </a>
              <a href="/" className=" text-lg font-normal ">
                Rank Achievers
              </a>
            </div>
          </div>

          <div>
            <h2 className=" text-xl text-black font-bold mb-4">
              More information
            </h2>

            <div className=" flex flex-col gap-3 items-start justify-start">
              <a href="/contact-us" className=" text-lg font-normal ">
                Contact us
              </a>
              <a href="/grievance-cell" className=" text-lg font-normal ">
                Grievance Cell
              </a>
              <a href="/grievance-redressal" className=" text-lg font-normal ">
                Grievance Redressal
              </a>
              <a href="/privacy-policy" className=" text-lg font-normal ">
                Privacy Policy
              </a>
              <a href="/legal" className=" text-lg font-normal ">
                Legal
              </a>
              <a href="/terms-conditions" className=" text-lg font-normal ">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;

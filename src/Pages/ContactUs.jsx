import React from "react";
import MenuBar from "../components/MenuBar";
import SearchMenu from "../components/SearchMenu";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Disclaimer from "../components/Disclaimer";
import { FaXTwitter,FaInstagram ,FaYoutube} from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";


function ContactUs() {
  return (
    <section>
      <SearchMenu />
      <MenuBar />
      <div className="container-wrapper py-8">
        <div className=" text-center ">
          <h1 className="text-[24px] sm:text-[50px] font-bold text-black text-center mt-2  ">
            Contact us
          </h1>
          <div className=" bg-[#00aef3] h-[4px] w-[200px] mx-auto mb-8"></div>
        </div>

        <div className=" flex justify-between flex-col sm:flex-row  ">
          <div className=" max-w-2xl mx-auto mt-4 sm:mt-12">
            <div>
              <h1 className=" text-4xl font-bold pb-4 " >Company Address</h1>
            </div>
            <h2 className=" text-lg py-2">
              <strong>Address : </strong>  SA - 1/17, C-1, 3rd Floor, Dosa Street building, <br /> Near
              Kali Mata Mandir, Pandeypur,Varanasi Varanasi (U.P) India
            </h2>

            <p className=" text-lg py-2"> <strong>Phone : </strong>  +91-9044929528</p>
            <p className=" text-lg py-2"><strong>Email :</strong> info@rootvedawellness.com</p>

            <div className=" flex items-center gap-2 py-4">
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

          <div>
            <ContactForm />
          </div>
        </div>
      </div>

      <Footer />
      <Disclaimer />
    </section>
  );
}

export default ContactUs;
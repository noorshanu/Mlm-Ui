import React from "react";
import MenuBar from "../components/MenuBar";
import SearchMenu from "../components/SearchMenu";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Disclaimer from "../components/Disclaimer";

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

        <div className=" flex justify-evenly flex-col sm:flex-row  ">
          <div className=" max-w-xl">
            <div>
              <h1>Company Address</h1>
            </div>
            <h2>
              Address: SA - 1/17, C-1, 3rd Floor, Dosa Street building, Near
              Kali Mata Mandir, Pandeypur,Varanasi Varanasi (U.P) India
            </h2>

            <p>Phone: +91-9044929528</p>
            <p>Email: info@rootvedawellness.com</p>
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

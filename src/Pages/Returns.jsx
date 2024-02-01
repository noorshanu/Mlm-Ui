import React from "react";

import MenuBar from "../components/MenuBar";
import SearchMenu from "../components/SearchMenu";
import Footer from "../components/Footer";
import Disclaimer from "../components/Disclaimer";


function Returns() {
  return (
  <>
   <SearchMenu />
      <MenuBar />

      <section className="  bg-slate-200 py-8">
        <div className="container-wrapper">
          <div>
            <h1 className=" text-2xl font-bold pb-2">BUY BACK RETURN POLICY</h1>
          </div>

          <div>
            <h2 className="text-2xl font-bold pb-2">
            Product Return & Refund Policy
            </h2>
            <p className=" pb-2">
              Please read the following terms and conditions very carefully as
              your use of service is subject to your acceptance of and
              compliance with the following terms and conditions ("Terms").{" "}
              <br />
              By subscribing to or using any of our services you agree that you
              have read, understood and are bound by the Terms, regardless of
              how you subscribe to or use the services..
              <br />
              In these Terms, references to "you", "User" shall mean the end
              user accessing the website, its contents and using the services
              offered through the website. "We", "us" and "our" shall mean Unify
              Wellness Pvt Ltd (hereinafter referred as ‘Unify Wellness Pvt
              Ltd’), and its authorized affiliates.
            </p>

            <h2 className="text-2xl font-bold pb-2">Introduction:</h2>

            <p className=" flex gap-2 items-center mb-2">
              www.unifyhealthwellness.co.in website ("Website") is an Internet
              based content and e-commerce portal owned and operated by Unify
              Wellness Pvt Ltd, registered as a Ltd company incorporated under
              Companies Act, No.1 of 1956 of India.
            </p>
            <p className=" flex gap-2 items-center mb-2">
              Use of Website is offered to you on acceptance without
              modification of all the terms, conditions and notices contained in
              these Terms, as may be posted on the Website from time to time.
              unify Wellness at its sole discretion reserves the right not to
              accept a user from registering on the website without assigning
              any reason thereof.
            </p>

            <h2 className=" py-4 text-2xl font-bold">
            Reference Notes
            </h2>

            <p className=" flex gap-2 items-center mb-2">
              Upon completing the registration processthe user will receive a
              password and account designation. The user is responsible for
              maintaining the confidentiality of the password and account, and
              is fully responsible for all activities that occur under the
              user’s password or account. The user agrees to
              <br />
              Immediately notify at director@unifywellness.co.in of any
              unauthorized use of your password or account or any other breach
              of security, and
            </p>

            <p className=" flex gap-2 items-center mb-2">
              Ensure that the user exits from the logged in account at the end
              of each session. unify Wellness cannot and will not be liable
              for any loss or damage arising from the user’s failure to comply
              with this section.
            </p>

            <h2 className=" py-4 text-2xl font-bold">Cooling Off Period</h2>
            <p className=" flex gap-2 items-center mb-2">
              Unify Wellness provides a number of internet based services
              through the website (all services collectively understood as
              "Service"). One such service enables users to order products of
              unify Wellness such as home care, health care, personal care,
              food & beverages, skin care products, etc., (collectively,
              "Products"). Upon placing order, unify Wellness shall arrange
              shipment of the product(s)upon successful realisation of its
              payment for the Services.
            </p>

           
            <h2 className=" py-4 text-2xl font-bold">8. Contact details:</h2>

            <p className=" flex gap-2 items-center mb-2">
              If you have any questions about this privacy statement, the
              practices of this site or your dealings with this website, you can
              contact us.
            </p>
         
        <p>Email ID: director@unifywellness.com</p>
        <p>Mobile Number:+91 88519 24626 </p>
        <p>
          Address: 55,2nd floor, Lane 2 , westend marg ,saidullajab, near saket
          metro station,new delhi ,110030
        </p>
          </div>
        </div>
      </section>

      <Footer />
      <Disclaimer />
  </>
  )
}

export default Returns
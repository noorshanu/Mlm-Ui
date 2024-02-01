import React from "react";

import MenuBar from "../components/MenuBar";
import SearchMenu from "../components/SearchMenu";
import Footer from "../components/Footer";
import Disclaimer from "../components/Disclaimer";


function Terms() {
  return (
    <>
      <SearchMenu />
      <MenuBar />

      <section className="  bg-slate-200 py-8">
        <div className="container-wrapper">
          <div>
            <h1 className=" text-2xl font-bold pb-2">TERMS & CONDITIONS</h1>
          </div>

          <div>
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
              www.unifyhealthwellness.com website ("Website") is an Internet
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
              User Account, Password and Security:
            </h2>

            <p className=" flex gap-2 items-center mb-2">
              Upon completing the registration processthe user will receive a
              password and account designation. The user is responsible for
              maintaining the confidentiality of the password and account, and
              is fully responsible for all activities that occur under the
              user’s password or account. The user agrees to
              <br />
              Immediately notify at info@unifywellness.com of any
              unauthorized use of your password or account or any other breach
              of security, and
            </p>

            <p className=" flex gap-2 items-center mb-2">
              Ensure that the user exits from the logged in account at the end
              of each session. unify Wellness cannot and will not be liable
              for any loss or damage arising from the user’s failure to comply
              with this section.
            </p>

            <h2 className=" py-4 text-2xl font-bold">Services:</h2>
            <p className=" flex gap-2 items-center mb-2">
              unify Wellness provides a number of internet based services
              through the website (all services collectively understood as
              "Service"). One such service enables users to order products of
              unify Wellness such as home care, health care, personal care,
              food & beverages, skin care products, etc., (collectively,
              "Products"). Upon placing order, unify Wellness shall arrange
              shipment of the product(s)upon successful realisation of its
              payment for the Services.
            </p>

            <p className=" flex gap-2 items-center mb-2">
              We identify and use your IP address to help diagnose problems with
              our server, and to administer our Website. <br />
              Your IP address is also used to help identify you and to gather
              broad demographic information.
            </p>

            <h2 className=" py-4 text-2xl font-bold">3. Cookies:</h2>
            <p className=" flex gap-2 items-center mb-2">
              A "cookie" is a small piece of information stored by a web server
              on a web browser so it can be later read back from that browser.
              Cookies are useful for enabling the browser to remember
              information specific to a given user. We place both permanent and
              temporary cookies in your computer's hard drive.The cookies do not
              contain any of your personally identifiable information.
            </p>

            <h2 className=" py-4 text-2xl font-bold">
              4. Sharing of personal information:
            </h2>

            <p className=" flex gap-2 items-center mb-2">
              We may disclose personal information if required to do so by law
              or in the good faith belief that such disclosure is reasonably
              necessary to respond to subpoenas, court orders, or other legal
              process.We may disclose personal information to law enforcement
              offices, third party rights owners, or others in the good faith
              belief that such disclosure is reasonably necessary to: enforce
              our Terms or Privacy Policy.
            </p>

            <p className=" flex gap-2 items-center mb-2">
              We and our affiliates will share / sell some or all of your
              personal information with another business entity should we (or
              our assets) plan to merge with, or be acquired by that business
              entity, or re-organization, amalgamation, restructuring of
              business. Should such a transaction occur that other business
              entity (or the new combined entity) will be required to follow
              this privacy policy with respect to your personal information.
            </p>

            <h2 className=" py-4 text-2xl font-bold">
              5. Links to Other Sites
            </h2>

            <p className=" flex gap-2 items-center mb-2">
              Our Website may link to other websites that may collect personally
              identifiable information about you.
            </p>

            <h2 className=" py-4 text-2xl font-bold">
              6. Security Precautions:
            </h2>
            <p className=" flex gap-2 items-center mb-2">
              Our Website has stringent security measures as applicable to
              protect the loss, misuse, and alteration of the information under
              our control. Once your information is in our possession we adhere
              to strict security guidelines, protecting it against unauthorized
              access.
            </p>

            <h2 className=" py-4 text-2xl font-bold">7. Your Consent:</h2>
            <p className=" flex gap-2 items-center mb-2">
              By using the Website and/ or by providing your information, you
              consent to the collection and use of the information you disclose
              on the Website in accordance with this Privacy Policy, including
              but not limited to your consent for sharing your information as
              per this privacy policy.
            </p>

            <p>
              If we decide to change our privacy policy, we will post those
              changes on this page so that you are always aware of what
              information we collect, how we use it, and under what
              circumstances we disclose it
            </p>
            <h2 className=" py-4 text-2xl font-bold">8. Contact details:</h2>

            <p className=" flex gap-2 items-center mb-2">
              If you have any questions about this privacy statement, the
              practices of this site or your dealings with this website, you can
              contact us.
            </p>
       
        <p>Email ID: director@unifywellness.co.in</p>
        <p>Mobile Number:+91 8851924626 </p>
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
  );
}

export default Terms;

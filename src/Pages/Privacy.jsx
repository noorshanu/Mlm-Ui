import React from "react";
import { FaHandPointRight } from "react-icons/fa";
import MenuBar from "../components/MenuBar";
import SearchMenu from "../components/SearchMenu";
import Footer from "../components/Footer";
import Disclaimer from "../components/Disclaimer";

function Privacy() {
  return (
    <>
      <SearchMenu />
      <MenuBar />

      <section className="  bg-slate-200 py-8">
        <div className="container-wrapper">
          <div>
            <h1 className=" text-2xl font-bold pb-2">PRIVACY POLICY</h1>
          </div>

          <div>
            <p className=" pb-2">
              At Rootveda Wellness, we value the trust you place in us.That's
              why we insist upon the highest standards for secure transactions
              and customer information privacy. Please read the following
              statement to learn about our information gathering and
              dissemination practices
            </p>

            <h2 className="text-2xl font-bold pb-2">Note:</h2>

            <p className=" flex gap-2 items-center mb-2">
              <FaHandPointRight /> Our privacy policy is subject to change at
              any time without notice. To make sure you are aware of any
              changes, please review this policy periodically.
            </p>
            <p className=" flex gap-2 items-center mb-2">
              <FaHandPointRight /> Our privacy policy is subject to change at
              any time without notice. To make sure you are aware of any
              changes, please review this policy periodically.
            </p>
            <p className=" flex gap-2 items-center">
              <FaHandPointRight /> Our privacy policy is subject to change at
              any time without notice. To make sure you are aware of any
              changes, please review this policy periodically.
            </p>
            <p className=" flex gap-2 items-center">
              <FaHandPointRight /> Our privacy policy is subject to change at
              any time without notice. To make sure you are aware of any
              changes, please review this policy periodically.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <Disclaimer />
    </>
  );
}

export default Privacy;

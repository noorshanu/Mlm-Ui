import React from "react";
// import Button from "./Button";
import { FaTimes } from "react-icons/fa";

export default function WelcomePopup({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white dark:bg-woodsmoke-950 p-2 max-w-4xl rounded">
            <div className="flex justify-end">
              {/* <button onClick={onClose} className="  bg-[#00aef3] rounded-full p-2 mb-2">
                <FaTimes className="text-black" />
              </button> */}
            </div>

            <div className="  ">

              <div className=" box-s border rounded-md">
              <div className=" px-8 py-3">
              <h2 className=" text-center text-3xl font-bold my-5 capitalize text-[#00aef3]">
              ⚠️  PLEASE READ CAREFULLY  ⚠️
            </h2>
            <p className="text-base ">
              {" "}
             <strong>Unify Wellness Pvt. Ltd. </strong>  is an Indian Direct Selling Company.
              The company sells its products through the Direct selling method
              (to the Direct Seller).
            </p>
            <p className=" py-2 text-base font-medium">
            <strong> 1. </strong>   Any Indian citizen who is above 18 years of age can apply to
              become a Direct seller of the Company's products.
            </p>
            <p className="py-2 text-base font-medium">
            <strong>2. </strong>   The company does not charge any fee for distributorship.
            </p>

            <p className="py-2 text-base font-medium">
             <strong> 3.</strong>  Neither the company gives you any kind of job nor you become the
              agent of the company. You don't even get any kind of fixed salary.
              You start a Business simply by becoming an Independent Distributor
              of the Company's products. You can earn money by selling these
              products as per the Business Plan of the company.
            </p>
            <p className="py-2 text-base font-medium">
             <strong>4.</strong> The relationship between you and the Company is that of an
              Independent principal to Principal contractor.
            </p>

            <p className="py-2 text-base font-medium">
              <strong>5. </strong> You can buy the product only from the Company's Authorised
              Center (Franchisee, Branch, Mini Franchise, Galwaykart, and
              Virtual Mini Franchise). You can not buy any products without a
              Bill/ Invoice. If you buy a product from an Authorised Center, the
              company notifies you by SMS on your registered mobile
            </p>

            <p className="py-2 text-base font-medium">
             <strong>6.</strong> Refund Policy – You can cancel your Distributorship only as per
              the refund policy within 20 days of becoming a Galway Distributor
              (Direct Seller) . You can get your full money back by returning
              all the products.
            </p>

            <button onClick={onClose} className="w-full btn-main space-x-[0.6em] py-2  text-base font-bold uppercase">
              i Understand
            </button>
           

            </div>

            <div className=" bg-[#00aef3] px-8 py-3 br-d ">
              <h2 className=" font-semibold text-center">
                Company's distributorship is provided at no cost! If any person
                asks you for any kind of fee in the name of the company or in
                the name of someone else, then you should not give it at all. If
                you pay any such fee, you will be solely responsible for it.
              </h2>
            </div>

              </div>






         

       
              </div>
      
          </div>
        </div>
      )}
    </>
  );
}

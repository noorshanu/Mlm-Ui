import React from "react";

function Vision() {
  return (
    <section className="bg-[#F0FCFF]  py-16">
      <div className="container-wrapper">
        <div>
          <h1>
            <h1 className=" text-black text-[24px] sm:text-[50px] font-bold text-center  ">
              Our Commitment to Health and Sustainability
            </h1>
          </h1>

          <p className=" text-[#3D4B69] text-center text-base font-normal mx-auto max-w-2xl my-2 ">
            At Unify Wellness Pvt Ltd, we believe in promoting health in a way
            that also respects our planet. We are committed to sustainable
            practices in our production and business operations, ensuring that
            our products are not only good for you but also for the environment.
          </p>
        </div>

        <div className=" flex flex-col sm:flex-row items-center justify-evenly gap-4 my-8">
          <img src="images/comp1.png" alt="" />
          <img src="images/comp2.png" alt="" />
          <img src="images/comp3.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Vision;

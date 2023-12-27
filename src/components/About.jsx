import React from "react";

const BenefitSection = ({ iconSrc, title, description }) => (
  <div className="flex items-center gap-6 py-4">
    <img src={iconSrc} alt="" />
    <div>
      <h2 className=" text-[#0076FD] font-medium text-[30px] ">{title}</h2>
      <p className="max-w-[500px] text-lg text-black font-normal">{description}</p>
    </div>
  </div>
);

function About() {
  return (
    <section className="py-4 sm:py-14 relative">
      <img src="images/part2.png" alt="" className=" absolute top-20 h-[570px]" />

      <div className="container-wrapper relative z-20">
        <div className="flex justify-between items-center flex-col sm:flex-row">
          <img src="images/part1.png" alt="" className=" h-[600px]" />
          <div> 
            <h1 className=" text-black text-[50px] font-bold my-4 ">Why Bio Magnetic Therapy?</h1>

            <BenefitSection
              iconSrc="images/icon1.png"
              title="Holistic Health Benefits :"
              description="Discover the natural healing powers of magnetic fields in improving circulation, reducing inflammation, and enhancing overall well-being."
            />

            <BenefitSection
              iconSrc="images/icon2.png"
              title="Innovative Technology:"
              description="Our products are at the forefront of magnetic therapy research and development."
            />

            <BenefitSection
              iconSrc="images/icon3.png"
              title="Quality Assured:"
              description=" Each product is carefully designed and tested to ensure the highest quality and efficacy."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
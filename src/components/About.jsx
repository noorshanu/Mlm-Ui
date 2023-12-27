import React from "react";

const BenefitSection = ({ iconSrc, title, description }) => (
  <div className="flex items-center gap-4 py-4">
    <img src={iconSrc} alt="" />
    <div>
      <h2>{title}</h2>
      <p className="max-w-[500px]">{description}</p>
    </div>
  </div>
);

function About() {
  return (
    <section className="py-4 sm:py-14">
      <div className="container-wrapper">
        <div className="flex justify-between items-center flex-col sm:flex-row">
          <img src="images/part1.png" alt="" className=" h-[600px]" />
          <div>
            <h1 className=" text-black text-[50px] font-bold ">Why Bio Magnetic Therapy?</h1>

            <BenefitSection
              iconSrc="images/icon1.png"
              title="Holistic Health Benefits"
              description="Discover the natural healing powers of magnetic fields in improving circulation, reducing inflammation, and enhancing overall well-being."
            />

            <BenefitSection
              iconSrc="images/icon1.png"
              title="Holistic Health Benefits"
              description="Discover the natural healing powers of magnetic fields in improving circulation, reducing inflammation, and enhancing overall well-being."
            />

            <BenefitSection
              iconSrc="images/icon1.png"
              title="Holistic Health Benefits"
              description="Discover the natural healing powers of magnetic fields in improving circulation, reducing inflammation, and enhancing overall well-being."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
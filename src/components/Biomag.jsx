import React from "react";

function Biomag() {
  return (
    <section className=" py-4 sm:py-14 bg-[#F0FCFF]" >
      <div className="container-wrapper">
        <div>
          <h1 className="text-[24px] sm:text-[50px] font-bold text-black text-center ">
            Effects of 3D pulsed magnetotherapy Biomag
          </h1>

          <p className=" text-[#3D4B69] text-center text-base font-normal ">
            The effects of Biomag 3D pulsed magnet therapy are divided into six
            basic therapeutic effects. These therapeutic effects can positively
            influence the symptoms of a number of health problems and thus
            effectively assist in their treatment.
          </p>
        </div>
        <div>
            <img src="images/biom.png" alt="" className="mx-auto" />
        </div>
      </div>
    </section>
  );
}

export default Biomag;

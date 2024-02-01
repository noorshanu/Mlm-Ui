import MenuBar from "../components/MenuBar";
import SearchMenu from "../components/SearchMenu";
import Footer from "../components/Footer";
import Disclaimer from "../components/Disclaimer";
import CtaAbout from "../components/CtaAbout";

function About() {
  return (
    <>
      <SearchMenu />
      <MenuBar />
      <div className="container-wrapper">
        <div>
          <h1 className="text-[24px] sm:text-[40px] font-bold text-black text-center mt-2 ">
            About Us
          </h1>
          <div className=" bg-[#00aef3] h-[4px] w-[200px] mx-auto mb-2"></div>
        </div>
        <div className=" flex justify-between flex-col sm:flex-row gap-4 sm:gap-[6rem] my-4 sm:my-[6rem] ">
        <img
            src="images/comp2.png"
            alt=""
            className=" h-[350px] mr-auto border p-2 rounded-md"
          />
        <div className="  max-w-4xl mx-auto my-[4rem] flex flex-col justify-center gap-6">
          <p className=" text-xl">
            At Unify Wellness, we believe that the journey to optimal health is
            a path best traveled using the gifts of nature, aided by the
            advancements of science. As a pioneering healthcare product company,
          </p>
          <p className=" text-xl">
            we dedicate ourselves to discovering, developing, and delivering
            innovative and effective wellness solutions. Our focus is on
            biomagnetic and a range of other healthcare products designed to
            enhance your wellbeing.
          </p>
        </div>
        </div>


        <div className=" flex justify-between flex-col sm:flex-row gap-4 sm:gap-[6rem] my-4 sm:my-[6rem] ">
          <div>
            <div>
              <h1 className="text-[24px] sm:text-[30px] font-bold text-black  mt-2 ">
                Our Vision
              </h1>
              <div className=" bg-[#00aef3] h-[4px] w-[150px]  mb-2"></div>
            </div>
            <p className=" max-w-3xl text-xl mt-[2rem]">
              Looking to the future, Unify Wellness aims to be a beacon of hope
              and health. We envision a world where wellness is accessible to
              all, and our daily efforts are dedicated to making this vision a
              reality. We are committed to being your trusted partner in
              wellness, providing products and insights that empower you to live
              your healthiest life
            </p>
          </div>

          <img
            src="images/vis.jpg"
            alt=""
            className=" h-[350px] mr-auto border p-2 rounded-md"
          />
        </div>

        <div className=" flex justify-between flex-col-reverse sm:flex-row gap-4 sm:gap-[6rem] my-4 sm:my-[6rem] ">
          <img
            src="images/miss.jpg"
            alt=""
            className=" h-[350px] mr-auto border p-2 rounded-md "
          />

          <div>
            <div>
              <h1 className="text-[24px] sm:text-[30px] font-bold text-black  mt-2 ">
                Our Mission
              </h1>
              <div className=" bg-[#00aef3] h-[4px] w-[150px]  mb-2"></div>
            </div>
            <p className=" max-w-4xl text-xl mt-[2rem]">
              Our mission at Unify Wellness is simple yet profound – to unify
              traditional wisdom with modern technology in the pursuit of
              holistic health. We strive to bring forth a range of products that
              not only support physical wellness but also promote a harmonious
              balance between mind, body, and spirit.
            </p>
          </div>
        </div>
        <CtaAbout/>
      </div>
      <Footer />
      <Disclaimer />
    </>
  );
}

export default About;

import MenuBar from "../components/MenuBar";
import SearchMenu from "../components/SearchMenu";
import Footer from "../components/Footer";
import Disclaimer from "../components/Disclaimer";

function Team() {
  return (
    <>
      <SearchMenu />
      <MenuBar />

      <section>
        <div className="container-wrapper mx-auto py-12 ">
          <div>
            <h1 className="text-[24px] sm:text-[40px] font-bold text-black text-center mt-2 ">
              Team
            </h1>
            <div className=" bg-[#00aef3] h-[4px] w-[200px] mx-auto mb-2"></div>
          </div>
          <div className=" flex justify-evenly flex-col sm:flex-row  mt-[4rem]">
            <div>
              <img
                src="images/noor.jpg"
                alt=""
                className="h-[400px] p-4 border rounded-md mx-auto"
              />
              <p className=" text-2xl font-bold text-center">NOOR ALAM</p>
            </div>

            <div className=" max-w-xl">
              <h2 className=" text-2xl font-sfpro font-semibold mb-2">
                A Visionary Leader in Business Strategy and Innovation
              </h2>
              <p className=" px-4 py-2 btn-main w-[205px] font-sfpro font-bold my-4">
                Director of Unify Wellness{" "}
              </p>

              <p className=" text-lg pb-2">
                The Director of Unify Wellness, stands as a paragon of business
                acumen and strategic leadership. With over decades of experience
                in the business sector, Noor has established himself as a
                visionary leader, known for his exceptional ability to navigate
                complex market landscapes and drive sustainable growth.
              </p>

              <p className=" text-lg">
                Noor’s career is marked by numerous accomplishments in
                high-level business strategy and development. His journey to
                DIrector Unify Wellness is a testament to his entrepreneurial
                spirit and commitment to innovation. Under his guidance, Unify
                Wellness has emerged as a frontrunner in the wellness product
                industry, acclaimed for its commitment to quality and customer
                satisfaction.
              </p>
            </div>
          </div>


          <div className=" flex justify-evenly flex-col-reverse sm:flex-row  mt-[4rem]">
        

            <div className=" max-w-xl">
              <h2 className=" text-2xl font-sfpro font-semibold mb-2">
              Mastering Operational Excellence and Team Leadership
              </h2>
              <p className=" px-4 py-2 btn-main w-[205px] font-sfpro font-bold my-4">
                Director of Unify Wellness{" "}
              </p>

              <p className=" text-lg pb-2">
              Teja, Director of Operations at Unify Wellness, brings a dynamic blend of operational expertise and business management skills. With over 4 years of experience in leading operational roles, Teja has been instrumental in shaping the operational backbone of Unify Wellness, driving efficiency, and fostering a culture of excellence.
              </p>

              <p className=" text-lg">
              Teja's career trajectory in business operations has seen her excel in optimizing processes, managing large-scale operations, and leading diverse teams. Her approach to operational management is characterized by a focus on innovation, efficiency, and sustainability. At Unify Wellness, Teja has been pivotal in ensuring that every operational aspect runs smoothly and effectively, contributing significantly to the company's growth and stability
              </p>
            </div>

            <div>
              <img
                src="images/teja.jpg"
                alt=""
                className="h-[400px] p-4 border rounded-md mx-auto"
              />
              <p className=" text-2xl font-bold text-center">TEJA</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Disclaimer />
    </>
  );
}

export default Team;

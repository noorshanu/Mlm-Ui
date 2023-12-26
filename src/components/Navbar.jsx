import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <nav className="z-[100] bg-black lg:bg-transparent ">
        <div className="container-wrapper border-none sm:border-2 border-[#fff]  h-14 lg:h-16 2xl:h-20 rounded-2xl flex justify-between lg:justify-normal lg:grid lg:grid-cols-[1fr_16rem_1fr] gap-8 items-center">
          <div className="items-center justify-evenly text-base font-medium text-black hidden lg:flex">
            <Link
              to="/"
              onClick={() => setSidebarOpen(false)}
              className="cursor-pointer text-sm xl:text-base"
            >
              HOME
            </Link>
            <Link
              to="#"
              onClick={() => setSidebarOpen(false)}
              className="cursor-pointer text-sm xl:text-base"
            >
              WHITEPAPER
            </Link>
          </div>

          <div>
            <img
              src="/images/logo.png"
              className="h-[40px] sm:h-[75px] w-auto mx-auto"
              alt=""
            />
          </div>

          <button
            className="text-2xl text-white flex lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <IoMenu />
          </button>

          <div className="items-center justify-evenly text-base font-medium text-black hidden lg:flex">
            <Link
              to="roadmap"
              onClick={() => setSidebarOpen(false)}
              className="cursor-pointer text-sm xl:text-base"
            >
              ROADMAP
            </Link>
            <Link
              to="tokenomics"
              onClick={() => setSidebarOpen(false)}
              className="cursor-pointer text-sm xl:text-base"
            >
              TOKENOMICS
            </Link>
          </div>
        </div>
      </nav>

      <div
        className={`fixed top-0 right-0 w-[16rem] h-screen z-[10000] bg-white border-l-4 border-primary pt-6 px-8 transition-all duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-[16rem]"
        }`}
      >
        <div className="flex items-center justify-between mb-8 z-50">
          <img src="/images/logo.png" className="w-full max-w-[9rem]" alt="" />

          <button className="text-black text-2xl" onClick={toggleSidebar}>
            <IoClose />
          </button>
        </div>

        <div className="space-y-5 flex flex-col text-left items-start text-black font-medium">
          <Link
            to="/"
            onClick={() => setSidebarOpen(false)}
            className="cursor-pointer text-sm xl:text-base"
          >
            HOME
          </Link>
          <Link
            to="#"
            onClick={() => setSidebarOpen(false)}
            className="cursor-pointer text-sm xl:text-base"
          >
            WHITEPAPER
          </Link>
          <Link
            to="roadmap"
            onClick={() => setSidebarOpen(false)}
            className="cursor-pointer text-sm xl:text-base"
          >
            ROADMAP
          </Link>
          <Link
            to="tokenomics"
            onClick={() => setSidebarOpen(false)}
            className="cursor-pointer text-sm xl:text-base"
          >
            TOKENOMICS
          </Link>
        </div>
      </div>

      <div
        className={`black-screen z-[900] ${sidebarOpen ? "show" : ""}`}
        onClick={toggleSidebar}
      ></div>
    </>
  );
}

export default Navbar;

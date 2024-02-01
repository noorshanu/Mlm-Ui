import { FaChevronDown } from "react-icons/fa";



import { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";


function AboutUsDropdown({ setSidebarVisibility }) {
  const isAbove1024px = useMediaQuery("(min-width:1024px)");
  const [isOpen, setOpen] = useState(false);
  const toggleOpen = () => setOpen((val) => !val);
  

  return (
    <div className="relative group">
      <button
        onClick={isAbove1024px ? null : toggleOpen}
        className="flex items-center space-x-2  text-black cursor-pointer hover:text-black  text-sm uppercase "
      >
        <span>{("About us")}</span>
        <FaChevronDown className={`${isOpen ? "rotate-180" : "rotate-0"}`} />
      </button>

      {isOpen === true || isAbove1024px === true ? (
        <div className="lg:absolute top-full right-0  pt-3 bg-transparent rounded-xl lg:w-[11rem] transition-all duration-200 lg:translate-y-4 lg:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto z-50">
          <div className="bg-greyDark lg:py-3 lg:rounded-xl border-l-2 lg:border-2 border-[#00aef3] bg-white flex flex-col [&>*]:py-1 [&>*:hover]:bg-main-green [&>*:hover]:text-black text-xs lg:text-sm space-y-1 lg:space-y-0">
            {/* <a className="px-4">Whitepaper</a> */}
            <a
              href="/about"
             
             
              className="px-4"
            >
              About us
            </a>
           
            <a
              href="/team"
              
              rel="noreferrer"
              className="px-4"
            >
              Our Team
            </a>

            {/* <a
              href="/team"
              target="_blank"
              rel="noreferrer"
              className="px-4"
            >
              Our Brand
            </a> */}
            <a
              href="/awards"
           
              rel="noreferrer"
              className="px-4"
            >
              Awards and Certificate
            </a>
       
      
          </div>
        </div>
      ) : (
        false
      )}
    </div>
  );
}

export default AboutUsDropdown;

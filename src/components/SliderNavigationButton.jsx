import { IoIosArrowRoundForward } from "react-icons/io";
import { twMerge } from "tailwind-merge";

function SliderNavigationButton({ className, ...props }) {
  return (
    <button
      {...props}
      className={twMerge(
        "w-14 h-14 rounded-full bg-[#000] flex items-center justify-center text-2xl disabled:bg-[#646464]",
        className
      )}
    >
      <IoIosArrowRoundForward className="text-[#fff]" />
    </button>
  );
}

export default SliderNavigationButton;

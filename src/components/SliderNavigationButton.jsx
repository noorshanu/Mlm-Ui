import { IoIosArrowRoundForward } from "react-icons/io";
import { twMerge } from "tailwind-merge";

function SliderNavigationButton({ className, ...props }) {
  return (
    <button
      {...props}
      className={twMerge(
        "w-14 h-14 rounded-full bg-green/40 flex items-center justify-center text-2xl disabled:bg-white",
        className
      )}
    >
      <IoIosArrowRoundForward />
    </button>
  );
}

export default SliderNavigationButton;

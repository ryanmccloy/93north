import ClickIcon from "../icons/ClickIcon";
import DoubleArrowDown from "../icons/DoubleArrowDown";

function ServiceContainer({ service, isOpen, handleClick, isLast }) {
  return (
    <div
      className={`relative group border-t ${
        isLast ? "border-b" : ""
      } border-t-black py-30 cursor-pointer overflow-hidden hover:text-white ${
        isOpen ? "bg-black text-white" : ""
      }`}
      onClick={handleClick}
    >
      {/* Background animation layer */}
      <div className="absolute top-0 left-0 h-full w-0 bg-black z-0 group-hover:w-full transition-all duration-500 ease-out" />

      {/* Foreground content */}
      <div className={`relative z-10 width-size `}>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-30">
            <DoubleArrowDown />
            <h3 className="uppercase text-heading-medium font-extralight  ">
              {service}
            </h3>
          </div>
          <div
            className={`transition-all text-white duration-500 ease-in-out flex gap-30 items-center ${
              isOpen
                ? "opacity-0 translate-y-2 pointer-events-none"
                : "opacity-100 translate-y-0"
            }`}
          >
            <span>click to expand</span>
            <ClickIcon />
          </div>
        </div>

        {/* Expandable content */}
        <div
          className={` bg-red-200 w-full overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "mt-30 h-[300px]" : "h-0"
          }`}
        >
          {/* Your expandable content goes here */}
        </div>
      </div>
    </div>
  );
}

export default ServiceContainer;

// uppercase text-large font-semibold

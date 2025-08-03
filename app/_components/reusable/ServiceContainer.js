import ClickIcon from "../icons/ClickIcon";
import DoubleArrowDown from "../icons/DoubleArrowDown";

function ServiceContainer({ title, content, isOpen, handleClick, isLast }) {
  return (
    <div
      className={` relative group border-t ${
        isLast ? "border-b" : ""
      } border-t-black py-30 cursor-pointer overflow-hidden hover:text-white ${
        isOpen ? "bg-black text-white service-background" : ""
      }`}
      onClick={handleClick}
    >
      {/* Background animation layer */}
      <div
        className={`service-background absolute top-0 left-0 h-full w-0 bg-black z-0 group-hover:w-full transition-all duration-500 ease-out ${
          isOpen ? "w-full" : ""
        }`}
      />

      {/* Foreground content */}
      <div className={`relative z-10 width-size `}>
        <div className="flex gap-30 items-center">
          <div className="flex  items-center gap-30">
            <DoubleArrowDown />
            <h3 className="uppercase text-heading-medium font-extralight  ">
              {title}
            </h3>
          </div>
          <div
            className={`transition-all mt-15 text-white duration-500 ease-in-out flex gap-30 items-center ${
              isOpen
                ? "opacity-0 translate-y-2 pointer-events-none"
                : "opacity-100 translate-y-0"
            }`}
          >
            <span className="">click to expand</span>
            {/* <ClickIcon /> */}
          </div>
        </div>

        {/* Expandable content */}
        <div
          className={` w-full overflow-hidden transition-all duration-500 ease-in-out flex flex-col gap-30 ${
            isOpen ? "mt-30 max-h-[1000px] pb-15" : "max-h-0"
          }`}
        >
          {content.map((paragraph, index) => {
            return (
              <p key={index} className="max-w-[700px]">
                {paragraph}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ServiceContainer;

// uppercase text-large font-semibold

import DoubleArrowDown from "../icons/DoubleArrowDown";

function ServiceContainer({ service }) {
  return (
    <div className="border-t border-t-black py-30 ">
      <div className="width-size flex gap-30 items-center">
        {/* <h3 className="service-heading">{service}</h3> */}
        <DoubleArrowDown />
        <h3 className="uppercase text-heading-medium font-extralight">
          {service}
        </h3>
      </div>
    </div>
  );
}

export default ServiceContainer;

// uppercase text-large font-semibold

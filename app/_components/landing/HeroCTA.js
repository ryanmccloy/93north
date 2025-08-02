import Button from "../reusable/Button";

function HeroCTA() {
  return (
    <div className="   flex flex-col items-center gap-30">
      <p className="text-white uppercase font-medium  md:w-[75%] text-center mx-auto">
        We are a digital agency specializing in web design, development, and
        digital marketing. Whether you need a high-performing website, targeted
        advertising, or a stronger online presence, our services are tailored to
        meet your specific goals.
      </p>
      <Button>Get a Free Quote</Button>
    </div>
  );
}

export default HeroCTA;

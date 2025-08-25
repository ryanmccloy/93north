import Button from "../reusable/Button";

function HeroCTA() {
  return (
    <div className="width-size   w-full flex flex-col gap-15">
      <h1 className="hero-heading">
        Elevate your{" "}
        <span className="xl:hidden">
          <br />
        </span>{" "}
        online presence
      </h1>

      <p className="uppercase font-normal ">
        At 93 North we specialise in custom web design, development, and
        digitial marketing.
      </p>
      <div className="flex gap-15">
        <span className="uppercase font-normal">Have an idea?</span>
        <Button underline={true} link={true} href="#contact">
          Get a quote
        </Button>
      </div>
    </div>
  );
}

export default HeroCTA;

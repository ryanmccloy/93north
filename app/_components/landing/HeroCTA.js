import Button from "../reusable/Button";

function HeroCTA({ headingRef, paragraphRef, buttonGroupRef }) {
  return (
    <div className="width-size w-full flex flex-col gap-15">
      <h1 ref={headingRef} className="hero-heading opacity-0 translate-y-5">
        Elevate your{" "}
        <span className="xl:hidden">
          <br />
        </span>{" "}
        online presence
      </h1>

      <p
        ref={paragraphRef}
        className="uppercase font-normal opacity-0 translate-y-5"
      >
        At 93 North we specialise in custom web design, development, and digital
        marketing.
      </p>

      <div ref={buttonGroupRef} className="flex gap-15 opacity-0 translate-y-5">
        <span className="uppercase font-normal">Have an idea?</span>
        <Button underline link href="#contact">
          Get a quote
        </Button>
      </div>
    </div>
  );
}

export default HeroCTA;

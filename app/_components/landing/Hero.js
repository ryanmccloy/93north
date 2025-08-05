import Image from "next/image";
import Button from "../reusable/Button";

function Hero() {
  return (
    <section className="h-screen  flex flex-col gap-60  bg-off-white pt-[150px] min-h-fit">
      <div className="width-size   w-full flex flex-col gap-15">
        <h1 className=" hero-heading xl:hidden">
          Elevate your <br></br> online presence
        </h1>
        <h1 className=" hero-heading hidden xl:block">
          Elevate your online presence
        </h1>

        <p className="uppercase ">
          At 93 North we specialise in custom web design, development, and
          digitial marketing.
        </p>
        <div className="flex gap-15">
          <span className="uppercase">Have an idea?</span>
          <Button underline={true}>Get a free quote</Button>
        </div>
      </div>

      <div className="relative w-full flex-1 min-h-[300px] max-h-[700px] ">
        <Image
          src="/images/landing/hero-test.webp"
          alt="Escalator ascending"
          fill
          className="object-cover object-top"
          quality={100}
          priority={true}
        />
      </div>
    </section>
  );
}

export default Hero;

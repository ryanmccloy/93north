import Image from "next/image";
import HeroCTA from "./HeroCTA";

function Hero() {
  return (
    <section
      className="h-screen  flex flex-col gap-60 md:gap-90 lg:gap-120  bg-off-white pt-[150px] min-h-fit"
      id="hero"
    >
      <HeroCTA />

      <div className="relative w-full flex-1 min-h-[300px] max-h-[700px] ">
        <Image
          src="/images/landing/hero.webp"
          alt="Escalator ascending"
          fill
          sizes="100vw"
          className="object-cover object-top"
          quality={100}
          priority={true}
        />
      </div>
    </section>
  );
}

export default Hero;

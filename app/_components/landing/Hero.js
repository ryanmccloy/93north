import HeroHeading from "./HeroHeading";
import HeroCTA from "./HeroCTA";
import HeroBgLayers from "./HeroBgLayers";

export default function Hero() {
  return (
    <section className="animation-start relative  h-screen min-h-[850px] max-h-[1200px]">
      <div className="relative bg-[black] w-full h-full z-20">
        <div className="width-size flex flex-col justify-between relative  h-full pt-[250px]   xl:pt-[200px] pb-90   ">
          <HeroHeading />

          <HeroCTA />
        </div>
      </div>
      <HeroBgLayers />
    </section>
  );
}

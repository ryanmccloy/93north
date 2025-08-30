// import Image from "next/image";
// import HeroCTA from "./HeroCTA";

// function Hero() {
//   return (
//     <section
//       className="h-screen  flex flex-col gap-60 md:gap-90 lg:gap-120  bg-off-white pt-[150px] min-h-fit"
//       id="hero"
//     >
//       <HeroCTA />

//       <div className="relative w-full flex-1 min-h-[300px] max-h-[700px] ">
//         <Image
//           src="/images/landing/hero.webp"
//           alt="Escalator ascending"
//           fill
//           sizes="100vw"
//           className="object-cover object-top"
//           quality={100}
//           priority={true}
//         />
//       </div>
//     </section>
//   );
// }

// export default Hero;

"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import HeroCTA from "./HeroCTA";
import gsap from "gsap";

export default function Hero() {
  const wrapper = useRef(null);
  const reveal = useRef(null);

  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonGroupRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    gsap.set(wrapper.current, { scaleX: 0, transformOrigin: "left center" });
    gsap.set(reveal.current, { height: "1.5px" });

    // Phase 1: line
    tl.to(wrapper.current, {
      scaleX: 1,
      duration: 1,
      ease: "power4.inOut",
    });

    // Phase 2: when line finishes -> trigger event
    tl.add(() => {
      window.dispatchEvent(new Event("heroLineComplete"));
    });

    // Phase 3: image reveal (vertical)
    tl.to(reveal.current, {
      height: "100%",
      duration: 1.2,
      ease: "power4.inOut",
    });

    tl.to(
      headingRef.current,
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "+=0.2" // start after nav + image are done
    )
      .to(
        paragraphRef.current,
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.4" // overlap slightly with heading
      )
      .to(
        buttonGroupRef.current,
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" },
        "-=0.3"
      );
  }, []);

  return (
    <section
      className="h-screen flex flex-col gap-60 md:gap-90 lg:gap-120 bg-off-white pt-[150px] min-h-fit overflow-hidden"
      id="hero"
    >
      <HeroCTA
        headingRef={headingRef}
        paragraphRef={paragraphRef}
        buttonGroupRef={buttonGroupRef}
      />

      <div className="relative w-full flex-1 min-h-[300px] max-h-[700px] overflow-hidden">
        <div ref={wrapper} className="relative w-full h-full">
          <div ref={reveal} className="relative w-full h-full overflow-hidden">
            <Image
              src="/images/landing/hero.webp"
              alt="Escalator ascending"
              fill
              sizes="100vw"
              className="object-cover object-top"
              quality={100}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

export default function Landing() {
  useEffect(() => {
    const paragraphs = gsap.utils.toArray(".text-container p");
    const bgs = gsap.utils.toArray(".bg-container div");

    bgs.forEach((el) => {
      const speed = parseFloat(el.getAttribute("data-speed") || "1");

      gsap.to(el, {
        y: () => window.innerHeight * (1 - speed),
        ease: "none",
        scrollTrigger: {
          trigger: ".animation-start",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    paragraphs.forEach((el) => {
      const speed = parseFloat(el.getAttribute("data-speed") || "1");

      gsap.to(el, {
        y: () => window.innerHeight * (1 - speed),
        ease: "none",
        scrollTrigger: {
          trigger: ".animation-start",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="animation-start relative   h-screen min-h-[850px] max-h-[1200px]">
      <div className="relative bg-black w-full h-full z-20">
        <section className="width-size flex flex-col justify-between relative  h-full pt-[250px]   xl:pt-[200px] pb-90   ">
          <div className="heading h-fit" aria-hidden="true">
            <p>turning vision</p>

            <div className="relative text-container">
              <p className="text-white ">into reality</p>

              <p data-speed="0.95" style={{ WebkitTextStroke: "1px #f5f5f5" }}>
                into reality
              </p>
              <p data-speed="0.9" style={{ WebkitTextStroke: "1px #cccccc" }}>
                into reality
              </p>
              <p data-speed="0.85" style={{ WebkitTextStroke: "1px #999999" }}>
                into reality
              </p>
              <p data-speed="0.8" style={{ WebkitTextStroke: "1px #666666" }}>
                into reality
              </p>
            </div>
          </div>

          <div className="   flex flex-col items-center gap-30">
            <p className="text-white uppercase  md:w-[75%] text-center mx-auto">
              We are a digital agency specializing in web design, development,
              and digital marketing. Whether you need a high-performing website,
              targeted advertising, or a stronger online presence, our services
              are tailored to meet your specific goals.
            </p>
            <button className="btn border-none  text-white bg-[var(--color-accent)]">
              Get a free quote
            </button>
          </div>
        </section>
      </div>

      <div className="absolute top-0 left-0 h-full w-full z-10 ">
        <div className="relative bg-container h-full w-full">
          <div
            data-speed="0.95"
            className="absolute inset-0 bg-neutral-900 z-50"
          />
          <div
            data-speed="0.9"
            className="absolute inset-0 bg-neutral-700 z-40"
          />
          <div
            data-speed="0.85"
            className="absolute inset-0 bg-neutral-500 z-30"
          />
          <div
            data-speed="0.8"
            className="absolute inset-0 bg-neutral-300 z-20"
          />
          <div
            data-speed="0.75"
            className="absolute inset-0 bg-neutral-100 z-10"
          />
        </div>
      </div>
    </div>
  );
}

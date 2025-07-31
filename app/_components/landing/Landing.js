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
    <div className="">
      <section className="width-size  h-screen  pt-[200px] animation-start flex flex-col items-center gap-150 ">
        <div className="heading h-fit " aria-hidden="true">
          <p>turning vision</p>

          <div className="relative text-container">
            <p className="text-white ">into reality</p>
            <p data-speed="0.95">into reality</p>
            <p data-speed="0.9">into reality</p>
            <p data-speed="0.85">into reality</p>
            <p data-speed="0.8">into reality</p>
            <p data-speed="0.75">into reality</p>
            <p data-speed="0.7">into reality</p>
          </div>
        </div>

        <div>
          <p className="text-white uppercase w-[75%] text-center mx-auto">
            We are a digital agency specializing in web design, development, and
            digital marketing. Whether you need a high-performing website,
            targeted advertising, or a stronger online presence, our services
            are tailored to meet your specific goals.
          </p>
        </div>
        <div className="fixed bottom-60">
          <button className="btn border-none text-white bg-[var(--color-accent)]">
            Get a free quote
          </button>
        </div>
      </section>
      <section className="h-screen width-size bg-pink-100"></section>
    </div>
  );
}

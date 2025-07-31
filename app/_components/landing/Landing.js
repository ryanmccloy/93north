"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import SplitText from "gsap/SplitText";
import "./landing.css";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

export default function Landing() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // SMOOTHER
    const smoother = ScrollSmoother.create({
      wrapper: "#wrapper",
      content: "#content",
      smooth: 1,
      normalizeScroll: true,
      ignoreMobileResize: true,
      effects: true,
      preventDefault: true,
    });

    // ANIMATION
    gsap.set(".heading", {
      yPercent: -150,
      opacity: 1,
    });

    let mySplitText = new SplitText("#split-stagger", { type: "words,chars" });
    let chars = mySplitText.chars;

    chars.forEach((char, i) => {
      smoother.effects(char, { speed: 1, lag: (i + 1) * 0.1 });
    });
  }, []);
  return (
    <div id="wrapper" className="width-size">
      <section id="content">
        <div class="heading " aria-hidden="true">
          <p>turning vision</p>

          <div class="text-container">
            <div>
              <p>into reality</p>
              <p data-speed="0.95">into reality</p>
              <p data-speed="0.9">into reality</p>
              <p data-speed="0.85">into reality</p>
              <p data-speed="0.8">into reality</p>
              <p data-speed="0.75">into reality</p>
              <p data-speed="0.7">into reality</p>
            </div>
          </div>
        </div>

        <section class="image-grid container">
          <div class="image_cont" data-speed="1">
            <img
              data-speed="auto"
              src="https://images.unsplash.com/photo-1556856425-366d6618905d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG5lb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              alt=""
            />
          </div>
          <div class="image_cont" data-speed="1.7">
            <img
              data-speed="auto"
              src="https://images.unsplash.com/photo-1520271348391-049dd132bb7c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
              alt=""
            />
          </div>
          <div class="image_cont" data-speed="1.5">
            <img
              data-speed="auto"
              src="https://images.unsplash.com/photo-1609166214994-502d326bafee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
              alt=""
            />
          </div>
        </section>
      </section>
    </div>
  );
}

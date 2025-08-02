import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function useParallaxEffect({ selector, trigger }) {
  /* IF IT FLASHES/JANKS ETC CONSIDER USING useLayoutEffect */
  useEffect(() => {
    const elements = gsap.utils.toArray(selector);

    elements.forEach((el) => {
      const speed = parseFloat(el.getAttribute("data-speed") || "1");

      gsap.to(el, {
        y: () => window.innerHeight * (1 - speed),
        ease: "none",
        scrollTrigger: {
          trigger,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [selector, trigger]);
}

"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import NavStart from "./NavStart";
import NavCenter from "./NavCenter";
import NavEnd from "./NavEnd";

export default function Header() {
  const navRef = useRef(null);

  useEffect(() => {
    const onHeroLineComplete = () => {
      gsap.fromTo(
        navRef.current,
        { y: "-100%" },
        {
          y: 0,
          duration: 1.2,
          ease: "power4.inOut",
        }
      );
    };

    window.addEventListener("heroLineComplete", onHeroLineComplete);
    return () =>
      window.removeEventListener("heroLineComplete", onHeroLineComplete);
  }, []);

  return (
    <nav
      ref={navRef}
      className="navbar fixed -translate-y-full backdrop-blur-sm shadow-xs z-50 w-full px-0 py-2"
      aria-label="Primary Navigation"
      data-theme="light"
    >
      <div className="width-size flex justify-between items-center w-full ">
        <NavStart />
        <NavCenter />
        <NavEnd />
      </div>
    </nav>
  );
}

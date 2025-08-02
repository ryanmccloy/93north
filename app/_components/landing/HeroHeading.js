"use client";

import useParallaxEffect from "@/app/_utils/hooks/useParallaxEffect";

function HeroHeading() {
  useParallaxEffect({
    selector: ".hero-heading-container h1",
    trigger: ".animation-start",
  });
  const layeredHeadings = [
    { speed: 0.95, stroke: "#f5f5f5" },
    { speed: 0.9, stroke: "#cccccc" },
    { speed: 0.85, stroke: "#999999" },
    { speed: 0.8, stroke: "#666666" },
  ];

  return (
    <div className="hero-heading h-fit" aria-hidden="true">
      <h1>turning vision</h1>

      <div className="relative hero-heading-container">
        <h1 className="text-white">into reality</h1>

        {layeredHeadings.map(({ speed, stroke }, index) => (
          <h1
            key={index}
            data-speed={speed}
            style={{ WebkitTextStroke: `1px ${stroke}` }}
          >
            into reality
          </h1>
        ))}
      </div>
    </div>
  );
}

export default HeroHeading;

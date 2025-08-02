"use client";
import useParallaxEffect from "@/app/_utils/hooks/useParallaxEffect";

function HeroBgLayers() {
  useParallaxEffect({
    selector: ".hero-bg-container div",
    trigger: ".animation-start",
  });
  const layers = [
    { speed: 0.95, color: "bg-neutral-900", z: "z-50" },
    { speed: 0.9, color: "bg-neutral-700", z: "z-40" },
    { speed: 0.85, color: "bg-neutral-500", z: "z-30" },
    { speed: 0.8, color: "bg-neutral-300", z: "z-20" },
    { speed: 0.75, color: "bg-neutral-100", z: "z-10" },
  ];

  return (
    <div className="absolute top-0 left-0 h-full w-full z-10">
      <div className="relative hero-bg-container h-full w-full">
        {layers.map((layer, i) => (
          <div
            key={i}
            data-speed={layer.speed}
            className={`absolute inset-0 ${layer.color} ${layer.z}`}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroBgLayers;

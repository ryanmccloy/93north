"use client";

import { useState } from "react";
import ServiceContainer from "../reusable/ServiceContainer";

function Services() {
  const [isOpen, setIsOpen] = useState(null);

  const services = [
    {
      title: "Web Design",
      content: [
        "Your website should do more than just look good — it should work beautifully. We create clean, modern designs that feel intuitive, guide your visitors effortlessly, and reflect your brand with clarity.",
        "Whether you're starting from scratch or refreshing your current site, we make sure your design feels sharp, polished, and ready to convert.",
      ],
    },
    {
      title: "Web Development",
      content: [
        "From fast-loading marketing sites to fully custom web apps, we build scalable digital experiences using modern tools like Next.js and Firebase. Every project is coded for speed, SEO, and performance—no templates, no fluff.",

        "We specialize in custom frontend development, backend architecture with Firebase, SEO optimization, and seamless API integrations. Whether you're building from scratch or upgrading an outdated site, we deliver clean code and reliable results.",
      ],
    },
    {
      title: "Digital Marketing",
      content: [
        "Building a site is just the start — we help people find it. With targeted ads and smart strategies, we get your brand in front of the right audience and turn clicks into customers.",
        "Whether you're new to digital marketing or looking to improve results, we focus on what actually moves the needle: visibility, engagement, and real growth.",
      ],
    },
  ];
  return (
    <section className="h-[3000px] bg-white  ">
      <div className="width-size pt-[275px]">
        <p className="text-large uppercase max-w-[750px] font-medium">
          We’re a web-first digital agency based in Northern Ireland, building
          fast, scalable websites with a focus on performance and growth.
        </p>
      </div>
      <div className="mt-90">
        {services.map((service, index) => {
          return (
            <ServiceContainer
              key={index}
              title={service.title}
              content={service.content}
              isLast={index === services.length - 1}
              isOpen={isOpen === index}
              handleClick={() => {
                isOpen == index ? setIsOpen(null) : setIsOpen(index);
              }}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Services;

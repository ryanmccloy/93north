"use client";

import { useState } from "react";
import ServiceContainer from "../reusable/ServiceContainer";

function Services() {
  const [isOpen, setIsOpen] = useState(null);

  const services = ["Web Design", "Web Development", "Digital Marketing"];
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
              service={service}
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

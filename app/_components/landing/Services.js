import ServiceContainer from "../reusable/ServiceContainer";
import ServicesCTA from "./ServicesCTA";

const services = [
  {
    title: "Web Design & UX",
    description:
      "We design clean, modern websites that are easy to use and visually aligned with your brand. Every element is built with usability in mind to ensure a smooth experience across all devices.",
  },
  {
    title: "Web Development",
    description:
      "Our websites are fast, responsive, and accessible. We follow best practices for SEO, performance, and scalability — ensuring your site works just as well as it looks.",
  },
  {
    title: "Digital Advertising",
    description:
      "We create targeted campaigns on Google and Meta that drive real results. From strategy to reporting, we manage and optimise every step to get your brand in front of the right audience.",
  },
  {
    title: "Social Media Strategy",
    description:
      "We help brands stay consistent and relevant on social media through planned content, tailored visuals, and a clear strategy that supports your goals.",
  },
];

function Services() {
  return (
    <section className="width-size section-styles" id="services">
      <ServicesCTA />

      <div className="mt-90 md:mt-120">
        <h2 className="section-heading ">What We Do</h2>

        <div className="grid-standard">
          {services.map((service, index) => {
            return (
              <ServiceContainer
                key={service.title}
                title={service.title}
                description={service.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;

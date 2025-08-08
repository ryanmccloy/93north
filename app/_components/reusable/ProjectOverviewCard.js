import Image from "next/image";

function ProjectOverviewCard() {
  return (
    <ul className="grid grid-cols-2 gap-15">
      {[
        "E-commerce integration",
        "Stripe payment setup",
        "Responsive design",
        "SEO optimisation",
      ].map((item) => (
        <li
          key={item}
          className="flex items-center gap-2 before:content-[''] before:block before:w-2 before:h-2 before:bg-accent"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default ProjectOverviewCard;

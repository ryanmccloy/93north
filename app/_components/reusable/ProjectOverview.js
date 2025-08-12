import Image from "next/image";
import Button from "./Button";
import ProjectOverviewCard from "./ProjectOverviewCard";

function ProjectOverview() {
  return (
    <div className="bg-light rounded-2xl p-15 md:p-30 ">
      <div
        className="grid grid-cols-1 gap-30 
      projectOverview-mediumScreen:gap-60 projectOverview-largeScreen:grid-cols-2 
      
      projectOverview-largeScreen:auto-rows-min
      projectOverview-extraExtraLargeScreen:gap-x-120 "
      >
        {/* Top left heading + button */}
        <div className=" h-fit projectOverview-largeScreen:col-start-1 projectOverview-largeScreen:row-start-1">
          <div
            className="flex flex-col gap-30 
          projectOverview-smallScreen:flex-row
          projectOverview-smallScreen:justify-between projectOverview-smallScreen:items-end"
          >
            <h4 className="standard-heading">Goneichiwa</h4>

            <Button underline={true}>Visit site</Button>
          </div>
        </div>

        {/* Right column image */}
        <div className="projectOverview-largeScreen:col-start-2 projectOverview-largeScreen:row-start-1 projectOverview-largeScreen:row-span-2">
          <Image
            alt="Goneichiwa website preview"
            src="/images/landing/mockup.webp"
            width={750}
            height={562}
            className="w-full h-auto object-cover rounded-2xl"
          />
        </div>

        {/* Bottom left description */}
        <div
          className="projectOverview-largeScreen:col-start-1 projectOverview-largeScreen:row-start-2 projectOverview-largeScreen:row-span-2  projectOverview-extraLargeScreen:row-span-1
  
        "
        >
          <div className="flex flex-col justify-end gap-15  h-full ">
            <p>
              Goneichiwa is a modern travel e-commerce platform designed to make
              trip planning easier and more personal. It offers beautifully
              designed, downloadable PDF travel guides covering various
              destinations, with the option to book one-on-one consultations for
              tailored travel advice.
            </p>
            <p>
              The site features full e-commerce functionality powered by Stripe,
              a blog for added insight and inspiration, and a clean,
              user-friendly design that feels both fun and professional. Built
              to scale, Goneichiwa is a flexible platform ready to grow
              alongside a global audience of curious travelers.
            </p>
          </div>
        </div>

        {/* Bottom right project card */}
        <div
          className=" h-fit projectOverview-largeScreen:col-start-2 projectOverview-largeScreen:row-start-3
          projectOverview-extraLargeScreen:col-start-1
          projectOverview-extraLargeScreen:col-span-2
          
       "
        >
          <ProjectOverviewCard />
        </div>
      </div>
    </div>
  );
}

export default ProjectOverview;

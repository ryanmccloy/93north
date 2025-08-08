import Image from "next/image";
import Button from "./Button";
import ProjectOverviewCard from "./ProjectOverviewCard";

function ProjectOverview() {
  return (
    <div className="bg-light rounded-2xl  p-15 md:p-30 flex flex-col gap-90">
      <div className="grid grid-cols-2 gap-120">
        <div className="flex flex-col justify-between gap-150">
          <div className="flex flex-col gap-30 md:gap-60">
            <div className="flex gap-30  justify-between items-end">
              <h4 className="standard-heading">Goneichiwa</h4>
              <Button underline={true}>Visit site</Button>
            </div>
            <div className="flex flex-col gap-15">
              <p className="max-w-[750px]">
                Goneichiwa is a modern travel e-commerce platform designed to
                make trip planning easier and more personal. It offers
                beautifully designed, downloadable PDF travel guides covering
                various destinations, with the option to book one-on-one
                consultations for tailored travel advice.{" "}
              </p>
              <p>
                The site features full e-commerce functionality powered by
                Stripe, a blog for added insight and inspiration, and a clean,
                user-friendly design that feels both fun and professional. Built
                to scale, Goneichiwa is a flexible platform ready to grow
                alongside a global audience of curious travelers.
              </p>
            </div>
            <ProjectOverviewCard />
          </div>
        </div>
        <div className="relative aspect-[4/3] max-w-[750px] rounded-2xl overflow-hidden">
          <Image
            alt="Goneichiwa website preview"
            src="/images/landing/mockup.webp"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectOverview;

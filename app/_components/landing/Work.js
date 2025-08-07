import ProjectOverview from "../reusable/ProjectOverview";
import ScrollingBanner from "../reusable/ScrollingBanner";

function Work() {
  return (
    <div className="bg-secondary-grey w-full section-styles">
      <div className="width-size">
        <h2 className="section-heading">Work</h2>
        <ProjectOverview />
      </div>
      <ScrollingBanner />
    </div>
  );
}

export default Work;

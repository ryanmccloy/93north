function ProjectOverviewFeature({ features }) {
  return (
    <ul className=" projectOverview-mediumScreen:grid projectOverview-mediumScreen:grid-cols-2 gap-15 projectOverview-extraLargeScreen:flex projectOverview-extraLargeScreen:justify-between">
      {features.map((item) => (
        <li
          key={item}
          className=" flex items-center gap-2 before:content-[''] before:block before:w-2 before:h-2 before:bg-accent"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default ProjectOverviewFeature;

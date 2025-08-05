function ServiceContainer({ title, isLeft, description }) {
  return (
    <div
      className={`flex flex-col gap-30 ${
        isLeft
          ? "border-l-2 border-l-accent pl-15 md:pl-30"
          : "self-end border-r-2 border-r-accent pr-15 md:pr-30"
      }`}
    >
      <h3
        className={`${
          !isLeft ? "text-end lg:text-start" : ""
        } service-heading `}
      >
        {title}
      </h3>
      <p className="max-w-[550px]">{description}</p>
    </div>
  );
}

export default ServiceContainer;

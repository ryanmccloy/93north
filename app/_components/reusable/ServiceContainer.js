function ServiceContainer({ title, isLeft, description }) {
  return (
    <div
      className={`flex flex-col gap-30 border-l-2 border-l-accent pl-15 md:pl-30
          
      `}
    >
      <h3 className={`standard-heading `}>{title}</h3>
      <p className="max-w-[550px]">{description}</p>
    </div>
  );
}

export default ServiceContainer;

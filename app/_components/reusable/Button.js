function Button({ children, underline = false }) {
  return !underline ? (
    <button className="rounded-full bg-accent group relative overflow-hidden  py-2 px-4 border border-accent hover:cursor-pointer  ">
      <span className="block relative ">
        {/* Default text */}
        <span className="block transition-transform text-dark duration-300 ease-in-out group-hover:-translate-y-full">
          {children}
        </span>

        {/* Accent color text (enters from below) */}
        <span className="block absolute top-full left-0 w-full text-light transition-transform duration-300 ease-in-out group-hover:translate-y-[-100%]">
          {children}
        </span>
      </span>
    </button>
  ) : (
    <button className=" h-fit group relative overflow-hidden hover:cursor-pointer border-b-2 border-accent uppercase text-accent font-medium w-fit">
      <span className="block relative">
        {/* Default text */}
        <span className="text-dark block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
          {children}
        </span>

        {/* Accent color text (enters from below) */}
        <span className="block absolute top-full left-0 w-full text-accent transition-transform duration-300 ease-in-out group-hover:translate-y-[-100%]">
          {children}
        </span>
      </span>
    </button>
  );
}

export default Button;

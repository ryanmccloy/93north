import Link from "next/link";

function Button({
  children,
  underline = false,
  link = false,
  href = "/",
  anchor = false,
}) {
  // 4 MAIN USE CASES:
  // -  rounded link element
  // - rounded button element
  // - underline link element
  // - underline anchor tag

  const roundedContent = (
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
  );

  const underlineContent = (
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
  );

  if (!underline && link) {
    return (
      <Link href={href} className="rounded-button-styles group ">
        {roundedContent}
      </Link>
    );
  }

  if (!underline && !link) {
    return (
      <button className="rounded-button-styles group ">{roundedContent}</button>
    );
  }

  if (underline && link) {
    return (
      <Link className="underline-button-styles group" href={href}>
        {underlineContent}
      </Link>
    );
  }

  if (underline && anchor) {
    return (
      <a
        className="underline-button-styles group"
        rel="noopener noreferrer"
        target="_blank"
        href={href}
      >
        {underlineContent}
      </a>
    );
  }
}

export default Button;

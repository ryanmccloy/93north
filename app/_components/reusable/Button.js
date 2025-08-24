import Link from "next/link";

function Button({ children, underline = false, link = false, href = "/" }) {
  if (!underline && link) {
    return (
      <Link
        href={href}
        className="rounded-full bg-accent group relative overflow-hidden  py-2 px-4 border border-accent hover:cursor-pointer w-fit uppercase "
      >
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
      </Link>
    );
  }

  if (underline && link) {
    return (
      <Link
        className=" h-fit group relative overflow-hidden hover:cursor-pointer border-b-2 border-accent uppercase text-accent font-medium w-fit"
        href={href}
      >
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
      </Link>
    );
  }

  if (!underline && !Link) {
    return (
      <button className="rounded-full bg-accent group relative overflow-hidden  py-2 px-4 border border-accent hover:cursor-pointer w-fit uppercase ">
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
    );
  }

  if (underline) {
    return (
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
}

export default Button;

// return !underline ? (
//   <button className="rounded-full bg-accent group relative overflow-hidden  py-2 px-4 border border-accent hover:cursor-pointer w-fit uppercase ">
//     <span className="block relative ">
//       {/* Default text */}
//       <span className="block transition-transform text-dark duration-300 ease-in-out group-hover:-translate-y-full">
//         {children}
//       </span>

//       {/* Accent color text (enters from below) */}
//       <span className="block absolute top-full left-0 w-full text-light transition-transform duration-300 ease-in-out group-hover:translate-y-[-100%]">
//         {children}
//       </span>
//     </span>
//   </button>
// ) : (
//   <button className=" h-fit group relative overflow-hidden hover:cursor-pointer border-b-2 border-accent uppercase text-accent font-medium w-fit">
//     <span className="block relative">
//       {/* Default text */}
//       <span className="text-dark block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
//         {children}
//       </span>

//       {/* Accent color text (enters from below) */}
//       <span className="block absolute top-full left-0 w-full text-accent transition-transform duration-300 ease-in-out group-hover:translate-y-[-100%]">
//         {children}
//       </span>
//     </span>
//   </button>
// );

import Link from "next/link";

function NavBarLink({ children, href }) {
  return (
    <Link href={href} className="relative inline-block group uppercase">
      <span className="relative z-10">{children}</span>
      <span
        className="absolute bottom-0 left-0 w-full h-[2px] bg-accent scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
        aria-hidden="true"
      />
    </Link>
  );
}

export default NavBarLink;

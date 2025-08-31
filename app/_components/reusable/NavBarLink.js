import Link from "next/link";

function NavBarLink({ children, href, footer = false }) {
  return (
    <Link
      href={href}
      className={`underline-animation-wrapper group ${footer ? "pb-2" : ""}`}
    >
      <span className="relative z-10">{children}</span>
      <span className="underline-animation-bar" aria-hidden="true" />
    </Link>
  );
}

export default NavBarLink;

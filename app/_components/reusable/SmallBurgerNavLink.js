import Link from "next/link";

function SmallBurgerNavLink({ href, children }) {
  return (
    <Link className="btn-hover-accent uppercase" href={href}>
      {children}
    </Link>
  );
}

export default SmallBurgerNavLink;

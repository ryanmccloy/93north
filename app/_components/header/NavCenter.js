import NavBarLink from "../reusable/NavBarLink";

function NavCenter({ sections }) {
  return (
    <div className="navbar-center hidden lg:flex">
      <ul className="flex gap-30">
        {sections.map((section) => {
          return (
            <li key={section}>
              <NavBarLink href={`#${section}`}>{section}</NavBarLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default NavCenter;

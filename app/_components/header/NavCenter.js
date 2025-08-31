import NavBarLink from "../reusable/NavBarLink";
import { sections } from "../../_lib/constants";

function NavCenter() {
  return (
    <div className="navbar-center hidden lg:flex">
      <ul className="flex gap-60">
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

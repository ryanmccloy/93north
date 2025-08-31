import NavBarLink from "../reusable/NavBarLink";
import { sections } from "../../_lib/constants";

function FooterNav() {
  return (
    <nav aria-label="Footer navigation">
      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-30">
        {sections.map((section) => {
          return (
            <li key={section}>
              <NavBarLink href={`#${section}`} footer={true}>
                {section}
              </NavBarLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default FooterNav;

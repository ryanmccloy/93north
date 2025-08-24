import { PiFacebookLogoFill, PiInstagramLogoFill } from "react-icons/pi";

import NavBarLink from "../reusable/NavBarLink";

function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center bg-secondary-grey text-base-content rounded p-10">
      <ul className="grid grid-cols-3">
        <li>
          <NavBarLink href="#services">Services</NavBarLink>
        </li>
        <li>
          <NavBarLink href="#work">Work</NavBarLink>
        </li>
        <li>
          <NavBarLink href="#testimonials">Testimonials</NavBarLink>
        </li>
      </ul>
      <nav className="grid grid-flow-col gap-4">
        <a>
          <PiInstagramLogoFill
            size={30}
            className="hover:text-accent cursor-pointer transition-all duration-200"
          />
        </a>
        <a>
          <PiFacebookLogoFill
            size={30}
            className="hover:text-accent cursor-pointer transition-all duration-200"
          />
        </a>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by 93
          North Studio
        </p>
      </aside>
    </footer>
  );
}

export default Footer;

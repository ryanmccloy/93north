import Button from "../reusable/Button";
import Logo from "../reusable/Logo";
import NavBarLink from "../reusable/NavBarLink";

export default function Header() {
  return (
    <div className="navbar fixed backdrop-blur-sm shadow-xs z-50 w-full px-0 py-2 ">
      <div className="width-size flex justify-between items-center w-full ">
        <div className="navbar-start  ">
          <div className="dropdown hover:cursor-pointer text-off-black">
            <div tabIndex={0} role="button" className=" mr-30 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-off-white"
                fill="none"
                viewBox="0 0 20 20"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="btn-hover-accent">About</a>
              </li>
              <li>
                <a className="btn-hover-accent">Services</a>
              </li>
              <li>
                <a className="btn-hover-accent">Work</a>
              </li>
              <li>
                <a className="btn-hover-accent">Testimonials</a>
              </li>
              <li>
                <a className="btn-hover-accent">Contact</a>
              </li>
            </ul>
          </div>

          <Logo />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-30">
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
        </div>
        <div className="navbar-end ">
          <Button link={true} href="#contact">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}

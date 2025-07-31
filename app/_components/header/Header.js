import Logo from "../landing/Logo";

export default function Header() {
  return (
    <div className="navbar fixed text-off-white shadow-sm z-50 w-full px-0 py-4 ">
      <div className="width-size flex justify-between items-center w-full ">
        <div className="navbar-start  ">
          <div className="dropdown hover:cursor-pointer text-off-black">
            <div
              tabIndex={0}
              role="button"
              className="btn-ghost border-none shadow-sm mr-15 lg:hidden"
            >
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
          <ul className="menu menu-horizontal px-2">
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
          </ul>
        </div>
        <div className="navbar-end ">
          <a className="btn">Contact</a>
        </div>
      </div>
    </div>
  );
}

import Logo from "../reusable/Logo";
import SmallBurgerNavLink from "../reusable/SmallBurgerNavLink";

function NavStart({ sections }) {
  return (
    <div className="navbar-start  ">
      <div className="dropdown cursor-pointer text-off-black">
        <button
          aria-label="Open navigation menu"
          className=" mr-30 lg:hidden cursor-pointer"
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
        </button>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
        >
          {sections.map((section) => {
            return (
              <li key={section}>
                <SmallBurgerNavLink href={`#${section}`}>
                  {section}
                </SmallBurgerNavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <Logo />
    </div>
  );
}

export default NavStart;

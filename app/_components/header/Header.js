import NavCenter from "./NavCenter";
import NavEnd from "./NavEnd";
import NavStart from "./NavStart";

export default function Header() {
  return (
    <nav
      className="navbar fixed backdrop-blur-sm shadow-xs z-50 w-full px-0 py-2 "
      aria-label="Primary Navigation"
    >
      <div className="width-size flex justify-between items-center w-full ">
        <NavStart />
        <NavCenter />
        <NavEnd />
      </div>
    </nav>
  );
}

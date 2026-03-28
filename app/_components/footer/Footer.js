import FooterNav from "./FooterNav";
import FooterSocials from "./FooterSocials";

function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center bg-secondary-grey text-dark rounded p-10">
      <FooterNav />
      <FooterSocials />
      <aside className="flex flex-col gap-30 ">
        <a
          href="mailto:93NorthStudio@gmail.com"
          className="underline-animation-wrapper group pb-2"
        >
          <span className="relative z-10">93NorthStudio@gmail.com</span>
          <span className="underline-animation-bar" aria-hidden="true" />
        </a>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by 93
          North Studio
        </p>
      </aside>
    </footer>
  );
}

export default Footer;

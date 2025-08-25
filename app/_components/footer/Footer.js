import FooterNav from "./FooterNav";
import FooterSocials from "./FooterSocials";

function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center bg-secondary-grey text-base-content rounded p-10">
      <FooterNav />
      <FooterSocials />
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

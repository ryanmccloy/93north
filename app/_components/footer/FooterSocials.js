import { PiFacebookLogoFill, PiInstagramLogoFill } from "react-icons/pi";

function FooterSocials() {
  const socials = [
    {
      href: "https://instagram.com/93northstudio",
      icon: PiInstagramLogoFill,
      label: "Instagram",
    },
    {
      href: "https://www.facebook.com/profile.php?id=61579598112820",
      icon: PiFacebookLogoFill,
      label: "Facebook",
    },
  ];

  return (
    <nav className="grid grid-flow-col gap-4" aria-label="Social media links">
      {socials.map(({ href, icon: Icon, label }) => (
        <a key={label} href={href} rel="noopener noreferrer" target="_blank">
          <span className="sr-only">{label}</span>
          <Icon
            size={30}
            className="hover:text-accent cursor-pointer transition-all duration-200"
          />
        </a>
      ))}
    </nav>
  );
}

export default FooterSocials;

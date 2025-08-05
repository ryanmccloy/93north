import Image from "next/image";
import Link from "next/link";

function Logo({ height = 60, width = 60 }) {
  return (
    <Link href="/">
      <Image
        src="/logo/logo-no-bg.svg"
        alt="93 North Studio Logo"
        width={width}
        height={height}
      />
    </Link>
  );
}

export default Logo;

import Link from "next/link";
import Logo from "../assets/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();

  return (
    <nav className="nav">
      <div className="nav__title">
        <Image
          className="nav__title-logo"
          src={Logo}
          alt="logo"
          width="40"
          height="40"
        />
        <h1 className="nav__title-name">
          <Link href="/">Github Finder</Link>
        </h1>
      </div>
      {router.pathname === "/" ? null : <Link href="/">Go Back</Link>}
    </nav>
  );
};

export default Nav;

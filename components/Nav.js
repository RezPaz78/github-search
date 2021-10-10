import styles from "../styles/Nav.module.scss";
import Link from "next/link";
import Logo from "../assets/logo.png";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Image src={Logo} alt="logo" width="30" height="30" />
      <h1>
        <Link href="/">Github Finder</Link>
      </h1>
    </nav>
  );
};

export default Nav;

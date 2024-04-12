import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import HeaderNav from "./components/Nav";
import logo from "@src/shared/assets/logo.png";
import Image from "../Image";
const Header = () => {
  return (
    <header className={styles.header_bar}>
      <h1>
        <Link to="/">
          <Image imageUrl={logo} alt="메인로고" height={24} />
        </Link>
      </h1>
      <HeaderNav />
    </header>
  );
};

export default Header;

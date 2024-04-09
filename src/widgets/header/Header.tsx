import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import HeaderNav from "./components/Nav";
const Header = () => {
  return (
    <header className={styles.header_bar}>
      <h1>
        <Link to="/">YEOYEONG</Link>
      </h1>
      <HeaderNav />
    </header>
  );
};

export default Header;

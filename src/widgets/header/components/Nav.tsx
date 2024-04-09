import styles from "@src/widgets/header/Header.module.scss";
import HeaderCategory from "./Category";
import AuthButtonWrap from "./AuthButtonWrap";
import SearchArea from "./SearchArea";

const HeaderNav = () => {
  return (
    <nav className={styles.header_nav}>
      <HeaderCategory />
      <SearchArea />
      <AuthButtonWrap />
    </nav>
  );
};

export default HeaderNav;

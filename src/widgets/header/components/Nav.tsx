import styles from "@src/widgets/header/Header.module.scss";
import HeaderCategory from "./Category";
import GuestButtonWrap from "./GuestButtonWrap";
import SearchArea from "./SearchArea";
import CategoryTablet from "./Category-tablet";
import UserButtonWrap from "./UserButtonWrap";
import authStore from "@src/shared/store/auth-store";

const HeaderNav = () => {
  const { userInfo } = authStore();

  return (
    <nav className={styles.header_nav}>
      <HeaderCategory />
      <CategoryTablet />
      <SearchArea />
      {!userInfo.accessToken ? <GuestButtonWrap /> : <UserButtonWrap />}
    </nav>
  );
};

export default HeaderNav;

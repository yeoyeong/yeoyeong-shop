import styles from "@src/widgets/header/Header.module.scss";
import HeaderCategory from "./Category";
import GuestButtonWrap from "./GuestButtonWrap";
import SearchArea from "./SearchArea";
import CategoryTablet from "./Category-tablet";
import UserButtonWrap from "./UserButtonWrap";
import authStore from "@src/shared/store/auth-store";

const HeaderNav = () => {
  const { userInfo } = authStore();
  //로그아웃 함수
  // const handleLogout = async () => {
  //   try {
  //     await signOut(auth);
  //     console.log("User logged out successfully");
  //   } catch (error) {
  //     console.error("Error logging out:", error);
  //   }
  // };

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

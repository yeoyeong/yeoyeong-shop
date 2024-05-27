import styles from "@src/widgets/header/Header.module.scss";
import user_icon from "@src/shared/assets/user_icon.png";
import cart_icon from "@src/shared/assets/cart_icon.png";
import { Link } from "react-router-dom";
import authStore from "@src/shared/store/auth-store";
const UserButtonWrap = () => {
  const { userInfo } = authStore();
  return (
    <div className={styles.user_button_wrap}>
      <button>
        <img src={cart_icon} alt="장바구니 아이콘" />
      </button>
      <Link to="/myaccount">
        <figure>
          <img
            src={userInfo.photoURL ? userInfo.photoURL : user_icon}
            alt="유저 아이콘"
          />
        </figure>
      </Link>
    </div>
  );
};

export default UserButtonWrap;

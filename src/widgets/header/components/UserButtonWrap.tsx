import styles from "@src/widgets/header/Header.module.scss";
import user_icon from "@src/shared/assets/user_icon.png";
import cart_icon from "@src/shared/assets/cart_icon.png";
const UserButtonWrap = () => {
  return (
    <div className={styles.user_button_wrap}>
      <button>
        <img src={cart_icon} alt="장바구니 아이콘" />
      </button>
      <button>
        <img src={user_icon} alt="유저 아이콘" />
      </button>
    </div>
  );
};

export default UserButtonWrap;

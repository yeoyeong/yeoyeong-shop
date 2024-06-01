import { useNavigate } from "react-router-dom";
import styles from "./my_account-page.module.scss";
import CartIcon from "@src/shared/assets/cart_icon.svg?react";

const ToggleBtn = ({ myaccountstate }: { myaccountstate: string | null }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.toggle_button_wrap}>
      <button
        className={myaccountstate === "cart" ? styles.on : ""}
        onClick={() => {
          navigate("/myaccount?myaccountstate=cart");
        }}
      >
        <CartIcon />
      </button>
      {/* <button
        className={myaccountstate === "wish" ? styles.on : ""}
        onClick={() => {
          navigate("/myaccount?myaccountstate=wish");
        }}
      >
        Wish
      </button> */}
    </div>
  );
};

export default ToggleBtn;

import styles from "./my_account-page.module.scss";
import CartIcon from "@src/shared/assets/cart_icon.svg?react";

interface Props {
  toggle: string;
  setToggle: React.Dispatch<React.SetStateAction<string>>;
}

const ToggleBtn = ({ toggle, setToggle }: Props) => {
  return (
    <div className={styles.toggle_button_wrap}>
      <button
        className={toggle === "cart" ? styles.on : ""}
        onClick={() => {
          setToggle("cart");
        }}
      >
        <CartIcon />
      </button>
      <button
        className={toggle === "wish" ? styles.on : ""}
        onClick={() => {
          setToggle("wish");
        }}
      >
        Wish
      </button>
    </div>
  );
};

export default ToggleBtn;

import useModalNavigate from "@src/shared/hooks/useModalNavigate";
import styles from "@src/widgets/header/Header.module.scss";

const GuestButtonWrap = () => {
  const { modalNavigate } = useModalNavigate();

  return (
    <div className={styles.guest_button_wrap}>
      <button onClick={() => modalNavigate("login")}>로그인</button>
      <button onClick={() => modalNavigate("join")}>회원가입</button>
    </div>
  );
};

export default GuestButtonWrap;

import JoinPage from "@src/pages/Join/join-page";
import LoginPage from "@src/pages/Login/login-page";
import useToggle from "@src/shared/hooks/useToggleHook";
import ModalToggleButton from "@src/widgets/ModalToggleButton";
import styles from "@src/widgets/header/Header.module.scss";

const GuestActionButtonWrap = () => {
  const { toggle: loginModalToggle, ToggleHandler: loginToggleHandler } =
    useToggle();
  const { toggle: joinModalToggle, ToggleHandler: joinToggleHandler } =
    useToggle();
  return (
    <div className={styles.guest_button_wrap}>
      <ModalToggleButton
        title={"로그인"}
        toggleHandler={loginToggleHandler}
        modalToggle={loginModalToggle}
        Page={<LoginPage />}
      />
      <ModalToggleButton
        title={"회원가입"}
        toggleHandler={joinToggleHandler}
        modalToggle={joinModalToggle}
        Page={<JoinPage />}
      />
    </div>
  );
};

export default GuestActionButtonWrap;

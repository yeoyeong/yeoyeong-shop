import useInput from "@src/shared/hooks/useInput";
import styles from "./login-form.module.scss";
import { Link } from "react-router-dom";
import useModalNavigate from "@src/shared/hooks/useModalNavigate";
const LoginForm = () => {
  const id = useInput("");
  const password = useInput("");

  const { modalNavigate } = useModalNavigate();

  return (
    <form className={styles.login_form}>
      <div className={styles.input_wrap}>
        <p>ID</p>
        <input
          type="text"
          value={id.value}
          onChange={id.onChange}
          onKeyUp={(e) => id.cutByLen(e, 10)}
        />
      </div>
      <div className={styles.input_wrap}>
        <p>PASSWORD</p>
        <input
          type="password"
          value={password.value}
          onChange={password.onChange}
          onKeyUp={(e) => password.cutByLen(e, 20)}
        />
      </div>
      <button type="submit" className={styles.login_btn}>
        LOGIN
      </button>
      <Link to="" className={styles.password_forgot_link}>
        forgot your password?
      </Link>
      <button
        onClick={() => modalNavigate("join")}
        className={styles.signup_link}
      >
        Signup
      </button>
    </form>
  );
};

export default LoginForm;

import useInput from "@src/shared/hooks/useInput";
import styles from "./login-form.module.scss";
import { Link } from "react-router-dom";
import useModalNavigate from "@src/shared/hooks/useModalNavigate";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@src/shared/libs/firebase-config";

const LoginForm = () => {
  const email = useInput("");
  const password = useInput("");

  const { modalNavigate, removeModalQueryParam } = useModalNavigate();

  const sumbitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        // console.log(user);
        // ID 토큰 가져오기
        email.setValue("");
        password.setValue("");
        removeModalQueryParam();
        // user.getIdToken().then((idToken) => {
        //   // ID 토큰을 로컬 스토리지에 저장
        //   localStorage.setItem("userToken", idToken);
        // });
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        alert("로그인에 실패하였습니다 아이디 또는 비밀번호를 확인해주세요.");
      });
  };

  return (
    <form onSubmit={sumbitHandler} className={styles.login_form}>
      <div className={styles.input_wrap}>
        <p>EMAIL</p>
        <input
          type="text"
          value={email.value}
          onChange={email.onChange}
          onKeyUp={(e) => email.cutByLen(e, 30)}
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

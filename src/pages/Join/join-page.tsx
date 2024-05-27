import AuthLayout from "@src/widgets/layout/modal/Auth-layout";
import styles from "./join-page.module.scss";
import useInput from "@src/shared/hooks/useInput";
import { useEffect, useState } from "react";
import PassWordForm from "@src/pages/Join/entities/ui/pw-form";
import EmailForm from "@src/pages/Join/entities/ui/email-form";
import JoinNavigateBtn from "@src/pages/Join/entities/ui/navigate-btn";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@src/shared/libs/firebase-config";

const JoinPage = () => {
  const [pageState, setPageState] = useState(0);
  const password = useInput("");
  const passwordCheck = useInput("");
  const email = useInput("");
  // const auth = getAuth();

  const sumbitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (pageState !== 1) return;
    submitForm();
  };

  const submitForm = () => {
    if (password.value !== passwordCheck.value) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    if (!password.validationPasswordHadler()) return;
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setPageState(2);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };
  useEffect(() => {
    console.log(pageState);
  }, [pageState]);

  return (
    <AuthLayout>
      <form onSubmit={sumbitHandler} className={styles.join_form_wrap}>
        {/* {pageState === 0 && <IdForm id={id} />} */}
        {pageState === 0 && (
          <EmailForm email={email} setPageState={setPageState} />
        )}
        {pageState === 1 && (
          <PassWordForm password={password} passwordCheck={passwordCheck} />
        )}
        {pageState === 2 && (
          <p>
            회원가입을 <br />
            축하합니다 🎉
          </p>
        )}
        <JoinNavigateBtn
          pageState={pageState}
          setPageState={setPageState}
          validationEmailHadler={email.validationEmailHadler}
          validationPasswordHadler={password.validationPasswordHadler}
        />
      </form>
    </AuthLayout>
  );
};

export default JoinPage;

import AuthLayout from "@src/widgets/layout/modal/Auth-layout";
import IdForm from "../../entities/ui/Join/id-form";
import styles from "./join-page.module.scss";
import useInput from "@src/shared/hooks/useInput";
import { useEffect, useState } from "react";
import PassWordForm from "@src/entities/ui/Join/pw-form";
import EmailForm from "@src/entities/ui/Join/email-form";
import JoinNavigateBtn from "@src/entities/ui/Join/navigate-btn";
const JoinPage = () => {
  const [pageState, setPageState] = useState(0);
  const id = useInput("");
  const password = useInput("");
  const email = useInput("");

  const sumbitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  useEffect(() => {
    console.log(pageState);
  }, [pageState]);
  return (
    <AuthLayout>
      <form onSubmit={sumbitHandler} className={styles.join_form_wrap}>
        {pageState === 0 && <IdForm id={id} />}
        {pageState === 1 && <PassWordForm password={password} />}
        {pageState === 2 && <EmailForm email={email} />}
        <JoinNavigateBtn pageState={pageState} setPageState={setPageState} />
      </form>
    </AuthLayout>
  );
};

export default JoinPage;

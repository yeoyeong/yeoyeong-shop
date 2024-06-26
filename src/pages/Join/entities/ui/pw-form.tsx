import styles from "@src/pages/Join/join-page.module.scss";

interface Props {
  password: {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    onChange: (event: any) => void;
    cutByLen: (e: any, limit: number) => void;
  };
  passwordCheck: {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    onChange: (event: any) => void;
    cutByLen: (e: any, limit: number) => void;
  };
}
const PassWordForm = ({ password, passwordCheck }: Props) => {
  return (
    <div className={styles.password_box}>
      <div className={styles.input_wrap}>
        <p>PASSWORD</p>
        <input
          type="password"
          value={password.value}
          onChange={password.onChange}
          onKeyUp={(e) => password.cutByLen(e, 10)}
          autoFocus
        />
      </div>
      <div className={styles.input_wrap}>
        <p>PASSWORD CHECK</p>
        <input
          type="password"
          value={passwordCheck.value}
          onChange={passwordCheck.onChange}
          onKeyUp={(e) => passwordCheck.cutByLen(e, 10)}
        />
      </div>
    </div>
  );
};

export default PassWordForm;

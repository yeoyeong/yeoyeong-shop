import styles from "@src/pages/Join/join-page.module.scss";

interface Props {
  email: {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    onChange: (event: any) => void;
    cutByLen: (e: any, limit: number) => void;
  };
}
const EmailForm = ({ email }: Props) => {
  return (
    <div className={styles.input_wrap}>
      <p>E-mail</p>
      <input
        type="text"
        value={email.value}
        onChange={email.onChange}
        onKeyUp={(e) => email.cutByLen(e, 10)}
      />
    </div>
  );
};

export default EmailForm;

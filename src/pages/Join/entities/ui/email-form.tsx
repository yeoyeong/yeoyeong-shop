import styles from "@src/pages/Join/join-page.module.scss";

interface Props {
  email: {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    onChange: (event: any) => void;
    cutByLen: (e: any, limit: number) => void;
    validationEmailHadler: () => boolean;
  };
  setPageState: React.Dispatch<React.SetStateAction<number>>;
}
const EmailForm = ({ email, setPageState }: Props) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (email.validationEmailHadler()) {
        setPageState((prev) => (prev >= 1 ? prev : prev + 1));
      }
    }
  };

  return (
    <div className={styles.input_wrap}>
      <p>E-mail</p>
      <input
        type="text"
        value={email.value}
        onChange={email.onChange}
        onKeyUp={(e) => email.cutByLen(e, 30)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default EmailForm;

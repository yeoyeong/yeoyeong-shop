import styles from "@src/pages/Join/join-page.module.scss";

interface Props {
  id: {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    onChange: (event: any) => void;
    cutByLen: (e: any, limit: number) => void;
  };
}
const IdForm = ({ id }: Props) => {
  return (
    <div className={styles.input_wrap}>
      <p>ID</p>
      <input
        type="text"
        value={id.value}
        onChange={id.onChange}
        onKeyUp={(e) => id.cutByLen(e, 10)}
      />
    </div>
  );
};

export default IdForm;

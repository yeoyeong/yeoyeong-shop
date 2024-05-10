import styles from "@src/pages/Join/join-page.module.scss";

interface Props {
  pageState: number;
  setPageState: React.Dispatch<React.SetStateAction<number>>;
}
const JoinNavigateBtn = ({ pageState, setPageState }: Props) => {
  return (
    <div className={styles.navigate_btn_wrap}>
      {pageState !== 0 && (
        <button
          className={styles.prev_btn}
          onClick={() => setPageState((prev) => (prev <= 0 ? prev : prev - 1))}
        >
          Prev
        </button>
      )}
      {pageState < 2 && (
        <button
          className={styles.next_btn}
          onClick={() => setPageState((prev) => (prev >= 2 ? prev : prev + 1))}
        >
          Next
        </button>
      )}
      {pageState === 2 && (
        <button
          className={styles.next_btn}
          onClick={() => setPageState((prev) => (prev >= 2 ? prev : prev + 1))}
        >
          Success
        </button>
      )}
    </div>
  );
};

export default JoinNavigateBtn;

import styles from "@src/pages/Join/join-page.module.scss";
import useModalNavigate from "@src/shared/hooks/useModalNavigate";

interface Props {
  pageState: number;
  setPageState: React.Dispatch<React.SetStateAction<number>>;
  validationEmailHadler: () => boolean;
  validationPasswordHadler: () => boolean;
}
const JoinNavigateBtn = ({
  pageState,
  setPageState,
  validationEmailHadler,
}: Props) => {
  const { removeModalQueryParam } = useModalNavigate();

  // const a = () => {
  //   if (validationState === "빈칸") return alert("이메일을 입력해주세요.");
  //   console.log("?");
  //   console.log(validationState);
  // };
  return (
    <div className={styles.navigate_btn_wrap}>
      {pageState !== 0 && pageState < 2 && (
        <button
          type="button"
          className={styles.prev_btn}
          onClick={() => {
            setPageState((prev) => (prev <= 0 ? prev : prev - 1));
          }}
        >
          Prev
        </button>
      )}
      {pageState === 0 && (
        <button
          type="button"
          className={styles.next_btn}
          onClick={() => {
            if (validationEmailHadler()) {
              setPageState((prev) => prev + 1);
            }
          }}
        >
          Next
        </button>
      )}
      {pageState === 1 && (
        <button className={styles.next_btn} type="submit">
          Success
        </button>
      )}
      {pageState === 2 && (
        <button
          type="button"
          className={styles.next_btn}
          onClick={removeModalQueryParam}
        >
          완료
        </button>
      )}
    </div>
  );
};

export default JoinNavigateBtn;

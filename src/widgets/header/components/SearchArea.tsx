import useInput from "@src/shared/hooks/useInput";
import styles from "@src/widgets/header/Header.module.scss";
import { useNavigate, useSearchParams } from "react-router-dom";

const SearchArea = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const search_value = searchParams.get("value");
  const search = useInput(search_value ? search_value : "");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // 폼의 기본 제출 동작을 방지
    navigate(`/?category=search&value=${search.value}`);
    console.log("Form submitted!"); // 여기에 원하는 함수 로직을 추가
  };
  return (
    <form onSubmit={handleSubmit} className={styles.search_wrap}>
      <input
        type="text"
        placeholder="Search"
        value={search.value}
        onChange={search.onChange}
      />
    </form>
  );
};

export default SearchArea;

import styles from "@src/widgets/header/Header.module.scss";

const SearchArea = () => {
  return (
    <div className={styles.search_wrap}>
      <input type="text" placeholder="Search" />
    </div>
  );
};

export default SearchArea;

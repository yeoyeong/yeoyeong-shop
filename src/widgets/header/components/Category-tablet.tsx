import { categoryData } from "@src/shared/data/categoryData";
import { Link } from "react-router-dom";
import chevron_down from "@src/shared/assets/chevron-down.svg";
import useCategoryHookTablet from "@src/shared/hooks/category/useCategoryHook-tablet";
import styles from "@src/widgets/header/Header.module.scss";
import useNavToggleHook from "@src/shared/hooks/category/useNavToggleHook";
import useCategoryHook from "@src/shared/hooks/category/useCategoryHook";

const CategoryTablet = () => {
  const { buttonStyle, navStyle } = useCategoryHook();
  const { result } = useCategoryHookTablet();
  const { navToggle, navToggleHandler, ref } = useNavToggleHook();

  return (
    <div ref={ref}>
      <button className={styles.category_button} onClick={navToggleHandler}>
        <span style={buttonStyle(result.title)}>{result.title}</span>
        <img src={chevron_down} alt="화살표 아이콘" />
      </button>
      {navToggle && (
        <ul className={styles.header_category_tablet}>
          {categoryData.map(({ title, link }) => (
            <li key={title} className={navStyle(link)}>
              <Link to={link}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryTablet;

import { categoryData } from "@src/shared/data/categoryData";
import { Link } from "react-router-dom";
import styles from "@src/widgets/header/Header.module.scss";
import useCategoryHook from "@src/shared/hooks/category/useCategoryHook";

const HeaderCategory = () => {
  const { navStyle } = useCategoryHook();
  return (
    <>
      <ul className={styles.header_category}>
        {categoryData.map(({ title, link }) => (
          <li key={title}>
            <Link to={link} className={navStyle(link)}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HeaderCategory;

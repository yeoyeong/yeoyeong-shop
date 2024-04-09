import { categoryData } from "@src/shared/data/categoryData";
import { Link, useLocation } from "react-router-dom";
import styles from "@src/widgets/header/Header.module.scss";
import { useCallback, useMemo } from "react";
const HeaderCategory = () => {
  const { pathname, search } = useLocation();
  const params = new URLSearchParams(window.location.search);
  let category = params.get("category");

  const navStyle = useCallback(
    (link: string) =>
      category && link.includes(category)
        ? `${styles.on}`
        : !category && link === "/"
        ? `${styles.category_popular_on}`
        : "",
    [pathname, search]
  );

  return (
    <ul className={styles.header_category}>
      {categoryData.map(({ title, link }) => (
        <li key={title}>
          <Link to={link} className={navStyle(link)}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default HeaderCategory;

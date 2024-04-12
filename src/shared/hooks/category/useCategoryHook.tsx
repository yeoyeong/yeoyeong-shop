import { useCallback } from "react";
import { useLocation } from "react-router-dom";
import styles from "@src/widgets/header/Header.module.scss";

const useCategoryHook = () => {
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
  const buttonStyle = useCallback(
    (title: string) => (title === "POPULAR" ? { color: "var(--red)" } : {}),
    [pathname, search]
  );

  return { navStyle, buttonStyle, category };
};

export default useCategoryHook;

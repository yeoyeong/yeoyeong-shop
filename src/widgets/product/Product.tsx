import { useEffect, useState } from "react";
import ListSkeleton from "./list-skeleton";
import styles from "./product.module.scss";
import List from "./list";
import { useLocation } from "react-router-dom";
const Product = () => {
  const { pathname, search } = useLocation();
  const params = new URLSearchParams(window.location.search);
  let params_category = params.get("category");
  const [category, setCategory] = useState<string | null>("");

  useEffect(() => {
    setCategory(params_category);
  }, [pathname, search]);

  return (
    <section className={styles.product_wrap}>
      {/* <ListSkeleton /> */}
      <List category={category} />
    </section>
  );
};

export default Product;

import styles from "./product.module.scss";
import List from "./list";

const Product = () => {
  return (
    <section className={styles.product_wrap}>
      {/* <ListSkeleton /> */}
      <List />
    </section>
  );
};

export default Product;

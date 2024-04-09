import useMasonrySkeleton from "@src/shared/hooks/useMasonrySkeleton";
import styles from "./product.module.scss";
const ListSkeleton = () => {
  const { itemList } = useMasonrySkeleton([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27,
  ]);

  console.log(itemList.length);
  return itemList.map((itemLine, index) => {
    return (
      <div className={styles.items_line} key={Math.random()}>
        {itemLine.map((item) => (
          <>
            <div
              className={styles.item}
              key={item}
              style={
                Math.random() < 0.5 ? { height: "300px" } : { height: "200px" }
              }
            ></div>
            {/* <p className={styles.item_price}>000,000 won</p> */}
            <div className={styles.item_price_skeleton}></div>
          </>
        ))}
      </div>
    );
  });
};

export default ListSkeleton;

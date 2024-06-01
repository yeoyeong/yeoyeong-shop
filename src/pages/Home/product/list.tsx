import styles from "./product.module.scss";
import useMasonry from "@src/shared/hooks/useMasonry";
import { addCommasToNumber } from "@src/shared/data/regular_expression";
import ProductImage from "@src/features/image-product";
import { Link, useLocation } from "react-router-dom";
import { colorList } from "@src/shared/store/products.store-type";
import { checkPostWithinThreeMonths } from "@src/features/checkPostWithinThreeMonths ";

const List = () => {
  const { itemList, ref } = useMasonry();
  const { search } = useLocation();

  return itemList.map((itemLine, index) => {
    return (
      <div className={styles.items_line} key={index}>
        {itemLine.map((item) => (
          <Link to={`productdetail/${item.id}${search}`} key={item.id}>
            <div className={styles.item}>
              <ProductImage
                imageUrl={item.thumbnail}
                alt={item.title}
                height={300}
              />
              <div className={styles.item_hover}>
                <ul className={styles.icon_wrap}>
                  {checkPostWithinThreeMonths(item.createdAt) && (
                    <li className={styles.new_icon}>NEW</li>
                  )}
                  {item.rating > 3 && (
                    <li className={styles.best_icon}>BEST ★</li>
                  )}
                  {item.order_quantity > 500 && (
                    <li className={styles.popular_icon}>주문폭주</li>
                  )}
                </ul>
                <p className={styles.item_name}>{item.title}</p>
                <p className={styles.sub_title}>Size</p>
                <ul className={styles.size_wrap}>
                  {item.sizeList.map((el: string) => (
                    <li key={el}>{el}</li>
                  ))}
                </ul>
                <p className={styles.sub_title}>Color</p>
                <ul className={styles.color_palette}>
                  {item.colorList.map((color: colorList) => (
                    <li
                      key={color.colorCode}
                      style={{ backgroundColor: color.colorCode }}
                    ></li>
                  ))}
                </ul>
              </div>
            </div>
            <p className={styles.item_price}>
              {addCommasToNumber(item.price.toString())} won
            </p>
          </Link>
        ))}
        <div ref={ref} style={{ height: "1px" }} />
      </div>
    );
  });
};

export default List;

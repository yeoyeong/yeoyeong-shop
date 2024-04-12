import { product_list } from "@src/shared/data/mock_data";
import { Product } from "@src/shared/types/product";
import { useEffect, useState } from "react";
import styles from "./product.module.scss";
import useMasonry from "@src/shared/hooks/useMasonry";
import { addCommasToNumber } from "@src/shared/data/regular_expression";
import { checkPostWithinThreeMonths } from "@src/features/checkPostWithinThreeMonths ";
import ProductImage from "@src/features/product/image-product";

interface Props {
  category: string | null;
}

const List = ({ category }: Props) => {
  const [ProductList, setProductList] = useState<Product[]>([]);
  const { itemList } = useMasonry(ProductList);

  //임시
  const productCategoryFilter = () => {
    switch (category) {
      case null:
        setProductList(product_list.filter((el) => el.rating >= 4));
        break;
      case "outer":
        setProductList(product_list.filter((el) => el.category === "outer"));
        break;
      case "skirt":
        setProductList(product_list.filter((el) => el.category === "skirt"));
        break;
      case "top":
        setProductList(product_list.filter((el) => el.category === "top"));
        break;
      case "bottom":
        setProductList(product_list.filter((el) => el.category === "bottom"));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    productCategoryFilter();
  }, [category]);

  return itemList.map((itemLine, index) => {
    return (
      <div className={styles.items_line} key={index}>
        {itemLine.map((item) => (
          <>
            <div className={styles.item} key={item.id}>
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
                  <li className={styles.best_icon}>BEST ★</li>
                  <li className={styles.popular_icon}>주문폭주</li>
                  {/* {checkPostWithinThreeMonths(item.createdAt) && (
                    <li className={styles.new_icon}>NEW</li>
                  )}
                  {item.rating > 3 && (
                    <li className={styles.best_icon}>BEST ★</li>
                  )}
                  {item.order_quantity > 500 && (
                    <li className={styles.popular_icon}>주문폭주</li>
                  )} */}
                </ul>
                <p className={styles.item_name}>{item.title}</p>
                <p className={styles.sub_title}>Size</p>
                <ul className={styles.size_wrap}>
                  {item.size.map((el) => (
                    <li>{el}</li>
                  ))}
                </ul>
                <p className={styles.sub_title}>Color</p>
                <ul className={styles.color_palette}>
                  {Object.entries(item.color_list).map((el) => {
                    return <li style={{ backgroundColor: el[1] }}>{}</li>;
                  })}
                </ul>
              </div>
            </div>
            <p className={styles.item_price}>
              {addCommasToNumber(item.price.toString())} won
            </p>
          </>
        ))}
      </div>
    );
  });
};

export default List;

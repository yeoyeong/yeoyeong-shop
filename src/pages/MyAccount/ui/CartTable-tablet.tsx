import { CartProduct } from "@src/shared/store/products.store-type";
import styles from "./CartTable-tablet.module.scss";
import InputCheckBox from "../features/InputCheckBox";
import Image from "@src/widgets/Image";
import { addCommasToNumber } from "@src/shared/data/regular_expression";
import { stringToNumber } from "@src/shared/libs/stringToNumber";
import { Link } from "react-router-dom";

interface Props {
  data: { uid: string | undefined; cartList: CartProduct[] };
  checkItemList: CartProduct[];
  handleSingleCheck: (checkState: boolean, value: CartProduct) => void;
}

const CartTableTablet = ({ data, checkItemList, handleSingleCheck }: Props) => {
  console.log(data, checkItemList);
  return (
    <ul className={styles.cart_table_tablet_wrap}>
      <li className={styles.line}></li>
      {data.cartList &&
        data.cartList.map((item, index) => (
          <li key={index} className={styles.item_wrap}>
            <InputCheckBox
              id={index.toString()}
              value={item}
              checkItemList={checkItemList}
              handleSingleCheck={handleSingleCheck}
            />
            <div>
              <Link
                to={`/productdetail/${item.productId}`}
                className={styles.item_title}
              >
                {item.title}
              </Link>
              <div className={styles.item_contents}>
                <figure className={styles.image_wrap}>
                  <Image imageUrl={item.thumbnail} alt={item.title} />
                </figure>
                <div className={styles.option_wrap}>
                  <ul>
                    <li className={styles.cart_color}>
                      <p>Color</p>
                      <span
                        style={{ backgroundColor: item.color.colorCode }}
                      ></span>
                    </li>
                    <li className={styles.cart_size}>
                      <p>Size</p>
                      <span>{item.size}</span>
                    </li>
                    <li>
                      <p>배송비</p>
                      <span>
                        {item.shippingFee ? item.shippingFee : "무료배송"}
                      </span>
                    </li>
                    <li>
                      <p>수량</p>
                      <span>{item.count}</span>
                    </li>
                  </ul>
                  <p className={styles.item_price}>
                    {addCommasToNumber(
                      (stringToNumber(item.price) * item.count).toString()
                    )}
                    <span>won</span>
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default CartTableTablet;

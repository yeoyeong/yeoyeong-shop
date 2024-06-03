import { Link } from "react-router-dom";
import InputCheckBox from "../features/InputCheckBox";
import styles from "./CartTable-pc.module.scss";
import { addCommasToNumber } from "@src/shared/data/regular_expression";
import { stringToNumber } from "@src/shared/libs/stringToNumber";
import { CartProduct } from "@src/shared/store/products.store-type";

interface Props {
  data: { uid: string | undefined; cartList: CartProduct[] };
  checkItemList: CartProduct[];
  handleSingleCheck: (checkState: boolean, value: CartProduct) => void;
  handleAllCheck: (checked: boolean) => void;
  handleDeleteProduct: ({
    uid,
    checkItemList,
  }: {
    uid: string;
    checkItemList: CartProduct[];
  }) => void;
}

const CartTablePC = ({ data, checkItemList, handleSingleCheck }: Props) => {
  return (
    <>
      <table className={styles.cart_table_pc_wrap}>
        <thead>
          <tr>
            <th></th>
            <th>상품정보</th>
            <th>옵션</th>
            <th>상품금액</th>
            <th>배송비</th>
            <th>수량</th>
          </tr>
        </thead>
        <tbody>
          {data.cartList &&
            data.cartList.map((item, index) => (
              <tr key={index}>
                <td className={styles.cart_checkbox}>
                  <InputCheckBox
                    id={index.toString()}
                    value={item}
                    checkItemList={checkItemList}
                    handleSingleCheck={handleSingleCheck}
                  />
                </td>
                <td className={styles.cart_title}>
                  <Link to={`/productdetail/${item.productId}`}>
                    {item.title}
                  </Link>
                </td>
                <td>
                  <ul className={styles.option_wrap}>
                    <li className={styles.cart_color}>
                      <p>
                        {item.color.colorName}
                        <span
                          style={{ backgroundColor: item.color.colorCode }}
                        ></span>
                      </p>
                    </li>
                    <li className={styles.cart_size}>
                      <p>
                        size
                        <span>{item.size}</span>
                      </p>
                    </li>
                  </ul>
                </td>
                <td>
                  {addCommasToNumber(
                    (stringToNumber(item.price) * item.count).toString()
                  )}
                  <span>won</span>
                </td>
                <td>{item.shippingFee ? item.shippingFee : "무료배송"}</td>
                <td>{item.count}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default CartTablePC;

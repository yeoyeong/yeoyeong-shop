import { useState } from "react";
import InputCheckBox from "./features/InputCheckBox";
import useGetCartList from "./features/query/useGetCartList";
import { stringToNumber } from "@src/shared/libs/stringToNumber";
import { addCommasToNumber } from "@src/shared/data/regular_expression";
import styles from "./CartList.module.scss";
import { CartProduct } from "@src/shared/store/products.store-type";
import InputAllCheckBox from "./features/InputAllCheckBox";
import useDeletetoCart from "./features/query/useDeleteToCart";

const CartList = () => {
  const { data, isLoading, isSuccess } = useGetCartList();
  const { handleDeleteProduct } = useDeletetoCart();
  const [checkItemList, setCheckItemList] = useState<CartProduct[]>([]);

  const handleSingleCheck = (checkState: boolean, value: CartProduct) => {
    if (checkState) setCheckItemList((prev) => [...prev, value]);
    else setCheckItemList((prev) => prev.filter((el) => el !== value));
  };
  const handleAllCheck = (checked: boolean) => {
    if (checked) {
      setCheckItemList((prevState) => [...prevState, ...data.cartList]);
    } else {
      setCheckItemList([]);
    }
  };

  if (isLoading) {
    return <div>로딩중</div>;
  }

  if (isSuccess) {
    return (
      <section className={styles.cart_list_wrap}>
        <table className={styles.cart_table_wrap}>
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
            {data.cartList.map((item, index) => (
              <tr key={index}>
                <td className={styles.cart_checkbox}>
                  <InputCheckBox
                    id={index.toString()}
                    value={item}
                    checkItemList={checkItemList}
                    handleSingleCheck={handleSingleCheck}
                  />
                </td>
                <td className={styles.cart_title}>{item.title}</td>
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
        <div className={styles.cart_button_wrap}>
          <div>
            {/* <span className={styles.cart_button_left}> */}
            <InputAllCheckBox
              id={"allCheck"}
              checkItemList={checkItemList}
              defaultDataLength={data.cartList.length}
              handleAllCheck={handleAllCheck}
              title={"전체선택"}
            />
            {/* </span> */}
          </div>
          <div>
            <button
              onClick={() =>
                handleDeleteProduct({ uid: data.uid ?? "error", checkItemList })
              }
              className={styles.cart_delete_btn}
            >
              선택항목삭제
            </button>
            <button className={styles.cart_buy_btn}>구매하기</button>
          </div>
        </div>
      </section>
    );
  }
};

export default CartList;

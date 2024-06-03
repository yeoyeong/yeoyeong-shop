import { useState } from "react";
import InputCheckBox from "./features/InputCheckBox";
import useGetCartList from "./features/query/useGetCartList";
import { stringToNumber } from "@src/shared/libs/stringToNumber";
import { addCommasToNumber } from "@src/shared/data/regular_expression";
import styles from "./CartList.module.scss";
import { CartProduct } from "@src/shared/store/products.store-type";
import InputAllCheckBox from "./features/InputAllCheckBox";
import useDeletetoCart from "./features/query/useDeleteToCart";
import { Link } from "react-router-dom";
import CartTablePC from "./ui/CartTable-pc";
import CartTableTablet from "./ui/CartTable-tablet";

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
        <CartTablePC
          data={data}
          checkItemList={checkItemList}
          handleAllCheck={handleAllCheck}
          handleSingleCheck={handleSingleCheck}
          handleDeleteProduct={handleDeleteProduct}
        />
        <CartTableTablet
          data={data}
          checkItemList={checkItemList}
          handleSingleCheck={handleSingleCheck}
        />
        <div className={styles.cart_button_wrap}>
          <div className={styles.cart_all_check_wrap}>
            {/* <span className={styles.cart_button_left}> */}
            <InputAllCheckBox
              id={"allCheck"}
              checkItemList={checkItemList}
              defaultDataLength={data.cartList ? data.cartList.length : 0}
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

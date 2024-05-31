import authStore from "@src/shared/store/auth-store";
import useAddtoCart from "../queries/useAddToCart";
import styles from "./detail-form.module.scss";
import { colorList } from "@src/shared/store/products.store-type";
const AddToCartButton = ({
  productId,
  size,
  color,
}: {
  productId: string;
  size: string;
  color: colorList;
}) => {
  const { userInfo } = authStore();
  const { handleAddProduct } = useAddtoCart({
    productId,
    uid: userInfo.uid,
    size,
    color,
  });
  return (
    <div className={styles.detail_button_wrap}>
      <button onClick={handleAddProduct} className={styles.add_to_cart_button}>
        ADD TO CART
      </button>
    </div>
  );
};

export default AddToCartButton;

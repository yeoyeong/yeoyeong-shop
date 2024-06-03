import { Product, colorList } from "@src/shared/store/products.store-type";
import styles from "./detail-form.module.scss";
import ProductImage from "@src/features/image-product";
import { checkPostWithinThreeMonths } from "@src/features/checkPostWithinThreeMonths ";
import AddToCartButton from "./AddToCartButton";
import Option from "./Option";
import useInput from "@src/shared/hooks/useInput";
import { useState } from "react";

interface Props {
  data: Product;
}
const DetailForm = ({ data }: Props) => {
  const [color, setColor] = useState<colorList>(data.colorList[0]);
  const size = useInput(data.sizeList[0]);

  const colorOnChnage = (e: any) => {
    const value = e.target.value.split(",");
    setColor({
      colorName: value[0],
      colorCode: value[1],
    });
  };
  return (
    <section>
      <ul className={styles.detail_form_wrap}>
        <li className={styles.image_wrap}>
          <div>
            <ProductImage imageUrl={data.thumbnail} alt={"상품이미지"} />
          </div>
        </li>
        <li className={styles.detail_description}>
          <ul className={styles.icon_wrap}>
            {checkPostWithinThreeMonths(data.createdAt) && (
              <li className={styles.new_icon}>NEW</li>
            )}
            {data.rating > 3 && <li className={styles.best_icon}>BEST ★</li>}
            {data.order_quantity > 500 && (
              <li className={styles.popular_icon}>주문폭주</li>
            )}
          </ul>
          <h2 className={styles.detail_product_name}>{data.title}</h2>
          <strong className={styles.detail_product_category}>
            {data.category}
          </strong>
          <p className={styles.datail_product_price}>
            {data.price}
            <span>won</span>
          </p>
          <p className={styles.detail_product_content}>{data.content}</p>
          <ul className={styles.detail_product_delivery}>
            <li>
              <p>배송 정보</p>
            </li>
            <li>
              <p className={styles.detail_product_delivery_price}>무료 배송</p>
              <p
                className={styles.detail_product_delivery_time}
              >{`모레 8/24(목) 도착 예정`}</p>
            </li>
          </ul>
          <Option
            colorOnchange={colorOnChnage}
            sizeOnchange={size.onChange}
            colorList={data.colorList}
            sizeList={data.sizeList}
          />
          <AddToCartButton
            productId={data.id}
            color={color}
            size={size.value}
          />
        </li>
      </ul>
    </section>
  );
};

export default DetailForm;

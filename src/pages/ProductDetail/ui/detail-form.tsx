import styles from "./detail-form.module.scss";
import test_img from "/test.jpg";
import ProductImage from "@src/features/image-product";

const DetailForm = () => {
  return (
    <section>
      <ul className={styles.detail_form_wrap}>
        <li className={styles.image_wrap}>
          <div>
            <ProductImage imageUrl={test_img} alt={"상품이미지"} />
          </div>
        </li>
        <li className={styles.detail_description}>
          <ul className={styles.icon_wrap}>
            <li className={styles.new_icon}>NEW</li>
            <li className={styles.best_icon}>BEST ★</li>
            <li className={styles.popular_icon}>주문폭주</li>
          </ul>
          <h2 className={styles.detail_product_name}>
            {`[당일발송🚚][꽈배기니트][MNLB] 클래식 코튼 케이블 라운드넥 니트`}
          </h2>
          <strong className={styles.detail_product_category}>BOTTOM</strong>
          <p className={styles.datail_product_price}>
            129,300<span>won</span>
          </p>
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
        </li>
      </ul>
    </section>
  );
};

export default DetailForm;

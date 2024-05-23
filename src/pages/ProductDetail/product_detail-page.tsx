import Layout from "@src/widgets/layout/Layout";
import DetailForm from "./ui/detail-form";
import styles from "./product_detail-page.module.scss";
const ProductDetailPage = () => {
  return (
    <Layout>
      <div className={styles.product_detail_wrap}>
        <DetailForm />
        <section>상세 설명</section>
        <section>
          REVIEW {"("}
          <span>0</span>
          {")"}
        </section>
        <section>
          QnA {"("}
          <span>0</span>
          {")"}
        </section>
        <aside>
          <ul>
            <li>PRODUCT</li>
            <li>REVIEW</li>
            <li>QnA</li>
          </ul>
        </aside>
      </div>
    </Layout>
  );
};

export default ProductDetailPage;

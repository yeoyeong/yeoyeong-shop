import Layout from "@src/widgets/layout/Layout";
import DetailForm from "./ui/detail-form";
import styles from "./product_detail-page.module.scss";
import useGetDetailProduct from "./queries/useGetDetail";
import { useParams } from "react-router-dom";
import ProductImage from "@src/features/image-product";
const ProductDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetDetailProduct(id as string);

  if (isError) {
    <Layout>다시 시도해주세요.</Layout>;
  }
  // 로딩 중일 때
  if (isLoading) {
    return <Layout>로딩 중...</Layout>;
  }
  return (
    <Layout>
      <div className={styles.product_detail_wrap}>
        <DetailForm data={data} />
        <section className={styles.product_detail_content}>
          <ProductImage imageUrl={data.detailImg} alt="상세 설명" />
        </section>
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
        {/* <aside>
          <ul>
            <li>PRODUCT</li>
            <li>REVIEW</li>
            <li>QnA</li>
          </ul>
        </aside> */}
      </div>
    </Layout>
  );
};

export default ProductDetailPage;

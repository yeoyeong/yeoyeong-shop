import Layout from "@src/widgets/layout/Layout";

const ProductDetailPage = () => {
  return (
    <Layout>
      <section>
        <div>사진영역</div>
        <div>설명 영역</div>
      </section>
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
    </Layout>
  );
};

export default ProductDetailPage;

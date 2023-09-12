"use client";
import { useParams } from "next/navigation";
import ProductGustation from "@/app/components/ProductGustation";

export default function Product() {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="container">
      <section className="info">
        <article className="info_image">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </article>
        <article>
          <span>[모자]</span>
          <h1>[23SS 최신상] MORGAN 수트 셋업 3종</h1>
          <strong>129,300원</strong>
        </article>
      </section>
      <section>
        <div></div>
      </section>
      <ProductGustation
        product_type={{
          title: "관련 상품 더보기",
          id: "more_related_products",
        }}
      />
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .info {
          display: flex;
          justify-content: center;
          width: 100%;
        }
        .info_image {
          width: 30%;
          margin-right: 20px;
        }
        .info_image div {
          width: 19%;
          padding-bottom: 19%;
          background-color: gray;
          display: inline-block;
          margin-right: 1.25%;
        }
        .info_image div:first-child {
          width: 100%;
          padding-bottom: 100%;
          background-color: red;
          margin-bottom: 20px;
          margin-right: 0;
        }
        .info_image div:last-child {
          margin-right: 0;
        }
      `}</style>
    </div>
  );
}

"use client";
import Image from "next/image";
import ProductGustation from "./components/ProductGustation";

export default function Home() {
  return (
    <div className="container">
      <article className="visual_area">
        <Image
          src="/main-visual_img02.jpeg"
          width={1930}
          height={750}
          alt="옷 사진"
        />
      </article>
      <ProductGustation product_type={{ title: "상의", id: "top" }} />
      <ProductGustation product_type={{ title: "하의", id: "pants" }} />
      <ProductGustation product_type={{ title: "모자", id: "hat" }} />
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .visual_area {
          width: 100%;
          max-width: 1400px;
          height: 660px;
          background-color: var(--gray);
          margin: 0 auto;
          overflow: scroll;
          overflow-y: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @media (min-width 1400px) {
          .visual_area {
            overflow: hidden;
          }
        }
      `}</style>
    </div>
  );
}

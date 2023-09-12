import Link from "next/link";
import { useRouter } from "next/navigation";

interface Props {
  product_type: {
    title: string;
    id: string;
  };
}
export default function ProductGustation({ product_type }: Props) {
  const router = useRouter();
  return (
    <section>
      <h3 className="sub_title">{product_type.title}</h3>
      <div className="contants">
        <Link href={`product/${"ID"}`}>
          <div></div>
        </Link>
        <Link href={`product/${"ID"}`}>
          <div></div>
        </Link>
        <Link href={`product/${"ID"}`}>
          <div></div>
        </Link>
        <Link href={`product/${"ID"}`}>
          <div></div>
        </Link>
      </div>
      <button
        className="more"
        onClick={() => router.push(`shop/${product_type.id}`)}
      >
        {"더보기 >"}
      </button>
      <style jsx>{`
        section {
          padding-top: 141px;
          width: 100%;
          max-width: 1400px;
        }
        .sub_title {
          font-size: 30px;
          margin-bottom: 4px;
        }
        .contants {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 30px));
          grid-gap: 13.333px;
          justify-content: center;
          margin: 30px 0;
        }
        .contants div {
          display: block;
          height: 240px;
          background-color: var(--gray);
        }
        .more {
          display: block;
          padding: 7px 38px;
          border: 1px solid #9f9f9f;
          background-color: transparent;
          border-radius: 5px;
          font-size: 18px;
          margin: 0 auto;
          cursor: pointer;
        }
        @media (max-width: 693px) {
          .contants {
            grid-template-columns: repeat(auto-fit, minmax(90%, 90%));
          }
          .contants div {
            height: auto;
            padding-bottom: 80%;
          }
        }
      `}</style>
    </section>
  );
}

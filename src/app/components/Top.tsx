import Link from "next/link";

export default function Top() {
  return (
    <section>
      <h3 className="sub_title">상의</h3>
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
      <button className="more">{"더보기 >"}</button>
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
          height: 240px;
           {
            /* width: 340px;
          height: 396px; */
          }
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
      `}</style>
    </section>
  );
}

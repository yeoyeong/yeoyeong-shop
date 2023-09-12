import Link from "next/link";

interface Props {
  product_type: string;
}

const mock_data = [
  {
    product_id: 1,
    product_type: "모자",
    product_name: "무슨무슨옷",
  },
  {
    product_id: 2,
    product_type: "모자",
    product_name: "무슨무슨옷",
  },
  {
    product_id: 3,
    product_type: "모자",
    product_name: "무슨무슨옷",
  },
  {
    product_id: 4,
    product_type: "모자",
    product_name: "무슨무슨옷",
  },
  {
    product_id: 5,
    product_type: "모자",
    product_name: "무슨무슨옷",
  },
  {
    product_id: 6,
    product_type: "모자",
    product_name: "무슨무슨옷",
  },
  {
    product_id: 7,
    product_type: "모자",
    product_name: "무슨무슨옷",
  },
  {
    product_id: 8,
    product_type: "모자",
    product_name: "무슨무슨옷",
  },
  {
    product_id: 9,
    product_type: "모자",
    product_name: "무슨무슨옷",
  },
  {
    product_id: 10,
    product_type: "모자",
    product_name: "무슨무슨옷",
  },
  {
    product_id: 11,
    product_type: "모자",
    product_name: "무슨무슨옷",
  },
  {
    product_id: 12,
    product_type: "모자",
    product_name: "무슨무슨옷",
  },
  {
    product_id: 13,
    product_type: "모자",
    product_name: "무슨무슨옷",
  },
  {
    product_id: 14,
    product_type: "모자",
    product_name: "무슨무슨옷",
  },
  {
    product_id: 15,
    product_type: "모자",
    product_name: "무슨무슨옷",
  },
  {
    product_id: 16,
    product_type: "모자",
    product_name: "무슨무슨옷",
  },
  {
    product_id: 17,
    product_type: "모자",
    product_name: "무슨무슨옷",
  },
  {
    product_id: 18,
    product_type: "모자",
    product_name: "무슨무슨옷",
  },
  {
    product_id: 19,
    product_type: "모자",
    product_name: "무슨무슨옷",
  },
];
export default function ProductList({ product_type }: Props) {
  return (
    <section>
      <h3 className="sub_title">{product_type}</h3>
      <div className="contants">
        {mock_data.map((e, i) => (
          <div key={i}>
            <Link href={`/product/${e.product_id}`}>
              <div className="box"></div>
            </Link>
            <p>{"[" + e.product_type + "]"}</p>
            <p>{e.product_name}</p>
          </div>
        ))}
      </div>
      {/* <button className="more">{"더보기 >"}</button> */}
      <style jsx>{`
        section {
          padding-top: 41px;
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
        .contants > div {
          display: block;
        }
        .contants .box {
          display: block;
          height: 240px;
          background-color: var(--gray);
        }
        @media (max-width: 693px) {
          .contants {
            grid-template-columns: repeat(auto-fit, minmax(90%, 90%));
          }
          .contants .box {
            height: auto;
            padding-bottom: 80%;
          }
        }
         {
          /* .more {
          display: block;
          padding: 7px 38px;
          border: 1px solid #9f9f9f;
          background-color: transparent;
          border-radius: 5px;
          font-size: 18px;
          margin: 0 auto;
          cursor: pointer;
        } */
        }
      `}</style>
    </section>
  );
}

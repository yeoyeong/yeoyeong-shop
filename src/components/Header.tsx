"use client";
import Image from "next/image";
import HEARD_ICON from "../../public/heart-icon-red.svg";
import SEARCH_ICON from "../../public/search-icon.svg";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SignInButton from "@/app/components/SignInButton";
export default function Header() {
  const id = usePathname();
  const [type, setType] = useState(true);
  console.log(id);
  useEffect(() => {
    if (id === "/login") setType(false);
    else setType(true);
  }, [id]);
  return (
    <div className="container">
      {type && (
        <>
          <div>
            <h1 className="title">YEOYEONG</h1>
            <ul className="top_menu">
              <li>
                <SignInButton />
              </li>
              <li>
                <Link href="/signup">회원가입</Link>
              </li>
              <li>
                <Link href="/shopping_basket">장바구니</Link>
              </li>
              <li>
                <Image
                  src={HEARD_ICON}
                  width={16}
                  height={16}
                  alt="찜 아이콘"
                />
              </li>
              <li>
                <Image
                  src={SEARCH_ICON}
                  width={16}
                  height={16}
                  alt="검색 아이콘"
                />
              </li>
            </ul>
          </div>

          <ul className="nav">
            <li>SHOP</li>
            <li>ABOUT</li>
          </ul>

          <style jsx>{`
            .container {
              display: flex;
              flex-direction: column;
              padding: 4px 20px 7px 10px;
              border-bottom: 1px solid rgb(235, 235, 235);
            }
            div {
              display: flex;
              justify-content: space-between;
            }
            .title {
              font-family: Poppins;
              font-size: 26px;
              font-weight: 900;
              line-height: 26px;
              letter-spacing: 0em;
              text-align: left;
              color: #b5cfdb;
            }
            .top_menu {
              display: flex;
              align-items: center;
            }
            .top_menu li {
              font-size: 12px;
              margin-left: 10px;
            }
            .top_menu li:nth-child(1) {
              margin-left: 0;
            }
            .nav {
              display: flex;
              margin-top: 16px;
              margin-left: 80px;
              font-size: 16px;
               {
                /* margin: 0 auto; */
              }
            }
            .nav li:last-child {
              margin-left: 8px;
            }
          `}</style>
        </>
      )}
    </div>
  );
}

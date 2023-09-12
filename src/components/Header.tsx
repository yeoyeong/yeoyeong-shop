"use client";
import Image from "next/image";
import HEARD_ICON from "../../public/heart-icon-red.svg";
import SEARCH_ICON from "../../public/search-icon.svg";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SignInButton from "@/app/components/SignInButton";
import { useSession } from "next-auth/react";
export default function Header() {
  const id = usePathname();
  const { data: session } = useSession();
  console.log();
  const [type, setType] = useState(true);
  useEffect(() => {
    if (id === "/login") setType(false);
    else setType(true);
  }, [id]);
  return (
    <header>
      {type && (
        <>
          <div className="container">
            <div>
              <h1 className="title">
                <Link href="/" style={{ color: "#b5cfdb" }}>
                  YEOYEONG
                </Link>
              </h1>
              <ul className="top_menu">
                <li>
                  <SignInButton />
                </li>
                <li>
                  <Link href="/signup">회원가입</Link>
                </li>
                <li>
                  <Link href={`/user/basket/${session?.user.id}`}>
                    장바구니
                  </Link>
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
              <li>
                <Link href="/shop">SHOP</Link>
              </li>
              <li>
                <Link href="/about">ABOUT</Link>
              </li>
            </ul>
          </div>
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
    </header>
  );
}

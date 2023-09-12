"use client";
import { usePathname } from "next/navigation";
import ProductList from "./components/ProductList";
import Navigation from "./components/Navigation";
import { useEffect } from "react";
import { pathNameIncludesString } from "@/hooks/pathNameIncludesString";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const id = usePathname();

  const product_type = () => {
    let type: string = "";
    if (id === "/shop") type = "전체 상품 보기";
    else if (pathNameIncludesString(id, "hat")) type = "모자";
    else if (pathNameIncludesString(id, "top")) type = "상의";
    else if (pathNameIncludesString(id, "pants")) type = "하의";
    return type;
  };

  return (
    <div className="container">
      <Navigation />
      {children}
      <ProductList product_type={product_type()} />
      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding-bottom: 100px;
          }
        `}
      </style>
    </div>
  );
}

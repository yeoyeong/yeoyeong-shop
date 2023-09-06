"use client";

import Top from "@/app/components/Top";
import Hats from "./components/Hats";
import Pants from "./components/Pants";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="container">
      <article className="visual_area"></article>
      <Top />
      <Pants />
      <Hats />
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
        }
      `}</style>
    </div>
  );
}

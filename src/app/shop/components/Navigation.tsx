import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/shop/top">상의</Link>
        </li>
        <li>
          <Link href="/shop/pants">하의</Link>
        </li>
        <li>
          <Link href="/shop/hat">모자</Link>
        </li>
      </ul>
    </nav>
  );
}

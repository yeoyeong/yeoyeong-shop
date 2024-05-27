import { db } from "@src/shared/libs/firebase-config";
import { Product } from "@src/shared/store/products.store-type";
import { collection, getDocs, limit, query, where } from "firebase/firestore";

export const getProductListapi = async ({
  category,
  pageParam = 1,
}: {
  category: string | null;
  pageParam: number;
}) => {
  // const productsArray: Product[] = [];
  // querySnapshot.forEach((doc) => {
  //   const product = doc.data() as Product;
  //   productsArray.push({ ...product, id: doc.id });
  //   console.log(productsArray);
  // });
  const pageSize = 5; // 한 페이지에 불러올 데이터 수
  const q = query(
    collection(db, "products"),
    where("category", "==", category ? category : "popular"),
    limit(pageParam * pageSize)
  );

  const querySnapshot = await getDocs(q);

  // 쿼리 결과의 길이를 확인하여 마지막 페이지 여부 결정
  const isLastPage = querySnapshot.size < pageSize * pageParam;
  const products = querySnapshot.docs.map((doc) => doc.data()) as Product[];
  // console.log(pageParam);
  // console.log(isLastPage);
  // console.log(querySnapshot.size);
  // console.log(products);

  return {
    pageParam,
    products: products,
    isLastPage,
  };
};

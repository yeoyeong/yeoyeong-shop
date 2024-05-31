import { db } from "@src/shared/libs/firebase-config";
import { Product } from "@src/shared/store/products.store-type";
import {
  Firestore,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";

const createProductQuery = (
  db: Firestore,
  category: string | null,
  pageParam: number,
  pageSize: number
) => {
  const productCollection = collection(db, "products");
  const conditions = [];

  // 조건을 추가
  if (category) {
    conditions.push(where("category", "==", category));
  } else {
    conditions.push(where("rating", ">=", 4));
  }

  // 정렬 및 제한 조건 추가
  conditions.push(orderBy("createdAt", "desc"));
  conditions.push(limit(pageParam * pageSize));

  // 쿼리 생성
  return query(productCollection, ...conditions);
};

export const getProductListapi = async ({
  category,
  pageParam = 1,
}: {
  category: string | null;
  pageParam: number;
}) => {
  const pageSize = 5; // 한 페이지에 불러올 데이터 수

  const q = createProductQuery(db, category, pageParam, pageSize);

  // const q = query(
  //   collection(db, "products"),
  //   category ? where("category", "==", category) : where("rating", ">=", 4),
  //   orderBy("createdAt", "desc"),
  //   limit(pageParam * pageSize)
  // );

  try {
    const querySnapshot = await getDocs(q);
    // 쿼리 결과의 길이를 확인하여 마지막 페이지 여부 결정
    const isLastPage = querySnapshot.size < pageSize * pageParam;
    const products = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Product[];

    return {
      pageParam,
      products: products,
      isLastPage,
    };
  } catch (error) {
    console.error("Error getting documents: ", error);
    return {
      pageParam,
      products: [],
      isLastPage: true,
    };
  }

  // console.log(products);
  // console.log(pageParam);
  // console.log(isLastPage);
  // console.log(querySnapshot.size);
  // console.log(products);
};

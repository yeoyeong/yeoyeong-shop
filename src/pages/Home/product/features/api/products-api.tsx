import { db } from "@src/shared/libs/firebase-config";
import { Product } from "@src/shared/store/products.store-type";
import { Category } from "@src/shared/types/product";
import {
  Firestore,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";

// 검색 함수
function searchProducts(products: Product[], keyword: string) {
  // 소문자로 변환하여 대소문자 구분 없이 검색
  const lowerCaseKeyword = keyword.toLowerCase();

  // 제목 또는 내용에 키워드가 포함된 상품을 필터링
  return products.filter(
    (product) =>
      product.title.toLowerCase().includes(lowerCaseKeyword) ||
      product.content.toLowerCase().includes(lowerCaseKeyword)
  );
}

const createProductQuery = (
  db: Firestore,
  category: Category,
  pageParam: number,
  pageSize: number,
  search_value?: string
) => {
  const productCollection = collection(db, "products");
  const conditions = [];

  // 조건을 추가
  if (!category) {
    conditions.push(where("rating", ">=", 4));
  } else if (category === "search" && search_value) {
    return query(productCollection, orderBy("createdAt", "desc"));
  } else {
    conditions.push(where("category", "==", category));
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
  search_value,
}: {
  category: Category;
  pageParam: number;
  search_value?: string;
}) => {
  const pageSize = 5; // 한 페이지에 불러올 데이터 수
  const q = createProductQuery(db, category, pageParam, pageSize, search_value);

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

    if (search_value && category === "search") {
      const filteredProducts = searchProducts(products, search_value);
      return {
        pageParam,
        products: filteredProducts,
        isLastPage,
      };
    }

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

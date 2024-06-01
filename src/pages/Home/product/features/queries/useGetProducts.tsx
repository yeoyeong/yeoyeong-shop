import { useInfiniteQuery } from "react-query";
import { getProductListapi } from "../api/products-api";
import { useSearchParams } from "react-router-dom";
import { Product } from "@src/shared/store/products.store-type";
import { Category } from "@src/shared/types/product";

function checkCategory(value: any): value is Category {
  return [
    "popular",
    "outer",
    "skirt",
    "top",
    "bottom",
    "search",
    null,
  ].includes(value);
}

const useGetProducts = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const search_value = searchParams.get("value");

  if (!checkCategory(category)) {
    console.log("a is not a valid Category");
    return {
      contents: null,
      isFetching: null,
      fetchNextPage: null,
      hasNextPage: null,
    };
  }

  const apihandler = (pageParam: number) => {
    if (search_value && category === "search") {
      return getProductListapi({ category, pageParam, search_value });
    } else {
      return getProductListapi({ category, pageParam });
    }
  };

  const result = useInfiniteQuery(
    ["products", category],
    ({ pageParam = 1 }) => apihandler(pageParam),
    {
      getNextPageParam: (lastPage) => {
        if (!lastPage.isLastPage) return lastPage.pageParam + 1;
        return undefined;
      },
    }
  );

  // 데이터가 존재하지 않을 경우를 처리
  const products = result.data?.pages[result.data?.pages.length - 1].products; // 불러온 상품 리스트
  const contents: Product[] = products ? products.flatMap((page) => page) : [];

  return {
    contents,
    fetchNextPage: result.fetchNextPage,
    hasNextPage: result.hasNextPage,
    isFetching: result.isFetching,
    isLoading: result.isLoading,
  };
};

export default useGetProducts;

import { useInfiniteQuery } from "react-query";
import { getProductListapi } from "../api/products-api";
import { useSearchParams } from "react-router-dom";
import { Product } from "@src/shared/store/products.store-type";

const useGetProducts = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const result = useInfiniteQuery(
    ["products", category],
    ({ pageParam = 1 }) => getProductListapi({ category, pageParam }),
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

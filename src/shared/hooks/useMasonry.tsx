import { useEffect, useState } from "react";
import useWindowWidth from "./useWindowWidth";
import { Product } from "../store/products.store-type";
import useGetProducts from "@src/pages/Home/product/features/queries/useGetProducts";
import useIntersect from "./useIntersect";

const useMasonry = () => {
  const {
    contents: initialData,
    isFetching,
    fetchNextPage,
    hasNextPage,
  } = useGetProducts();
  const { windowWidth } = useWindowWidth(241);
  const [itemList, setItemList] = useState<Product[][]>([]);

  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target); //옵저버 제거 더 이상 해당 오브젝트 관찰 x
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  useEffect(() => {
    if (isFetching) return;
    if (!initialData) return;
    const newArr: Product[][] = Array.from({ length: windowWidth }, () => []);
    const result = initialData.reduce((acc, cur, idx) => {
      acc[idx % acc.length].push(cur);
      return acc;
    }, newArr);
    setItemList(result);
  }, [windowWidth, ref, isFetching]);

  return { itemList, windowWidth, ref };
};

export default useMasonry;

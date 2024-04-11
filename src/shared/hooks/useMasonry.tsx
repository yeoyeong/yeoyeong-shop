import { useEffect, useState } from "react";
import useWindowWidth from "./useWindowWidth";
import { Product } from "../types/product";

const useMasonry = (initialData: Product[]) => {
  const { windowWidth } = useWindowWidth(260);
  const [itemList, setItemList] = useState<Product[][]>([]);

  useEffect(() => {
    const newArr: Product[][] = Array.from({ length: windowWidth }, () => []);
    // cur = arr[i], acc = arr
    const result = initialData.reduce((acc, cur, idx) => {
      acc[idx % acc.length].push(cur);
      return acc;
    }, newArr);
    setItemList(result);
  }, [windowWidth, initialData]);

  return { itemList, windowWidth };
};

export default useMasonry;

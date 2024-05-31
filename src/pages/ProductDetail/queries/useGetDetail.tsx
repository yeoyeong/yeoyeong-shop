import { useQuery } from "react-query";
import { getDetailProductApi } from "../api/detail-api";
import { Product } from "@src/shared/store/products.store-type";

const useGetDetailProduct = (id: string) => {
  const result = useQuery(["document", id], () => getDetailProductApi(id));

  return {
    data: result.data as Product,
    isLoading: result.isLoading,
    isError: result.isError,
  };
};

export default useGetDetailProduct;

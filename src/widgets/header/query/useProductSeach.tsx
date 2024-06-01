import { CartProduct } from "@src/shared/store/products.store-type";
import { useMutation, useQueryClient } from "react-query";
import { productSearchApi } from "../api/product_search-api";

interface Props {
  uid: string | null;
  checkItemList: CartProduct[];
}

const useDeletetoCart = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(productSearchApi, {
    onSuccess: (data) => {
      // queryClient.invalidateQueries("user_content");
      // queryClient.setQueryData(["user_content"], (oldQueryData: any) => {
      // return { ...data };
      // });
      // return data;
    },
    onError: (error: Error) => {
      alert("오류가 발생하였습니다. 관리자에게 문의해주세요");
      console.log(error.message);
    },
  });

  const handleSearchProduct = async (value: string) => {
    try {
      await mutation.mutateAsync(value);
      await queryClient.invalidateQueries("search_product");
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleSearchProduct,
  };
};

export default useDeletetoCart;

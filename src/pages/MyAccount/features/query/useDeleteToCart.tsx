import { CartProduct } from "@src/shared/store/products.store-type";
import { useMutation, useQueryClient } from "react-query";
import { deleteToCartApi } from "../api/deleteCart-api";

interface Props {
  uid: string | null;
  checkItemList: CartProduct[];
}

const useDeletetoCart = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(deleteToCartApi, {
    onSuccess: () => {
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

  const handleDeleteProduct = async ({ uid, checkItemList }: Props) => {
    if (!uid) return alert("로그인 후 이용해주세요");
    try {
      await mutation.mutateAsync({ uid, checkItemList });
      await queryClient.invalidateQueries("userContent");
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleDeleteProduct,
  };
};

export default useDeletetoCart;

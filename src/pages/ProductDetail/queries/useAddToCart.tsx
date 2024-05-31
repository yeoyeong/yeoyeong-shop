import { useMutation, useQueryClient } from "react-query";
import { addToCartApi } from "../api/addCart-api";
import { colorList } from "@src/shared/store/products.store-type";

interface Props {
  uid: string | null;
  productId: string;
  size: string;
  color: colorList;
}

const useAddtoCart = ({ uid, productId, size, color }: Props) => {
  const queryClient = useQueryClient();
  const mutation = useMutation(addToCartApi, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(["user_content"]);
    },
    onError: (error: Error) => {
      alert("오류가 발생하였습니다. 관리자에게 문의해주세요");
      console.log(error.message);
    },
  });

  const handleAddProduct = () => {
    if (!uid) return alert("로그인 후 이용해주세요");
    mutation.mutate({ uid, productId, size, color: color });
  };

  return {
    handleAddProduct,
  };
};

export default useAddtoCart;

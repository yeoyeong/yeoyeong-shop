import { useQuery } from "react-query";
import { getUserCartApi } from "../api/getUserCart-api";
import authStore from "@src/shared/store/auth-store";
import { CartProduct } from "@src/shared/store/products.store-type";

const useGetCartList = () => {
  const { userInfo } = authStore();
  const result = useQuery("userContent", () => {
    return getUserCartApi({ uid: userInfo.uid ?? "error" });
  });
  const cartList = result.data?.cartList as unknown as CartProduct[];
  const uid = result.data?.uid;

  return {
    data: { cartList, uid },
    isLoading: result.isLoading,
    isError: result.isError,
    isSuccess: result.isSuccess,
  };
};

export default useGetCartList;

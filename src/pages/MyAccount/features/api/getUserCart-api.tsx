//유저 uid를 받는다
//유저 uid의 카트 목록을 가져온다
//카트에 있는 상품 id로 단일 상품 조회를 한다
// 배열을 장바구니에 맞게 생성한다

import { getDetailProductApi } from "@src/pages/ProductDetail/api/detail-api";
import { db } from "@src/shared/libs/firebase-config";
import { Product } from "@src/shared/store/products.store-type";
import { doc, getDoc } from "firebase/firestore";

export const getUserCartApi = async ({ uid }: { uid: string }) => {
  if (uid === "error") alert("사용자 정보를 찾을 수 없습니다.");
  try {
    // uid에 해당하는 문서 참조
    const userDocRef = doc(db, "user_content", uid);
    // 문서 가져오기
    const userDoc = await getDoc(userDocRef);
    if (userDoc.exists()) {
      const { cart } = userDoc.data();
      let cartList = [];
      // cart.forEach((item: any) => {
      //   const product = await getDetailProductApi(item.productId);
      //   console.log("dd", product);
      // });
      for (const item of cart) {
        const { price, thumbnail, shippingFee, title } =
          (await getDetailProductApi(item.productId)) as Product;
        cartList.push({
          ...item,
          price,
          thumbnail,
          shippingFee,
          title,
        });
      }

      return { uid, cartList };
    } else {
      console.log("문서가 존재하지 않습니다.");
    }
  } catch (error) {
    console.log(error);
  }
};

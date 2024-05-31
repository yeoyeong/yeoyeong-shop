import { db } from "@src/shared/libs/firebase-config";
import { CartProduct, colorList } from "@src/shared/store/products.store-type";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

interface Props {
  uid: string;
  checkItemList: CartProduct[];
}

//배열 가공
const CartArrProcess = (checkItemList: CartProduct[]) => {
  return checkItemList.map((item) => ({
    color: item.color,
    count: item.count,
    productId: item.productId,
    size: item.size,
  }));
};

export const deleteToCartApi = async ({ uid, checkItemList }: Props) => {
  try {
    // uid에 해당하는 문서 참조
    const userDocRef = doc(db, "user_content", uid);
    // 문서 가져오기
    const userDoc = await getDoc(userDocRef);

    const checkList = CartArrProcess(checkItemList);

    if (userDoc.exists()) {
      const userData = userDoc.data();
      let newCart = userData.cart ? [...userData.cart] : [];

      const filtered = newCart.filter(
        (itemA) =>
          !checkList.some(
            (itemB) =>
              itemA.productId === itemB.productId &&
              itemA.size === itemB.size &&
              itemA.count === itemB.count &&
              itemA.color.colorCode === itemB.color.colorCode &&
              itemA.color.colorName === itemB.color.colorName
          )
      );
      await updateDoc(userDocRef, {
        cart: filtered,
      });
      return { uid, cart: filtered };
    }
    alert("성공");
  } catch (error) {
    alert("오류가 발생하였습니다.");
  }
};

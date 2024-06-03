import { db } from "@src/shared/libs/firebase-config";
import { colorList } from "@src/shared/store/products.store-type";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

interface Props {
  uid: string;
  productId: string;
  size: string;
  color: colorList;
}
// arrayUnion 사용: updateDoc 함수 내에서 arrayUnion(productId)를 사용하여
// cart 배열에 productId를 추가합니다. 이때, 동일한 productId가 이미 배열에 존재하면 추가되지 않습니다.

// if (userDoc.exists()) {
//   const userData = userDoc.data();
//   let newCart = userData.cart ? [...userData.cart] : [];
//   let itemIndex = newCart.findIndex(item =>
//     item.productId === productId && item.size === size && item.color === color
//   );

//   if (itemIndex !== -1) {
//     // 이미 존재하는 아이템이면, count 증가
//     let updatedItem = { ...newCart[itemIndex] };
//     updatedItem.count = updatedItem.count ? updatedItem.count + 1 : 2; // count를 1 증가, 기본값은 2 (최초 추가 시 1로 간주)
//     newCart[itemIndex] = updatedItem;
//   } else {
//     // 새 아이템 추가
//     newCart.push({ productId, size, color, count: 1 });
//   }

//   // 문서 업데이트
//   await updateDoc(userDocRef, {
//     cart: newCart,
//   });
// }

export const addToCartApi = async ({ uid, productId, size, color }: Props) => {
  try {
    // uid에 해당하는 문서 참조
    const userDocRef = doc(db, "user_content", uid);
    // 문서 가져오기
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      const userData = userDoc.data();
      let newCart = userData.cart ? [...userData.cart] : [];
      let itemIndex = newCart.findIndex(
        (item) =>
          item.productId === productId &&
          item.size === size &&
          item.color.colorCode === color.colorCode &&
          item.color.colorName === color.colorName
      );

      if (itemIndex !== -1) {
        // 이미 존재하는 아이템이면, count 증가
        let updatedItem = { ...newCart[itemIndex] };
        updatedItem.count = updatedItem.count + 1; // count를 1 증가, 기본값은 2 (최초 추가 시 1로 간주)
        newCart[itemIndex] = updatedItem;
      } else {
        // 새 아이템 추가
        newCart.push({ productId, size, color, count: 1 });
      }

      // 문서가 존재하면 cart 배열에 productId 추가
      await updateDoc(userDocRef, {
        cart: newCart,
        // cart: arrayUnion({ productId, size, color }),
      });
    } else {
      // 문서가 존재하지 않으면 새 문서 생성 후 cart 배열에 productId 추가
      await setDoc(userDocRef, {
        uid,
        cart: [
          {
            productId,
            size,
            color,
            count: 1,
          },
        ],
      });
    }
    alert("성공");
  } catch (error) {
    alert("오류가 발생하였습니다.");
  }
};

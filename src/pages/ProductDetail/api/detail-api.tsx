import { db } from "@src/shared/libs/firebase-config";
import { doc, getDoc } from "firebase/firestore";

export const getDetailProductApi = async (documentId: string) => {
  const docRef = doc(db, "products", documentId);
  const docSnap = await getDoc(docRef);

  // 문서의 존재 여부를 확인
  if (docSnap.exists()) {
    return { ...docSnap.data(), id: docSnap.id };
  } else {
    // 문서가 존재하지 않는 경우
    console.log("No such document!");
    return null;
  }
};

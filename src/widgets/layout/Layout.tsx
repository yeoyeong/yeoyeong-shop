import Modal from "@src/app/Modal";
import Header from "../header/Header";
import styles from "./Layout.module.scss";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@src/shared/libs/firebase-config";
import authStore from "@src/shared/store/auth-store";
import { collection, getDocs, query, where } from "firebase/firestore";
const Layout = ({ children }: { children: React.ReactNode }) => {
  const { userInfo, setUserInfo } = authStore();

  const userTypeFnc = async (uid: string) => {
    let userType: 0 | 1 | 2 = 1;
    try {
      //uid로 특정 유저 찾아내기
      const usersRef = collection(db, "admin");
      // 'uid' 필드가 관리자인 문서를 찾기 위한 쿼리 생성
      const userQuery = query(usersRef, where("uid", "==", uid));
      // 쿼리 실행 및 결과 가져오기
      const querySnapshot = await getDocs(userQuery);
      if (querySnapshot.empty) return userType;
      else userType = 2;

      return userType;
      // 결과 출력 또는 처리
      // querySnapshot.forEach((doc) => {
      //   console.log(doc.data());
      // });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) return;
      const userType = await userTypeFnc(currentUser.uid);
      currentUser.getIdToken().then((idToken) => {
        setUserInfo(() => ({
          userType: userType ? userType : 1,
          accessToken: idToken,
          uid: currentUser.uid,
          email: currentUser.email,
          photoURL: currentUser.photoURL,
        }));
        //   // ID 토큰을 로컬 스토리지에 저장
      });
    });
    return () => unsubscribe();
  }, [auth]);

  return (
    // <div id="container" className={`App dark`}>
    <>
      <div id="container" className={`App`}>
        <Header />
        <div className={styles.content_wrap}>{children}</div>
        <Modal />
      </div>
    </>
  );
};

export default Layout;

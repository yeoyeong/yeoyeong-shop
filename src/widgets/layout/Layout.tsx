import Modal from "@src/app/Modal";
import Header from "../header/Header";
import styles from "./Layout.module.scss";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@src/shared/libs/firebase-config";
import authStore from "@src/shared/store/auth-store";
const Layout = ({ children }: { children: React.ReactNode }) => {
  const { setUserInfo } = authStore();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        currentUser.getIdToken().then((idToken) => {
          setUserInfo(() => ({
            accessToken: idToken,
            uid: currentUser.uid,
            email: currentUser.email,
            photoURL: currentUser.photoURL,
          }));
          //   // ID 토큰을 로컬 스토리지에 저장
        });
      } else {
        setUserInfo(() => ({
          accessToken: null,
          uid: null,
          email: null,
          photoURL: null,
        }));
      }
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

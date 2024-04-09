import Modal from "@src/app/Modal";
import Header from "../header/Header";
import styles from "./Layout.module.scss";
const Layout = ({ children }: { children: React.ReactNode }) => {
  //다크 토글 버튼 만들면 댐
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

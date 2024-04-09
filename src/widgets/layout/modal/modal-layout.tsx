import ReactDOM from "react-dom";
import styles from "./modal.module.scss";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const ModalLayout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const removeModalQueryParam = (e: any) => {
    const id = e.target.id;
    if (id !== "container" && id !== "inner") return;
    queryParams.delete("modal");
    const newQueryString = queryParams.toString();
    const currentPath = window.location.pathname;

    navigate(`${currentPath}?${newQueryString}`, { replace: true });
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때 body의 overflow를 hidden으로 설정
    document.body.style.overflow = "hidden";

    // 컴포넌트가 언마운트될 때 실행될 클린업 함수
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <>
      {ReactDOM.createPortal(
        <div
          id="container"
          onClick={removeModalQueryParam}
          className={`App ${styles.modal_wrap}`}
        >
          <div id="inner" className={styles.modal_inner}>
            {children}
          </div>
        </div>,
        document.getElementById("modal") as HTMLElement
      )}
    </>
  );
};

export default ModalLayout;

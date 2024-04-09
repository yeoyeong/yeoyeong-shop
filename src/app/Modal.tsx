import JoinPage from "@src/pages/Join/join-page";
import LoginPage from "@src/pages/Login/login-page";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Modal = () => {
  const { pathname, search } = useLocation();
  const params = new URLSearchParams(window.location.search);
  let modalParams = params.get("modal");

  const [modal, setModal] = useState(modalParams);

  useEffect(() => {
    setModal(modalParams);
  }, [pathname, search]);
  // modal 값이 존재하지 않으면 아무것도 렌더링하지 않습니다.
  if (!modal) return null;

  return (
    <div>
      {modalParams === "login" && <LoginPage />}
      {modalParams === "join" && <JoinPage />}
    </div>
  );
};

export default Modal;

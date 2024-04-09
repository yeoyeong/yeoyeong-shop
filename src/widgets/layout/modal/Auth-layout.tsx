import Image from "@src/widgets/Image";
import ModalLayout from "./modal-layout";
import styles from "./modal.module.scss";
import xLogo from "@src/shared/assets/x_btn-black.svg";
import useModalNavigate from "@src/shared/hooks/useModalNavigate";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const { removeModalQueryParam } = useModalNavigate();
  const queryParams = new URLSearchParams(location.search);
  const title = queryParams.get("modal");

  return (
    <ModalLayout>
      <div className={styles.modal}>
        <div className={styles.modal_header_wrap}>
          <h2 className={styles.title}>
            {title === "join" ? "Signup" : title}
          </h2>
          <button onClick={removeModalQueryParam}>
            <Image imageUrl={xLogo} alt="닫기버튼" />
          </button>
        </div>
        {children}
      </div>
    </ModalLayout>
  );
};

export default AuthLayout;

import { useNavigate } from "react-router-dom";

function useModalNavigate() {
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(window.location.search);

  //모달창 이동
  const modalNavigate = (value: string) => {
    searchParams.set("modal", value);
    navigate({
      pathname: window.location.pathname,
      search: `?${searchParams.toString()}`,
    });
  };

  //모달창 제거
  const removeModalQueryParam = () => {
    searchParams.delete("modal");
    const newQueryString = searchParams.toString();
    const currentPath = window.location.pathname;

    // React Router v6를 사용하여 URL을 변경
    navigate(`${currentPath}?${newQueryString}`, { replace: true });
  };

  return {
    modalNavigate,
    removeModalQueryParam,
  };
}

export default useModalNavigate;

import { useEffect, useState } from "react";
import useWindowSize from "../useWindowSize";
import useClickOutside from "../useClickOutside";
import useCategoryHook from "./useCategoryHook";

// interface Props {}
const useNavToggleHook = () => {
  const { category } = useCategoryHook();
  const [width] = useWindowSize();
  const [navToggle, setNavToggle] = useState<boolean>(false);
  const ref = useClickOutside<HTMLDivElement>(() => {
    setNavToggle(false);
  });

  //클릭시 토글
  const navToggleHandler = () => {
    setNavToggle(!navToggle);
  };

  //800px보다 윈도우 창이 커질때 닫기
  useEffect(() => {
    if (width > 800) setNavToggle(false);
  }, [width]);

  // 카테고리 변경 될 때 닫기
  useEffect(() => {
    setNavToggle(false);
  }, [category]);

  return { navToggle, navToggleHandler, ref };
};

export default useNavToggleHook;

import { categoryData } from "@src/shared/data/categoryData";
import { useEffect, useState } from "react";
import useCategoryHook from "./useCategoryHook";

const useCategoryHookTablet = () => {
  const { category } = useCategoryHook();
  const [result, setResult] = useState<{ link: string; title: string }>({
    link: "",
    title: "",
  });

  useEffect(() => {
    if (!category)
      setResult(categoryData.find((el) => el.title === "POPULAR")!);
    else
      setResult(
        categoryData.find((el) => el.title.toLowerCase() === category)!
      );
  }, [category]);

  return { result };
};

export default useCategoryHookTablet;

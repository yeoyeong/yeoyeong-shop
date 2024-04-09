import { useState } from "react";

const useToggle = () => {
  const [toggle, setToggle] = useState(false);

  const ToggleHandler = () => {
    setToggle((prev) => !prev);
  };

  return { toggle, ToggleHandler };
};

export default useToggle;

import { useState, useCallback } from "react";
import { addCommasToNumber } from "../data/regular_expression";

function useNumberInput(initialForm: string) {
  const [value, setValue] = useState(initialForm);
  const handleChange = useCallback(
    (event: any) => {
      if (isNaN(event.target.value.split(",").join(""))) return;
      setValue(event.target.value);
      setValue(addCommasToNumber(event.target.value));
    },
    [value]
  );
  const cutByLenNumber = (e: any, limit: number) => {
    const targetValue = e.target.value.split(",").join("");
    if (targetValue.length > limit) {
      setValue(addCommasToNumber(targetValue.substring(0, limit)));
      e.target.value = addCommasToNumber(targetValue.substring(0, limit));
    }
  };
  return {
    value,
    onChange: handleChange,
    setValue,
    cutByLenNumber,
  };
}

export default useNumberInput;

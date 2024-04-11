import { useState, useCallback } from "react";

function useInput(initialForm: string) {
  const [value, setValue] = useState(initialForm);
  const handleChange = useCallback(
    (event: any) => {
      setValue(event.target.value);
    },
    [value]
  );

  //글자 수 제한
  const cutByLen = (e: any, limit: number) => {
    const limitByte = limit;
    const valueLength = e.target.value.length;
    if (limitByte < valueLength) {
      e.target.value.substring(0, limitByte);
      setValue(e.target.value.substring(0, limitByte));
    }
  };
  return {
    value,
    setValue,
    onChange: handleChange,
    cutByLen,
  };
}

export default useInput;

import { useState, useCallback } from "react";
import { REG_PASS_EMAIL } from "../data/regular_expression";

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

  //이메일 양식 체크
  const validationEmailHadler = () => {
    if (!value) {
      alert("이메일을 입력해주세요.");
      return false;
    }
    if (!REG_PASS_EMAIL.test(value)) {
      alert("올바르지 않은 이메일 규격입니다.");
      return false;
    }
    return true;
    // else return setValidationState("성공");
  };

  //비밀번호 체크
  const validationPasswordHadler = () => {
    if (!value) {
      alert("비밀번호를 입력해주세요.");
      return false;
    }
    if (value.length < 6) {
      alert("비밀번호는 6자 이상으로 입력해주세요.");
      return false;
    }
    return true;
  };

  return {
    value,
    validationEmailHadler,
    validationPasswordHadler,
    setValue,
    onChange: handleChange,
    cutByLen,
  };
}

export default useInput;

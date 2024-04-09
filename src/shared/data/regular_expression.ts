export const PATTERN_NUMBER = /[0-9]/; //숫자
export const PATTERN_ENGLISH = /[a-zA-Z]/; //영어
export const PATTERN_KOREAN = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; //한글
export const PATTERN_IMG_CHARACTER = /[~!@#\#$%<>^&*]/; //특수문자
export const PATTERN_SPECIFIC_CHARACTERS = /[+\-=,_]/; //"+", "-", "=", ",", "_"
export const PATTERN_ALL_SPECIAL_CHARACTERS = /[\p{P}\p{S}]/gu;

export const REG_PASS_EMAIL =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

// export const REG_PASS_PASSWORD =
//   /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/; //영문 숫자 특수기호 조합 8자리 이상

export const REG_PASS_PASSWORD =
  /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]).{8,16}$/; // 비밀번호 8~16자 특수문수 포함

export const REG_PASS_PHONE_NUMBER =
  /^01([0|1|6|7|8|9])-?([0-9]{4})-?([0-9]{4})$/; // 핸드폰 번호

//숫자 세자리마다 콤마
export const addCommasToNumber = (num: string) => {
  return num.replace(/,/g, "").replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};

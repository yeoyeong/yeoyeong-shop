export const checkPostWithinThreeMonths = (postDateStr: string) => {
  // 게시물 날짜와 현재 날짜를 Date 객체로 변환
  const postDate = new Date(postDateStr);
  const currentDate = new Date();

  // 두 날짜의 차이를 계산 (밀리초 단위)
  // .getTime() 메서드를 사용하여 명시적으로 숫자 타입으로 변환
  const diff = currentDate.getTime() - postDate.getTime();

  // 밀리초 -> 초 -> 분 -> 시간 -> 일 -> 월 로 변환
  const monthsDiff = diff / 1000 / 60 / 60 / 24 / 30;

  // 3개월 이내인지 확인
  if (monthsDiff <= 3) {
    return true;
  } else {
    return false;
  }
};

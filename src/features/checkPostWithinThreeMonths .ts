export const checkPostWithinThreeMonths = (timestamp: any) => {
  // seconds를 밀리초로 변환하고, nanoseconds를 밀리초로 변환한 값을 더함
  const milliseconds =
    timestamp.seconds * 1000 + Math.floor(timestamp.nanoseconds / 1000000);

  // Date 객체 생성
  const postDate = new Date(milliseconds);

  const currentDate = new Date();

  // 두 날짜의 차이를 계산 (밀리초 단위)
  // .getTime() 메서드를 사용하여 명시적으로 숫자 타입으로 변환
  const diff = currentDate.getTime() - postDate.getTime();

  // 밀리초 -> 초 -> 분 -> 시간 -> 일 -> 월 로 변환
  // const monthsDiff = diff / 1000 / 60 / 60 / 24 / 30;

  const daysDiff = diff / 1000 / 60 / 60 / 24;

  // 하루 이내인지 확인
  if (daysDiff <= 5) {
    return true;
  } else {
    return false;
  }
};

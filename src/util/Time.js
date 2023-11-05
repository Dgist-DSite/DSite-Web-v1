// 함수 정의
export function getTimeAgo(date1, date2) {
  // 밀리초 단위로 두 날짜 사이의 차이 계산
  var timeDiff = Math.abs(date2 - date1);

  // 시간, 분, 초, 일, 주, 월, 년 계산
  var secondsDiff = Math.floor(timeDiff / 1000);
  var minutesDiff = Math.floor(secondsDiff / 60);
  var hoursDiff = Math.floor(minutesDiff / 60);
  var daysDiff = Math.floor(hoursDiff / 24);
  var weeksDiff = Math.floor(daysDiff / 7);
  var monthsDiff = Math.floor(daysDiff / 30);
  var yearsDiff = Math.floor(daysDiff / 365);

  // 메시지 생성
  if (secondsDiff < 60) {
    return `${secondsDiff}초 전`;
  } else if (minutesDiff < 60) {
    return `${minutesDiff}분 전`;
  } else if (hoursDiff < 24) {
    return `${hoursDiff}시간 전`;
  } else if (daysDiff < 7) {
    return `${daysDiff}일 전`;
  } else if (weeksDiff < 4) {
    return `${weeksDiff}주 전`;
  } else if (monthsDiff < 12) {
    return `${monthsDiff}달 전`;
  } else {
    return `${yearsDiff}년 전`;
  }
}
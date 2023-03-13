function solution(my_string) {
  var answer = [];
  var strArr = my_string.split("");

  // Array.from : 문자열/배열 객체를 배열로
  // new Set() : 배열의 중복 요소 제거
  answer = Array.from(new Set(strArr));
  return answer.join("");
}

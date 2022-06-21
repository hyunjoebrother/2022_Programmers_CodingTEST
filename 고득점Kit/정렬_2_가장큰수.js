function solution(numbers) {
  var answer = "";
  // 배열 요소를 문자로
  var numToString = numbers.map((num) => String(num));
  // 문자 정렬 설정 - // '6' '10' -> b + a 숫자 '106' vs a + b 숫자 '610'를 비교
  answer = numToString.sort((a, b) => b + a - (a + b)).join(""); // 문자열 합치기

  return answer[0] === "0" ? "0" : answer; // 모두 0일 경우
}

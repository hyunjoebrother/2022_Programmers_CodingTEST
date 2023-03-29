//// 월간 코드 챌린지 시즌1
//// 정답률 74%

function solution(n) {
  var answer = 0;
  var three = 0;
  var numN = 0;

  // parseInt(n,3): 3진법인 n을 10진법으로 바꾸는 것
  // toString(3) : 3진법으로
  three = n.toString(3);
  numN = [...three].reverse().join("");
  answer = parseInt(numN, 3);
  return answer;
}

//// 월간 코드 챌린지 시즌1
//// 정답률 82%

function solution(a, b) {
  var answer = 0;

  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}

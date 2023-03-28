//// 월간 코드 챌린지 시즌3
//// 정답률 86%

function solution(n) {
  var answer = 0;
  for (let i = 0; i < n; i++) {
    if (n % i === 1) {
      answer = i;
      break; // 가장 작은 수 체크
    }
  }
  return answer;
}

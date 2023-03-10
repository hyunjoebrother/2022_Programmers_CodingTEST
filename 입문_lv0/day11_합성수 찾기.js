function solution(n) {
  var answer = 0;
  var isNum = 0;

  // 1부터 n까지 순회
  for (let i = 1; i <= n; i++) {
    // 해당 수의 약수 갯수 확인
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        isNum++;
      }
    }
    if (isNum > 2) {
      answer++;
    }
    // 다시 약수 카운팅 초기화
    isNum = 0;
  }
  return answer;
}

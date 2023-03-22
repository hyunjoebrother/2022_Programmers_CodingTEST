function solution(n) {
  var answer = 0;
  // index로 판별
  for (let i = 1; i <= n; i++) {
    answer++;
    while (answer % 3 === 0 || String(answer).includes("3")) {
      answer++;
    }
  }

  return answer;
}

function solution(n) {
  var answer = 0;
  for (let i = 1; i <= Number(n / 2); i++) {
    if (Number.isInteger(n / i) === true) {
      answer++;
    }
  }
  return answer + 1;
}

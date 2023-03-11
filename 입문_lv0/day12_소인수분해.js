function solution(n) {
  var answer = [];
  var prime = [];
  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      prime.push(i);
      n = n / i;
    }
  }
  // 1제외
  if (prime.includes(1) === true) {
    prime.slice(1);
  }

  // 중복 제거
  answer = Array.from(new Set(prime));
  answer.sort((a, b) => a - b);
  return answer;
}

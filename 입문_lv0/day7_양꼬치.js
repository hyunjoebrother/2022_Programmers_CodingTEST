function solution(n, k) {
  var answer = 0;
  var drink = Math.floor(n / 10);
  answer = 12000 * n + 2000 * (k - drink);
  return answer;
}

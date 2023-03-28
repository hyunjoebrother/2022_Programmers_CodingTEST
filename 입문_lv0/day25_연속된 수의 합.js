function solution(num, total) {
  var answer = [];
  var first = 0;

  // 초깃값
  first = Math.ceil(total / num) - Math.ceil(num / 2) + 1;

  for (let i = 0; i < num; i++) {
    // 갯수가 홀수
    if (num % 2 !== 0) {
      // 합이 0일 때
      answer.push(first + i);
    } else {
      answer.push(first - 1 + i);
    }
  }
  return answer.sort((a, b) => a - b);
}

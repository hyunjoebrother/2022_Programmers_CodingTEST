function solution(numbers, k) {
  var answer = 1;

  for (let i = 0; i < k - 1; i++) {
    answer += 2;

    // 마지막 번호일 때 범위 초과 고려
    if (answer > numbers.length) {
      answer -= numbers.length;
    }
  }
  return answer;
}

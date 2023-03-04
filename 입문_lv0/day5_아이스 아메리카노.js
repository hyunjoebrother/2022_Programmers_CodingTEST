function solution(money) {
  var answer = [];
  answer[0] = parseInt(money / 5500);
  answer[1] = money - 5500 * answer[0];
  return answer;
}

function solution(num_list) {
  var answer = [];
  var n = num_list.length;

  for (let i = 1; i <= n; i++) {
    answer.push(num_list[n - i]);
  }

  return answer;
}

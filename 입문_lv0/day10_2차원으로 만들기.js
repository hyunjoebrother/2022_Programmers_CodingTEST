function solution(num_list, n) {
  var answer = [];
  for (let i = 0; i < num_list.length / n; i++) {
    // slice : 새로운 배열로 범위만큼 자름
    answer.push(num_list.slice(i * n, i * n + n));
  }
  return answer;
}

function solution(array) {
  var answer = [];
  var max = Math.max(...array);
  answer = [max, array.indexOf(max)];

  return answer;
}

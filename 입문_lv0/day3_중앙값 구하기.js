function solution(array) {
  var answer = 0;
  // 정렬
  array.sort((a, b) => a - b);
  answer = array[(array.length - 1) / 2];
  return answer;
}

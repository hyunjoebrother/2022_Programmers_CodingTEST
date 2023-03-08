function solution(hp) {
  var answer = 0;
  var j = parseInt(hp / 5);
  var b = parseInt((hp - 5 * j) / 3);
  var i = hp - 5 * j - 3 * b;

  answer = j + b + i;

  return answer;
}

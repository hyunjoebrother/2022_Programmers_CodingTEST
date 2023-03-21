function solution(my_string) {
  var answer = 0;
  for (let i = 0; i < my_string.length; i++) {
    var numStr = 0;
    // Number.isNaN : Number type가 아닐 때
    while (Number.isNaN(Number(my_string[i])) === false) {
      numStr += my_string[i];
      i++;
    }
    answer += Number(numStr);
  }
  return answer;
}

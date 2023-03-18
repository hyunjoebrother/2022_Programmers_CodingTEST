function solution(n) {
  var answer = 0;
  var strArr = String(n).split("");
  for (let i = 0; i < strArr.length; i++) {
    answer += Number(strArr[i]);
  }
  return answer;
}

function solution(my_string) {
  var strArr = my_string.split(" ");
  var answer = Number(strArr[0]);

  for (let i = 1; i < strArr.length; i++) {
    if (strArr[i] === "+") {
      answer += Number(strArr[i + 1]);
    } else if (strArr[i] === "-") {
      answer -= Number(strArr[i + 1]);
    } else continue;
  }
  return answer;
}

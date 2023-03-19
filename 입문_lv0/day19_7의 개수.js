function solution(array) {
  var answer = 0;
  var strArr = array.join("").split("");
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === "7") answer++;
  }
  return answer;
}

//// 다른 풀이
function solution(array) {
  return array.join("").split("7").length - 1;
}

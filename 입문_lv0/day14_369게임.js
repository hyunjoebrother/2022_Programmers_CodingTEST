function solution(order) {
  var answer = 0;
  var strArr = order.toString().split("");
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === "3" || strArr[i] === "6" || strArr[i] === "9") answer++;
  }
  return answer;
}

function solution(i, j, k) {
  var answer = 0;
  var numStr = "";
  var numArr = [];

  // 문자열로 쭉 붙이고
  for (let num = i; num <= j; num++) {
    numStr += String(num);
  }

  // 자릿수 하나씩 나눠서 배열로 넣고 카운팅
  numArr = numStr.split("");
  for (let num = 0; num < numArr.length; num++) {
    if (Number(numArr[num]) === k) answer++;
  }

  return answer;
}

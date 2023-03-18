function solution(num, k) {
  var answer = 0;
  var numStr = String(num).split("");
  var kStr = String(k);
  if (numStr.includes(kStr) === true) {
    answer = Number(numStr.indexOf(kStr));
  } else return -1;
  return answer + 1;
}

//// 다른 풀이
// indexOf 함수를 사용하여 해당 인덱스의 번호를 조회한다.
const solution = (num, k) =>
  [...(num + "")].indexOf(k + "") !== -1
    ? [...(num + "")].indexOf(k + "") + 1
    : -1;

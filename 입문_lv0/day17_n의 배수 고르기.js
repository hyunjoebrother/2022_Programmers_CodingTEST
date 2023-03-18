function solution(n, numlist) {
  var answer = [];
  for (let i = 0; i < numlist.length; i++) {
    if (numlist[i] % n === 0) answer.push(numlist[i]);
  }
  return answer;
}

//// 다른 풀이
const solution = (n, numlist) => numlist.filter((a) => a % n === 0);

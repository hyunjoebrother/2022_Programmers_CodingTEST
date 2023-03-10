function solution(n) {
  var answer = 0;
  if (n === 1) {
    return 1;
  }

  for (let i = 1; i <= n; i++) {
    if (factorial(i) > n) {
      i++;
      break;
    }
    answer = i;
  }
  return answer;
}

function factorial(n) {
  var factAns = 1;
  for (let i = 1; i <= n; i++) {
    factAns *= i;
  }

  return factAns;
}

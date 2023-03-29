//// 월간 코드 챌린지 시즌2
//// 정답률 80%

function solution(left, right) {
  var answer = 0;
  var yaksu = [];

  for (let i = left; i <= right; i++) {
    // 약수 갯수 짝수
    if (yaksuNum(i) % 2 === 0) {
      answer += i;
    } else answer -= i;
  }

  return answer;
}

function yaksuNum(number) {
  var count = 0;

  for (let i = 1; i <= number; i++) {
    if (number % i === 0) count++;
  }

  return count;
}

//// 다른 풀이
for (let i = left; i <= right; i++) {
  // 제곱근이 정수면 약수의 개수는 홀수
  if (Number.isInteger(Math.sqrt(i))) {
    answer -= i;
  } else {
    answer += i;
  }
}

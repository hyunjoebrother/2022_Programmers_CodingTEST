function solution(balls, share) {
  // 조합 수식 -> 팩토리알 함수 따로
  return factorial(balls) / (factorial(balls - share) * factorial(share));
}

function factorial(num) {
  let returnFact = BigInt(1); // 정수 범위 제한
  for (let i = num; i >= 2; i--) {
    returnFact *= BigInt(i);
  }
  return returnFact;
}

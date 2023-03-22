function solution(a, b) {
  var answer = 0;
  // 최대공약수로 기약분수 만들기
  let gcd = 1;
  for (let i = 2; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) gcd = i;
  }

  b /= gcd;

  // 소인수 확인
  while (b % 2 == 0) {
    b /= 2;
  }
  while (b % 5 == 0) {
    b /= 5;
  }
  return b === 1 ? 1 : 2;
}

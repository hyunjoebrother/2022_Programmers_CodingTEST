function solution(numer1, denom1, numer2, denom2) {
  var answer = [];
  var gcd = 1;

  // 분모와 분자
  var denum = denom1 * denom2;
  var numer = numer1 * denom2 + numer2 * denom1;

  // 최대공약수 함수
  for (let i = 2; i <= Math.min(numer, denum); i++) {
    if (numer % i === 0 && denum % i === 0) {
      gcd = i;
    }
  }

  answer = [numer / gcd, denum / gcd];

  return answer;
}

function solution(dots) {
  var answer = 0;

  // 기울기 계산 함수
  function calc(a, b, c, d) {
    let abDiff, cdDiff;

    abDiff = (b[1] - a[1]) / (b[0] - a[0]);
    cdDiff = (d[1] - c[1]) / (d[0] - c[0]);

    if (abDiff === cdDiff) answer++;
  }

  // 세가지 선 조합
  calc(dots[0], dots[1], dots[2], dots[3]);
  calc(dots[0], dots[2], dots[1], dots[3]);
  calc(dots[0], dots[3], dots[1], dots[2]);

  return answer > 0 ? 1 : 0;
}

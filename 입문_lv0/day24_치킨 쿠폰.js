function solution(chicken) {
  var answer = 0;
  var coupon = chicken;

  while (coupon >= 10) {
    answer += Math.floor(coupon / 10);
    coupon = Math.floor(coupon / 10) + (coupon % 10);
  }
  return answer;
}

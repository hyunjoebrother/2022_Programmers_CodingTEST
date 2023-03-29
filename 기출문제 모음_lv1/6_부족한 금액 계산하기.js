//// 위클리 챌린지
//// 정답률 79%

function solution(price, money, count) {
  var answer = 0;
  var totalPrice = 0;

  for (let i = 1; i <= count; i++) {
    totalPrice += price * i;
  }

  if (money >= totalPrice) answer = 0;
  else answer = totalPrice - money;
  // money >= totalPrice ? 0 : totalPrice-money;

  return answer;
}

//// 월간 코드 챌린지 시즌2
//// 정답률 84%

function solution(absolutes, signs) {
  var answer = 0;

  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] === true) absolutes[i] = absolutes[i];
    else absolutes[i] = -1 * absolutes[i];

    answer += absolutes[i];
  }
  return answer;
}

//// 다른 풀이
for (let i = 0; i < absolutes.length; i++) {
  signs[i] ? (answer += absolutes[i]) : (answer -= absolutes[i]);
}

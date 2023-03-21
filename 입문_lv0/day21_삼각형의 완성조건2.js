function solution(sides) {
  var answer = 0;
  const max = Math.max(...sides);
  const min = Math.min(...sides);

  // 기존 중에서 가장 긴 변일 때
  for (let i = max - min + 1; i <= max; i++) {
    answer++;
  }
  // 새로운게 가장 긴 변 일 때
  for (let i = max + 1; i < max + min; i++) {
    answer++;
  }

  return answer;
}

//// 다른 풀이
function solution(sides) {
  return Math.min(...sides) * 2 - 1;
}

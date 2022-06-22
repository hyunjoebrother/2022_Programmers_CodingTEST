function solution(n, lost, reserve) {
  var answer = 0;
  // 처음에 체육복 1로 설정
  const clothes = Array(n).fill(1);

  // 도난당하면 -1
  lost.map((lost) => {
    clothes[lost - 1] = 0;
  });
  return answer;
}

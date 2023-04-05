//// SUMMER/WINTER Coding (2018)
//// 정답률 73%

function solution(d, budget) {
  var answer = 0;
  // 최대한 많은 물품 지원하기 위해서 sort하고 작은 비용부터 체크
  d.sort((a, b) => a - b); // 정렬할 때 a-b인지 b-a인지 꼭 체크
  var total = 0;

  for (let i = 0; i < d.length; i++) {
    answer++;
    total += d[i];
    if (total > budget) {
      answer--;
    }
  }
  return answer;
}

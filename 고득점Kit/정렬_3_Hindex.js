function solution(citations) {
  var answer = 0;
  citations.sort((a, b) => b - a);

  // 발표한 논문 수 citations.length
  for (let i = 0; i < citations.length; i++) {
    if (i < citations[i]) {
      answer++; // 인용 횟수 카운팅
    }
  }
  return answer;
}

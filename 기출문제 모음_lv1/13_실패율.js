//// 2019 KAKAO BLIND RECRUITMENT
//// 정답률 59%

function solution(N, stages) {
  var answer = [];
  // 배열에 객체처럼 넣기 {스테이지 번호, 실패율}
  var dataObj = [];
  var stagesCount = 0;
  var reachedCount = 0;
  var failRate = 0;

  // i 범위는 stages 배열의 max
  for (let i = 1; i < N + 1; i++) {
    // 스테이지별
    for (let j = 0; j < stages.length; j++) {
      if (i === stages[j]) {
        stagesCount++;
      }
      if (i <= stages[j]) {
        reachedCount++;
      }
    }
    // 각 실패율 계산
    failRate = stagesCount / reachedCount;
    dataObj.push({ stageNum: i, failRate: failRate });

    // 다시 초기화
    stagesCount = 0;
    reachedCount = 0;
  }

  // 정렬
  dataObj.sort((a, b) => b.failRate - a.failRate);

  // 정렬된 배열에서 stageNum만 push해줌
  dataObj.map((v) => answer.push(v.stageNum));

  return answer;
}

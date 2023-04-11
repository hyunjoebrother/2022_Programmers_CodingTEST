//// 2018 KAKAO BLIND RECRUITMENT
//// 정답률 58%

function solution(dartResult) {
  var answer = 0;
  var score = 0;
  var calArr = [];

  // 기회 총 3번, 각 점수 0-10
  // S D T는 각 점수 제곱수
  // 옵션 : * (바로 전 점수 2배), # (해당 점수 마이너스)

  // 한 자릿씩 판단
  for (let i = 0; i < dartResult.length; i++) {
    // 점수일 때
    if (!isNaN(dartResult[i])) {
      // 점수는 0-10
      // 10점일 때 1-0으로 들어가는 거 처리
      score = Number(dartResult[i - 1]) === 1 ? 10 : Number(dartResult[i]);
    }
    // 보너스 S일 때
    else if (dartResult[i] === "S") {
      calArr.push(score);
    }
    // 보너스 D일 때
    else if (dartResult[i] === "D") {
      calArr.push(Math.pow(score, 2));
    }
    // 보너스 T일 때
    else if (dartResult[i] === "T") {
      calArr.push(Math.pow(score, 3));
    }

    // 옵션 *일 때
    else if (dartResult[i] === "*") {
      calArr[calArr.length - 2] = calArr[calArr.length - 2] * 2;
      calArr[calArr.length - 1] = calArr[calArr.length - 1] * 2;
    }
    // 옵션 #일 때
    else if (dartResult[i] === "#") {
      calArr[calArr.length - 1] = -1 * calArr[calArr.length - 1];
    }
  }

  for (let i = 0; i < calArr.length; i++) {
    answer += calArr[i];
  }

  return answer;
}

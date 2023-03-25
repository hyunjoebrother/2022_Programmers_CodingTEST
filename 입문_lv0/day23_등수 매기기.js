function solution(score) {
  var answer = new Array(score.length).fill(1);

  // map함수 : callbackFunction 실행 결과로 새로운 배열 생성
  // Array.map(callbackFunction(currentValue, index, array), thisArg)
  // var numbers.map(number => number*2)
  var avg = score.map((v) => (v[0] + v[1]) / 2);

  for (let i = 0; i < avg.length; i++) {
    for (let j = 0; j < avg.length; j++) {
      if (avg[i] < avg[j]) answer[i]++;
    }
  }

  return answer;
}

function solution(array, commands) {
  var answer = [];

  for (let i = 0; i < commands.length; i++) {
    // commands 전체 순회
    var slicedArray = array.slice(commands[i][0] - 1, commands[i][1]); // i ~ j
    // 정렬
    slicedArray.sort((a, b) => a - b); // 오름차순
    // K번째 수
    answer.push(slicedArray[commands[i][2] - 1]);
  }
  return answer;
}

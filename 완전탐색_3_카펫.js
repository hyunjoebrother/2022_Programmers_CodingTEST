function solution(brown, yellow) {
  var answer = [];
  var sum = brown + yellow; // 전체 수

  // 최소 높이 3
  for (let height = 3; height <= brown; height++) {
    if (sum % height === 0) {
      let width = sum / height;
      if ((height - 2) * (width - 2) === yellow) {
        answer = [height, width];
      }
    }
  }
  return answer;
}

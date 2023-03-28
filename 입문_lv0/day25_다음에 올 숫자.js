function solution(common) {
  var answer = 0;
  var numA = 0;
  var numR = 0;
  var length = common.length;

  // 등차수열 판별
  if (common[2] - common[1] === common[1] - common[0]) {
    numA = common[1] - common[0];
    answer = common[length - 1] + numA;
  } else {
    numR = common[1] / common[0];
    answer = common[length - 1] * numR;
  }

  return answer;
}

function solution(before, after) {
  var answer = 0;
  // https://school.programmers.co.kr/questions/38695
  if ([...before].sort().join("") === [...after].sort().join("")) answer = 1;
  else answer = 0;

  return answer;
}

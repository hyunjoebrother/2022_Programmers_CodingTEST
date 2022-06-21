function solution(answers) {
  var answer = [];

  // 수포자들의 반복되는 규칙 배열로 저장
  let p1 = [1, 2, 3, 4, 5];
  let p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  // filter로 정답 탐색하면서 수포자들의 번호와 비교 (완전탐색)
  let s1 = answers.filter((a, i) => a === p1[i % 5]).length;
  let s2 = answers.filter((a, i) => a === p2[i % 8]).length;
  let s3 = answers.filter((a, i) => a === p3[i % 10]).length;

  // 세 사람의 점수 중 최대값 구하기
  let max = Math.max(s1, s2, s3);

  // 최대값과 일치한 점수를 가지면 answer에 저장
  if (s1 === max) answer.push(1);
  if (s2 === max) answer.push(2);
  if (s3 === max) answer.push(3);

  return answer;
}

//// 월간 코드 챌린지 시즌1
//// 정답률 67%

function solution(numbers) {
  var answer = [];

  for (let i = 0; i < numbers.length; i++) {
    // j=1이 아니라 i+1로 시작하기
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }

  // set으로 중복 제거
  answer = Array.from(new Set(answer));

  return answer.sort((a, b) => a - b);
}

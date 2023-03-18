function solution(quiz) {
  var answer = [];
  for (let i = 0; i < quiz.length; i++) {
    answer[i] = problem(quiz[i]);
  }
  return answer;
}

// OX 풀이 함수
function problem(quiz) {
  var [evaluation, result] = quiz.split(" = ");
  // eval() 메서드는 주어진 코드를 평가
  // 문자열 식을 넣으면 그에 대한 값을 반환해준다.
  // eval()에서 가져온 값과 미리 구해둔 answer의 값이 같으면 O 아니면 X를 반환한다.

  return eval(evaluation) === Number(result) ? "O" : "X";
}

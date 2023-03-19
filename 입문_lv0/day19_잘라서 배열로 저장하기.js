function solution(my_str, n) {
  let answer = [];
  let strArr = my_str.split("");

  // splice(a,b) : a번째 인덱스부터 b번째 인덱스 전까지 새로운 배열로
  while (strArr.length > 0) {
    answer.push(strArr.splice(0, n).join(""));
  }

  return answer;
}

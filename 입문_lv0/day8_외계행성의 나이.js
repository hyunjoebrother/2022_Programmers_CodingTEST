function solution(age) {
  var answer = "";
  var alph = "abcdefghij";
  var ageArr = String(age).split(""); // 23 -> ['2']['3']

  for (let i = 0; i < ageArr.length; i++) {
    // String.substr(시작위치, 길이)
    answer += alph.substr(Number(ageArr[i]), 1);
  }
  return answer;
}

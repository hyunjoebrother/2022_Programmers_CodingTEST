function solution(my_string) {
  var answer = [];
  let strArr = my_string.split(""); // 문자열을 배열로
  var result = 0;

  for (let i = 0; i < strArr.length; i++) {
    if (isNaN(strArr[i]) === false) {
      // Not a Number
      answer.push(Number(strArr[i]));
    }
  }

  for (let i = 0; i < answer.length; i++) {
    result += answer[i];
  }
  return result;
}

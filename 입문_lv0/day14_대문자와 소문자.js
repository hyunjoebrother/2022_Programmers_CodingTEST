function solution(my_string) {
  var answer = [];
  for (let i = 0; i < my_string.split("").length; i++) {
    // 아스키코드 대문자
    if (my_string[i].charCodeAt() >= 65 && my_string[i].charCodeAt() <= 90) {
      answer.push(my_string[i].toLowerCase());
    } else {
      answer.push(my_string[i].toUpperCase());
    }
  }
  return answer.join("");
}

function solution(my_string) {
  var answer = [];
  for (let i = 0; i < my_string.split("").length; i++) {
    if (my_string[i].charCodeAt() >= 65 && my_string[i].charCodeAt() <= 90) {
      answer.push(my_string[i].toLowerCase());
    } else answer.push(my_string[i]);
  }
  answer = answer.sort().join("");
  return answer;
}

//// 다른 풀이
answer = my_string.toLowerCase().split("").sort().join("");

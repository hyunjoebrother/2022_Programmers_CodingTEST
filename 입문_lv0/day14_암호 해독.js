function solution(cipher, code) {
  var answer = [];
  for (let i = code - 1; i < cipher.split("").length; i++) {
    if ((i + 1) % code === 0) {
      answer.push(cipher[i]);
    }
  }
  return answer.join("");
}

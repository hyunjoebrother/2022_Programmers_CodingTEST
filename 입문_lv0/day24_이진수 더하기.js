function solution(bin1, bin2) {
  var answer = "";

  // parseInt(str, 2) : 2진수인 str을 10진수로
  // num.toString() : num을 문자열로
  // num.toString(2) : num을 2진수로

  answer = (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);

  return answer;
}

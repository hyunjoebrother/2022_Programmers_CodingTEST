function solution(my_string, num1, num2) {
  var answer = "";
  var str1 = my_string[num1];
  var str2 = my_string[num2];
  var strArr = my_string.split("");

  strArr[num1] = str2;
  strArr[num2] = str1;

  return strArr.join("");
}

function solution(my_string) {
  var answer = "";
  var check = ["a", "e", "i", "o", "u"];
  let newString = my_string.split(""); // 문자열을 배열로

  for (let i = 0; i < check.length; i++) {
    for (let j = 0; j < my_string.length; j++) {
      if (newString.includes(check[i])) {
        // 포함여부 true
        newString.splice(newString.indexOf(check[i]), 1); // 배열 인덱스부터 갯수만큼
      }
    }
  }
  answer = newString.join("");
  return answer;
}

// function solution(my_string) {

//     return my_string.replace(/['a','e','i','o','u']/g,'')

// }

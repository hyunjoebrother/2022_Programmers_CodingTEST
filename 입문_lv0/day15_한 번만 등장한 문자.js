function solution(s) {
  var answer = [];
  var obj = {}; // 객체 (문자, 빈도수)
  var count = 0;

  // 객체 내에서 빈도수 체크
  for (let i = 0; i < s.length; i++) {
    s[i] in obj ? obj[s[i]]++ : (obj[s[i]] = 1);
  }

  var keys = Object.keys(obj);
  var values = Object.values(obj);

  for (let i = 0; i < values.length; i++) {
    if (values[i] === 1) {
      answer.push(keys[i]);
    }
  }

  return answer.sort().join("");
}

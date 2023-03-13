function solution(s) {
  var answer = 0;
  var finalArr = [];
  // 스택 배열 넣었다 뺐다 가능할듯
  let strArr = s.split(" ");

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === "Z") finalArr.pop();
    else finalArr.push(strArr[i]);
  }

  for (let i = 0; i < finalArr.length; i++) {
    answer += Number(finalArr[i]);
  }
  return answer;
}

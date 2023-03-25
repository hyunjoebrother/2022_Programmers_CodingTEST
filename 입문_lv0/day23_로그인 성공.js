function solution(id_pw, db) {
  var answer = "";

  // map함수 : callbackFunction 실행 결과로 새로운 배열 생성
  // Array.map(callbackFunction(currentValue, index, array), thisArg)
  // var numbers.map(number => number*2)
  db.map((item, i) => {
    if (item[0] === id_pw[0] && item[1] === id_pw[1]) answer = "login";
    else if (item[0] === id_pw[0] && item[1] !== id_pw[1]) answer = "wrong pw";
    else if (item[0] !== id_pw[0] && item[1] !== id_pw[1]) answer = "fail";
  });

  return answer;
}

//// 다른 풀이
function solution(id_pw, db) {
  // Array.find(callback(element, index, array), thisArg)
  // var returnValue = languageSubject.find(function(data){ return data.name === 'Node'});
  const userData = db.find(([el]) => el == id_pw[0]);
  if (userData) {
    return userData[1] == id_pw[1] ? "login" : "wrong pw";
  } else return "fail";
}

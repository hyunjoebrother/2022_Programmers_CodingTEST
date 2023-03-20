//// 테케 5,6,7 fail

function solution(polynomial) {
  var answer = "";
  var polyArr = polynomial.split(" + ");
  var numAns = 0;
  var xAns = [];
  var numText = 0;
  var ansText = "";

  for (let i = 0; i < polyArr.length; i++) {
    // 숫자 따로
    if (polyArr[i].includes("x") !== true) {
      numAns += Number(polyArr[i]);
    } else {
      xAns.push(polyArr[i]);
    }
  }

  for (let i = 0; i < xAns.length; i++) {
    xAns[i] = xAns[i].replace("x", "") || "1";
    numText += Number(xAns[i]);
  }

  //// 1x 처리
  // x만 처리
  if (numText === 1) {
    ansText = "x";
  }
  // 0x 처리
  else if (numText === 0) {
    ansText = "";
  }
  // 2x 3x 처리
  else {
    ansText = String(numText) + "x";
  }

  //// 상수 처리
  // 상수가 없을 때
  if (numAns === 0) {
    answer = ansText;
  } // 상수만 있을 때
  else if (ansText === "") {
    answer = " " + String(numAns);
  }
  // 항과 상수 모두 있을 때
  else {
    answer = ansText + " + " + String(numAns);
  }

  return answer;
}

//// 2018 KAKAO BLIND RECRUITMENT
//// 정답률 69%

function solution(n, arr1, arr2) {
  var answer = [];
  var code1 = [];
  var code2 = [];

  for (let i = 0; i < n; i++) {
    // toString(2) : 10진법을 2진법으로
    // padStart(maxLength, fill) : 특정 문자열로 채우기
    code1[i] = arr1[i].toString(2).padStart(n, 0); // _1001 -> 01001
    code2[i] = arr2[i].toString(2).padStart(n, 0);

    let temp = [];
    // code1와 code2 전체 순회
    for (let j = 0; j < n; j++) {
      if (code1[i][j] === "0" && code2[i][j] === "0") {
        temp.push(" ");
      } else {
        temp.push("#");
      }
    }
    answer.push(temp.join(""));
  }

  return answer;
}

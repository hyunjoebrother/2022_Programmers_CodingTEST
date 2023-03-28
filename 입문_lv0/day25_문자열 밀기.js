function solution(A, B) {
  var strArr = [...A]; // .split() 동일

  for (let i = 0; i < strArr.length; i++) {
    if (A === B) return 0;
    else {
      // unshift : 배열 맨 앞에 값 추가 (push : 끝에 추가)
      // pop : 배열 맨 끝에 값 제거 (shift : 앞에 제거)
      strArr.unshift(strArr.pop());
      if (strArr.join("") === B) return i + 1;
    }
  }
  return -1;
}

//// 다른 풀이
// 두 개 이어서 밀린 값 index 확인
function solution(A, B) {
  let answer = 0;
  let str = B + B;
  // indexOf() : 특정 문자열 첫번째 위치 index
  answer = str.indexOf(A);
  return answer;
}

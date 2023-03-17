function solution(s1, s2) {
  var answer = 0;
  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) answer++;
    }
  }
  return answer;
}

//// 다른 풀이
const solution = (s1, s2) => s1.filter((a, i) => s2.includes(a)).length;
// Array.filter : 주어진 배열 값들을 오름차순으로 접근하고 true이면 새로운 배열에 넣음
// Array/String.includes() : 포함여부 true/false 판단

function solution(emergency) {
  var answer = [];

  // index로 넣고 나중에 key 응급도 기준으로 sort 이후 index 출력
  let order = new Map();
  let desc = [...emergency].sort((a, b) => b - a); // '76' '24' '3'

  for (let i = 0; i < desc.length; i++) {
    order.set(desc[i], i + 1); // ('76', 1) ('24', 2) ('3', 3)
  }
  return emergency.map((v) => order.get(v)); // [3, 76, 24]에 해당하는 value 값 순서 출력

  // 다른 풀이
  // let sorted = emergency.slice().sort((a,b)=>b-a);
  // return emergency.map(v=>sorted.indexOf(v)+1);
}

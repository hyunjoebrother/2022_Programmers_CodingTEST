function solution(array, n) {
  var answer = 0;
  var distance = []; // 절댓값 비교
  for (let i = 0; i < array.length; i++) {
    distance[i] = Math.abs(n - array[i]);
  }

  // 최소값 찾기
  let min = Math.min(...distance);

  let check = [];

  for (let index = 0; index < distance.length; index++) {
    if (distance[index] === min) {
      check.push(array[index]);
    }
  }

  return Math.min(...check);
}

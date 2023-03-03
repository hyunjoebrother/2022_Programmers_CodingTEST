function solution(array) {
  // https://leejams.github.io/%EC%B5%9C%EB%B9%88%EA%B0%92-%EA%B5%AC%ED%95%98%EA%B8%B0/

  const obj = {};
  const answer = [];

  // 배열을 forEach 반복문을 돌려
  // 객체에 값이 없으면 값을 만들고 1 넣기
  // 객체에 값이 있으면 기존 값 + 1
  array.forEach((n) => {
    obj[n] = ++obj[n] || 1;
  });

  // 값과 해당 값의 갯수가 있는 객체를 array에 넣음
  // ex. [ [1,1], [2,1], [3,3] ]
  for (let key in obj) {
    answer.push([key, obj[key]]);
  }

  // 갯수 기준으로 정렬
  answer.sort((a, b) => b[1] - a[1]);

  // 배열 길이 1일 때
  if (answer.length === 1) return Number(answer[0][0]);

  // 최빈값 여러 개면 -1 반환
  if (answer[0][1] === answer[1][1]) return -1;

  return Number(answer[0][0]);
}

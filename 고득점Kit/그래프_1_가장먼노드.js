// https://yoon-dumbo.tistory.com/46

function solution(n, edge) {
  return bfs(1, edge, n);
}

// 시작 - 탐색할 배열 - 길이
const bfs = (start, arr, end) => {
  // 방문 check 배열 - 처음에는 false로 초기화
  const visited = new Array(end + 1).fill(false);

  // Node 1과 거리 배열
  const level = new Array(end + 1).fill(0);

  const queue = [start];
  visited[start] = true; // start를 방문 check

  // queue가 empty할 때까지, 탐색 끝날 때까지
  while (queue.length) {
    // 탐색을 시작할 기준이 될 Node 꺼내기
    const head = queue.shift();
    // level배열에 head와 연결되어 있는 Node들은 1과 head와 거리+1
    const lev = level[head] + 1;

    for (let node of arr) {
      // 양방향 탐색
      if (node[0] === head && !visited[node[1]]) {
        queue.push(node[1]); // 탐색할 Node
        visited[node[1]] = true;
        level[node[1]] = lev; // 거리 등록
      } else if (node[1] === head && !visited[node[0]]) {
        queue.push(node[0]);
        visited[node[0]] = true;
        level[node[0]] = lev;
      }
    }
  }
  // 가장 먼 거리
  const maxLevel = Math.max.apply(null, level);
  return level.filter((i) => i === maxLevel).length;
};

// https://velog.io/@kwb020312/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%95%88%EC%A0%84%EC%A7%80%EB%8C%80

function solution(board) {
  var answer = 0;
  // 전체 순회
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      // board[i][j] 가 1, 지뢰일 때 > 상하좌우대각선 검사
      if (board[i][j] === 1) {
        // 해당 칸이 0일 때, 2로 변경
        // 맨윗줄 아닐 때
        if (i !== 0 && board[i - 1][j] !== 1) board[i - 1][j] = 2;
        // 맨아랫줄 아닐 때
        if (i !== board.length - 1 && board[i + 1][j] !== 1)
          board[i + 1][j] = 2;
        // 맨왼쪽 아닐 때
        if (j !== 0 && board[i][j - 1] !== 1) board[i][j - 1] = 2;
        // 맨오른쪽 아닐 때
        if (j !== board[i].length - 1 && board[i][j + 1] !== 1)
          board[i][j + 1] = 2;

        // 맨대각선 윗왼쪽 아닐 때
        if (i !== 0 && j !== 0 && board[i - 1][j - 1] !== 1)
          board[i - 1][j - 1] = 2;
        // 맨대각선 윗오른쪽 아닐 때
        if (i !== 0 && j !== board[i].length - 1 && board[i - 1][j + 1] !== 1)
          board[i - 1][j + 1] = 2;
        // 맨대각선 아랫왼쪽 아닐 때
        if (i !== board.length - 1 && j !== 0 && board[i + 1][j - 1] !== 1)
          board[i + 1][j - 1] = 2;
        // 맨대각선 아랫오른쪽 아닐 때
        if (
          i !== board.length - 1 &&
          j !== board[i].length - 1 &&
          board[i + 1][j + 1] !== 1
        )
          board[i + 1][j + 1] = 2;
      }
    }
  }
  // Array.forEach(전체순회)
  board.forEach((a) => a.forEach((b) => (b === 0 ? answer++ : null)));
  return answer;
}

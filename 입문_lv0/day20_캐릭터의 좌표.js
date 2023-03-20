function solution(keyinput, board) {
  //// 좌표 설정
  var x = 0;
  var y = 0;

  //// 보드 범위 제한
  var range = [board[0] / 2, board[1] / 2];

  //// 게임 방향키
  for (let i = 0; i < keyinput.length; i++) {
    if (keyinput[i] === "right" && x + 1 < range[0]) x++;
    if (keyinput[i] === "left" && x - 1 > range[0] * -1) x--;

    if (keyinput[i] === "up" && y + 1 < range[1]) y++;
    if (keyinput[i] === "down" && y - 1 > range[1] * -1) y--;
  }

  return [x, y];
}

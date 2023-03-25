function solution(babbling) {
  var answer = 0;
  var baby = ["aya", "ye", "woo", "ma"];

  for (let i = 0; i < babbling.length; i++) {
    let init = babbling[i];

    // 가능한 옹알이 배열
    for (let j = 0; j < baby.length; j++) {
      // 발음 가능한 문자 포함여부
      if (babbling[i].includes(baby[j]) === true) {
        // 할 수 있는 단어는 X로 치환
        init = init.replace(baby[j], "X");
      }
    }

    init = init.replace(/X/gi, ""); // X를 공백으로 치환
    if (init.length === 0) answer++;
  }

  return answer;
}

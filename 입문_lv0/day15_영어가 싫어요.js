function solution(numbers) {
  var numArr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  // 해당 키워드 발견하면 인덱스 출력

  for (let i = 0; i < numArr.length; i++) {
    numbers = numbers.split(numArr[i]).join(i);
  }

  return Number(numbers);
}

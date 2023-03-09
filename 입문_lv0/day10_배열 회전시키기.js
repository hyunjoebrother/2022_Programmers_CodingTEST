function solution(numbers, direction) {
  if (direction === "left") {
    // 맨 앞을 제거하고(shift) 맨 끝에 추가(push)
    numbers.push(numbers.shift());
  } else if (direction === "right") {
    // 맨 끝을 제거하고(pop) 맨 앞에 추가(unshift)
    numbers.unshift(numbers.pop());
  }

  return numbers;
}

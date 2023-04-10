//// SUMMER/WINTER Coding (2018)
//// 정답률 60%

function solution(nums) {
  var answer = 0;

  // 숫자 3개 뽑기 - 조합 구현
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        // 숫자 3개 더한 값
        var sum = nums[i] + nums[j] + nums[k];

        // 소수 판별
        if (isPrime(sum) === true) answer++;
      }
    }
  }

  return answer;
}

// 소수 판별 함수
function isPrime(number) {
  var yaksu = 0;

  for (let i = 1; i <= number; i++) {
    if (number % i === 0) yaksu++;
  }

  if (yaksu === 2) return true;
  else false;
}

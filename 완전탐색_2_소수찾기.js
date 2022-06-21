function solution(numbers) {
  var answer = 0;
  var primeNumbers = [];

  // 1. 소수 체크
  const checkPrime = (num) => {
    let count = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        count++;
      }
      if (count >= 3) {
        break; // 1과 자기 자신
      }
    }

    if (count === 2 && !primeNumbers.includes(num)) {
      primeNumbers.push(num);
    }
  };

  // 2. 숫자 만들기
  const mergeNumbers = (arr, str) => {
    if (arr.length > 0) {
      for (let i = 0; i < arr.length; i++) {
        const temp = [...arr]; // 배열 복사 (나머지 해당 없음)
        temp.splice(i, 1); // i번째 index 하나 삭제
        mergeNumbers(temp, str + arr[i]);
      }
    }
    //console.log(str);

    if (str.length > 0) {
      checkPrime(+str); // 숫자로 바꾸는 단항연산자 +
    }
  };

  const numbersArr = numbers.split(""); // 한 글자씩 자르기
  mergeNumbers(numbersArr, "");

  answer = primeNumbers.length;
  return answer;
}

# 📌자바스크립트 알고리즘 정리 .tip

**1. 최대공약수 구하기**
```
for (let i = 2; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) {
      gcd = i;
    }
  }
```

<br>

**2. 정렬**
```
array.sort((a, b) => a - b);
```

<br>

**3. 최빈값 구하기**
 - 반복문 **forEach** 돌리기
   ```
   array.forEach((n)=>{
    obj[n] = ++obj[n] || 1;
   });
   ```
   - 객체 obj에 값이 없으면 값을 만들고 1 넣기
   - 객체 obj에 값이 있으면 기존 값+1
   
  <br>
  
  - **객체를 배열에** 넣기
  ```
  for (let key in obj) {
    answer.push([key, obj[key]]);
  }
  ```
  - 값과 해당 값의 갯수가 있는 객체 obj를 array에 넣기
  - ex. [[1,1], [2,1], [3,3]]
  
<br>

**4. 특정 문자 제거하기**
```
answer = my_string.split(letter).join("");
```

<br>

**5. 문자열 자르기**
```
String(age).split(""); // [...age]와 동일 (**구조분해할딩**)
```
  - 23 -> ['2'], ['3']
```
String.substr(시작위치, 길이)
```
```
newString.splice(newString.indexOf(check[i]), 1)
```
- 배열 인덱스부터 갯수만큼 자르기

<br>

**6. 특정 순서 정하기**
- **Map**으로 index 넣고, 순서 기준인 key로 sort하기
- key에 해당하는 **value** 값 구하기
```
let order = new Map();
  let desc = [...emergency].sort((a, b) => b - a); // '76' '24' '3'

  for (let i = 0; i < desc.length; i++) {
    order.set(desc[i], i + 1); // ('76', 1) ('24', 2) ('3', 3)
  }
  return emergency.map((v) => order.get(v)); // [3, 76, 24]에 해당하는 value 값 순서 출력
```

<br>

**7. 팩토리알 함수**
```
function factorial(num) {
  let returnFact = BigInt(1); // 정수 범위 제한
  for (let i = num; i >= 2; i--) {
    returnFact *= BigInt(i);
  }
  return returnFact;
}
```
```
function factorial(n) {
  var factAns = 1;
  for (let i = 1; i <= n; i++) {
    factAns *= i;
  }

  return factAns;
}
```

<br>

**8. 모스부호 값 매칭하기**
- 공백으로 구분 후 각 모스부호 입력해서 값 매칭
```
const morse = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
  };
  answer = letter
    .split(" ")
    .map((a) => morse[a])
    .join("");
  return answer;
```

<br>

**9. 배열 자르기**
```
array.slice(i * n, i * n + n)
```
- 새로운 배열로 범위만큼 자르기
- a번째 인덱스부터 b번째 인덱스 전까지 새로운 배열로 자르기
```
my_string.split("");
```
- 문자열을 배열로

<br>

**10. 배열 회전시키기**
- 배열 값 조작하기
```
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
```

<br>

**11. 합성수 찾기***
- 전체 순회 방식 확인
```
 // 1부터 n까지 순회
  for (let i = 1; i <= n; i++) {
    // 해당 수의 약수 갯수 확인
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        isNum++;
      }
    }
    if (isNum > 2) {
      answer++;
    }
    // 다시 약수 카운팅 초기화
    isNum = 0;
  }
```

<br>

**12. 모음 제거하기**
```
my_string.replace(/['a','e','i','o','u']/g,'')
```

<br>

**13. 숫자 판별**
```
if (isNaN(strArr[i]) === false) {
      // Not a Number
      answer.push(Number(strArr[i]));
    }
```

<br>

**14. 배열에서 특정 값 제거하기**
```
if (prime.includes(1) === true) {
    prime.slice(1); // split도 가능한듯
  }
```

<br>

**15. 배열에서 중복 제거하기**
```
Array.from(new Set(prime))
```
- Array.from : 문자열/배열 객체를 배열로
- new Set() : 배열의 중복 요소 제거

<br>

**16. 특정 연산자**
- 절댓값
```
Math.abs()
```
- 최솟값
```
Math.min()
```
- 거듭제곱 a^b
```
Math.pow(a,b)
```
- 제곱근
```
Math.sqrt()
```
- 정수 판별
```
Number.isInteger()
```

<br>

**17. 아스키코드 변환**
- 대문자일 때 소문자로 변환
```
 if (my_string[i].charCodeAt() >= 65 && my_string[i].charCodeAt() <= 90) {
      answer.push(my_string[i].toLowerCase());
    } else {
      answer.push(my_string[i].toUpperCase());
    }
```

<br>

**18. 객체에서 빈도수 구하기**
- 한 번만 등장한 문자 구하기
```
function solution(s) {
  var answer = [];
  var obj = {}; // 객체 (문자, 빈도수)
  var count = 0;

  // 객체 내에서 빈도수 체크
  for (let i = 0; i < s.length; i++) {
    s[i] in obj ? obj[s[i]]++ : (obj[s[i]] = 1);
  }

  var keys = Object.keys(obj);
  var values = Object.values(obj);

  for (let i = 0; i < values.length; i++) {
    if (values[i] === 1) {
      answer.push(keys[i]);
    }
  }

  return answer.sort().join("");
}
```

<br>

**19. 배열의 유사도 확인**
```
solution = (s1, s2) => s1.filter((a, i) => s2.includes(a)).length
```
- Array.filter : 주어진 배열 값들을 오름차순으로 접근하고 true이면 새로운 배열에 넣음
- Array/String.includes() : 포함여부 true/false 판단

<br>

**20. eval() 메소드로 평가**
- OX풀이
```
function problem(quiz) {
  var [evaluation, result] = quiz.split(" = ");
  return eval(evaluation) === Number(result) ? "O" : "X";
}
```
- eval() 메서드는 주어진 코드를 평가
- 문자열 식을 넣으면 그에 대한 값을 반환해준다.
- eval()에서 가져온 값과 미리 구해둔 answer의 값이 같으면 O 아니면 X를 반환한다.

<br>

**21. index 위치 구하기**
- **indexOf()** : 특정 문자열 첫번째 위치
```
var numStr = String(num).split("");
var kStr = String(k);
 if (numStr.includes(kStr) === true) {
   answer = Number(numStr.indexOf(kStr));
 } else return -1;
```

<br>

**22. 좌표 설정하기**
```
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
```

<br>

**23. Map 함수**
- callbackFunction 실행 결과로 새로운 배열 생성
- Array.map(callbackFunction(currentValue, index, array), thisArg)
```
var numbers.map(number => number*2)
var avg = score.map((v) => (v[0] + v[1]) / 2);
```

<br>

**24. find 함수**
- Array.find(callback(element, index, array), thisArg)
```
 var returnValue = languageSubject.find(function(data){ return data.name === 'Node'});
 const userData = db.find(([el]) => el == id_pw[0]);
```

<br>

**25. 문자열 치환하기**
```
init = init.replace(/X/gi, "");
```
- X를 공백으로 치환
```
init = init.replace(baby[j], "X");
```
- 특정 문자를 X로 치환

<br>

**26.문자열 쭉 이어서 처리하기**
```
for (let num = i; num <= j; num++) {
    numStr += String(num);
  }
```

<br>

**27. 진수 변환하기**
- 2진수를 10진수로
```
parseInt(str, 2)
```
- num을 2진수로
```
num.toString(2)
```
- num을 문자열로
```
num.toString()
```

<br>


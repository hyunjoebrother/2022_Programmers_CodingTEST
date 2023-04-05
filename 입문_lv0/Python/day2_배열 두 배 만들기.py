def solution(numbers):
    answer = []
    for i in numbers:
        # Array.append(x) : 새로운 요소를 맨 끝에 추가
        answer.append(i*2)
    return answer


## 반복문 구간 지정
# for i in range(a, b)
# a부터 b까지. 시작 0이면 range(5)


#### 다른 풀이
return [num*2 for num in numbers]
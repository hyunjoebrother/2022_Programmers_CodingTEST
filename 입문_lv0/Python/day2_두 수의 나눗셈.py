import math

def solution(num1, num2):
    answer = 1000*(num1/num2)
    return math.floor(answer)

## 파이썬은 import해주기
# 올림 : math.ceil()
# 내림 : math.floor()
# 반올림 : math.round()
# 소숫점 버림 : math.trunc()
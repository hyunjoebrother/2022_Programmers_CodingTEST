import math

def solution(n):
    if n<=7:
        answer = 1
    else:
        answer = math.ceil(n/7)
    return answer
import math

def solution(array):
    answer = 0
    
    # 배열 오름차순 배열
    array.sort()
    
    # 리스트 길이
    length = len(array)
    
    answer = array[math.floor(length/2)]
    
    return answer

## 파이썬 정렬
# List.sort() - 리스트는 배열이라고 생각
# 내림차순 : List.sort(reverse=True)
# sorted 함수 - 정렬된 새로운 리스트 반환
# 리스트 a -> sorted(a), sorted(a, reverse=True)
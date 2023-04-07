def solution(num_list):
    answer = []
    length = len(num_list)
    
    # i-- 감소시키기
    for i in range(length-1, -1, -1):
        answer.append(num_list[i])
        
    return answer

#### 다른 풀이
# answer = num_list[::-1]
# num_list.reverse() return num_list
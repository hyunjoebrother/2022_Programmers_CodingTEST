from collections import Counter

def solution(array):
    answer = 0
    counter = Counter(array) # 각 data 빈도를 객체 사전형식으로 반환
    most = counter.most_common() # 빈도수를 내림차순으로 정렬
    ## [(4, 3), (3, 2), (5, 2), (1, 1), (2, 1)]
    
    ## 최빈값
    maximum = most[0][1]
    mostList = []
    
    for num in most:
        if num[1] == maximum:
            mostList.append(num[0])
    
    if len(mostList) >= 2:
        answer = -1
    else:
        answer = mostList[0]
        
    return answer


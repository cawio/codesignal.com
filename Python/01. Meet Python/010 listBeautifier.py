def solution(a):
    res = a[:]
    while res and res[0] != res[-1]:
        print(res)
        a, *res, b = res
    return res

print(solution([3, 4, 2, 4, 38, 4, 5, 3, 2]))
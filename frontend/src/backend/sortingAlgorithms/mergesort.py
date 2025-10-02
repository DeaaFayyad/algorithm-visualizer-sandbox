def merge(arr):
    animations=[]
    def mergeArray(arr, l, m, r):
        i, j = l, m+1
        temp=[]
        while i <= m and j < r:
            animations.append(("compare", i, j))
            if arr[i] <= arr[j]:
                temp.append(arr[i])
                i+=1
            else:
                temp.append(arr[j])
                j+=1
        while i <= m:
            temp.append(arr[i])
            i+=1
        while j <= m:
            temp.append(arr[j])
            j+=1
        while j <= r:
            temp.append(arr[j])
            j+=1
        for k in range(len(temp)):
            arr[l+k] = temp[k]
            animations.append(("overwrite", l+k, temp[k]))
            

    def helper(arr, l, r):
        if l >= r: return
        m = (l+r)//2
        helper(arr, l, m)
        helper(arr, m+1, r)
        merge(arr, l, m, r)


    helper(arr, 0, len(arr)-1)
    return animations
# partition function
def quick(arr):
    animations = []
    def swap(arr, i, j):
        arr[i], arr[j] = arr[j], arr[i]
    
    def partition(arr, low, high):
        pivot = arr[high]
        animations.append(("choose pivot", high, pivot))
        i = low - 1
   
        for j in range(low, high):
            animations.append(("compare", j, high))
            if arr[j] < pivot:
                i += 1
                animations.append(("swap", i, j))
                swap(arr, i, j)
        
        # move pivot after smaller elements and
        # return its position
        animations.append(("swap", i + 1, high))
        swap(arr, i + 1, high)
        animations.append(("swap", i + 1))
        return i + 1
    
    def quickSort(arr, low, high):
        if low < high:
            pi = partition(arr, low, high)
            quickSort(arr, low, pi - 1)
            quickSort(arr, pi + 1, high)


    quickSort(arr, 0, len(arr) - 1)
    return animations
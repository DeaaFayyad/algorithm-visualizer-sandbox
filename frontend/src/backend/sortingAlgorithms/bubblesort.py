def bubbleSort(arr):
    animations = []
    n = len(arr)
    
    for i in range(n):
        swapped = False

        for j in range(0, n-i-1):
            animations.append(("compare", j, j+1))
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                animations.append(("swap", j, arr[j]))
                animations.append(("swap", j+1, arr[j+1]))
                swapped = True
        if (swapped == False):
            break
        animations.append(("sorted", n - i - 1))

    return animations

if __name__ == "__main__":
    arr = [64, 34, 25, 12, 22, 11, 90]

    bubbleSort(arr)

    print("Sorted array:")
    for i in range(len(arr)):
        print("%d" % arr[i], end=" ")
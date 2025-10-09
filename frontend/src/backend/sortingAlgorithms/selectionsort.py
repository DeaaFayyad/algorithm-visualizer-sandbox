def selection_sort(arr):
    animations = []
    n = len(arr)
    for i in range(n - 1):
      
        min_idx = i
        
        for j in range(i + 1, n):
            animations.append(("compare", j, min_idx))
            if arr[j] < arr[min_idx]:
              
                min_idx = j
                animations.append(("set min", i, min_idx))

        if min_idx != i:
            arr[i], arr[min_idx] = arr[min_idx], arr[i]
            animations.append(("swap", i, min_idx))
        animations.append(("sorted", i))
    return animations

def print_array(arr):
    for val in arr:
        print(val, end=" ")
    print()

if __name__ == "__main__":
    arr = [64, 25, 12, 22, 11]
    
    print("Original array: ", end="")
    print_array(arr)
    
    selection_sort(arr)
    
    print("Sorted array: ", end="")
    print_array(arr)
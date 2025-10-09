def selection_sort(arr):
    animations = []
    n = len(arr)
    for i in range(n - 1):
      
        # Assume the current position holds
        # the minimum element
        min_idx = i
        
        # Iterate through the unsorted portion
        # to find the actual minimum
        for j in range(i + 1, n):
            animations.append(("compare", j, min_idx))
            if arr[j] < arr[min_idx]:
              
                # Update min_idx if a smaller element is found
                min_idx = j
                animations.append(("set min", i, min_idx))
        
        # Move minimum element to its
        # correct position
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
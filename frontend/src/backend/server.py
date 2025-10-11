from fastapi import FastAPI
from src.backend.sortingAlgorithms.mergesort import merge
from src.backend.sortingAlgorithms.bubblesort import bubbleSort
from src.backend.sortingAlgorithms.insertionsort import insertionSort
from src.backend.sortingAlgorithms.selectionsort import selection_sort
from src.backend.sortingAlgorithms.quicksort import quick
from pydantic import BaseModel

class SortRequest(BaseModel):
    algorithm: str
    array: list[int]

app = FastAPI()

@app.post("/sort")
def sort_array(request: SortRequest):
    algorithms = {
        "merge": merge,
        "bubble": bubbleSort,
        "insertion": insertionSort,
        "selection": selection_sort,
        "quick": quick,
    }
    
    algo = request.algorithm.lower()
    if algo not in algorithms:
        return {"error": "Invalid algorithm"}

    animations = algorithms[algo](request.array)
    return {"animations": animations, "sorted": sorted(request.array)}

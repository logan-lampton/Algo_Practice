function pivot(arr, start = 0, end = arr.length+1){

    const swap = (array, i, j) => {
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp;
    }

    let pivot = arr[start];
    let swapIdx = start;

    for(let i = start + 1; i < arr.length; i++){
        if(pivot > arr[i]){
            swapIdx++;
            swap(arr, swapIdx, i)
        }
    }
    swap(arr, start, swapIdx)
    return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if(left < right){
        let pivotIndex = pivot(arr, left, right)
        // left side
        quickSort(arr, left, pivotIndex - 1);
        // right side
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

quickSort([4, 8, 2, 1, 5, 7, 6, 3])

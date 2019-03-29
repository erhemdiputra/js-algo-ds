function partition(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start]
    var swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++
            swap(arr, swapIdx, i)
        }
    }

    swap(arr, start, swapIdx)
    return swapIdx
}

function swap(arr, idx1, idx2) {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = partition(arr, left, right);
        // left
        quickSort(arr, left, pivotIndex - 1);
        // right
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}


let arr = [4, 6, 9, 1, 2, 5, 3];
let sortedArr = quickSort(arr)
console.log(sortedArr);
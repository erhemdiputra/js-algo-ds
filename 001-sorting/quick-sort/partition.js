function partition(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start]
    var swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++
            swap(arr, swapIdx, i)
            console.log(arr, swapIdx, i)
        }
    }

    swap(arr, start, swapIdx)
    console.log(arr)
    return swapIdx
}

function swap(arr, idx1, idx2) {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

let arr = [9, 4, 8, 2, 1, 5, 7, 6, 3]
let pivot = partition(arr)
console.log(pivot);
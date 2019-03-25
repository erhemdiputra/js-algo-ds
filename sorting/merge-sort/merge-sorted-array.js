function merge(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j])
        j++;
    }

    return result
}

let result = merge([1, 10, 50], [2, 14, 99, 100])
console.log(result)
































// let merged = [];
// let index1 = 0;
// let index2 = 0;
// let current = 0;

// while (current < (arr1.length + arr2.length)) {
//     let unmerged1 = arr1[index1];
//     let unmerged2 = arr2[index2];

//     if (unmerged1 < unmerged2) {
//         merged[current] = unmerged1;
//         index1++;
//     } else {
//         merged[current] = unmerged2;
//         index2++;
//     }

//     console.log(`index1 = ${index1}, indexx2 = ${index2}`);

//     current++;
// }
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

function radixSort(nums) {
    let maxDigitCount = mostDigits(nums)
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({
            length: 10
        }, () => []);

        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k)
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

let arr = [23, 345, 5467, 12, 2345, 9852]
let sortedArr = radixSort(arr);
console.log(sortedArr)

// function radixSort(arr) {
//     let maxDigit = mostDigits(arr);
//     let bucket = [];

//     for (var i = 0; i < maxDigit; i++) {
//         for (var j = 0; j < 10; j++) {
//             bucket[j] = [];
//         }

//         for (let k = 0; k < arr.length; k++) {
//             let digit = getDigit(arr[k], i);
//             bucket[digit].push(arr[k])
//         }

//         let newArr = [];
//         for (let l = 0; l < 10; l++) {
//             for (let m = 0; m < bucket[l].length; m++) {
//                 newArr.push(bucket[l][m]);
//             }
//         }

//         arr = newArr
//     }

//     return arr
// }
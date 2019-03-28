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

let digit = getDigit(54321, 3)
console.log(digit);

let numOfDigit = digitCount(54321)
console.log(numOfDigit);

let maxDigits = mostDigits([1, 12, 123, 1234, 12345])
console.log(maxDigits);
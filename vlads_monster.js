// Given a number n, we need to print all n-digit binary numbers with equal sum in left and right halves. If n is odd, then mid element can be either 0 or 1.
//
// Examples:
//
// Input  : n = 4
// Output : 1001 1010 1111
//
// Input : n = 5
// Output : 10001 10101 10010 10110 11011 11111

// term 1: 2^0
// term 2: 2^1
// term 3: 2^2
//
// 101
//
// (term 1) 1 + (term 2) + 0 + (term 3) + 4 = 5
let _depth = 0;

function binarySolver(length) {
  return determineEqualSumBinaries(length, 0, []);
}

function determineEqualSumBinaries(length, num, arr) {
  let binary = Number(num).toString(2);
  if (binary.length > length) return arr;
  if (binary.length !== length)
    return determineEqualSumBinaries(length, num + 1, arr);
  if (isEqualSumBinary(binary)) arr.push(binary);
  return determineEqualSumBinaries(length, num + 1, arr);
}

function isEqualSumBinary(num) {
  return num.split().sort().replace(/([01])(1)/g, "").length < 2;
}

console.log(determineEqualSumBinaries(4));

// function isEqualSumBinary(num) {
//   return num.toString().split().sort().replace(/([01])(1)/g, "").length < 2;
// }

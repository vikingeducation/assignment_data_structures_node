// Given a number n, we need to print all n-digit binary numbers with equal sum in left and right halves.
// If n is odd, then mid element can be either 0 or 1.

// Examples:

// Input  : n = 4
// Output : 1001 1010 1111

// Input : n = 5
// Output : 10001 10101 10010 10110 11011 11111

let binarySums = num => {
  //use only 1s and 0s that are concatenated to have N number of digits
  placeholder = "";
  for (let i = 0; i < num; i++) {
    placeholder += 0;
  }
  let outputArr = [];
  for (let x = 0; x < num; x++) {
    for (let y = 0; y < 2; y++) {
      placeholder[x] = y.toString();

      let midpoint = placeholder.length / 2;

      let leftSum = 0;
      for (let a = 0; a < midpoint; a++) {
        leftSum += Number(placeholder[a]);
      }

      let rightSum = 0;
      for (let b = midpoint; b < placeholder.length; b++) {
        rightSum += Number(placeholder[b]);
      }

      if (leftSum === rightSum) {
        outputArr.push(placeholder);
      }
    }
  }
  return outputArr;
};

console.log(binarySums(2));

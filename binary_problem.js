// get input of n length
// generate all the binary combos
// cut in half for each, if each half's sum is equal => print
// disregard the middle number

// const binPrinter = n => {
//   let arr = [];
//   for (let i = 2 ** n - 1; i >= 2 ** (n - 1); i--) {
//     arr.push(i.toString(2));
//   }
//   console.log(arr);
// };
//
// binPrinter(4);

// while val < 2**n - 1 && val > 2**(n-1)
//   doRecursiveCheck(val-1).toString(2)

// const sumdigRecursive = n => {
//   n = Math.abs(n);
//   if (n < 10) return n;
//   const digit = Math.floor(n % 10);
//   return digit + sumdigRecursive(Math.floor((n /= 10)));
// };

let result = [];
const binaryChecker = (n, val) => {
  let value = 2 ** n - val;

  let baseCase = 2 ** (n - 1);

  if (value === baseCase) return result;
  let binValue = value.toString(2).split("");
  let middle = null;
  //check if even
  if (binValue.length % 2 !== 0) {
    middle = binValue.splice(binValue.length / 2, 1);
  }

  let firstHalf = binValue.slice(0, Math.floor(binValue.length / 2));
  let secondHalf = binValue.slice(
    Math.floor(binValue.length / 2),
    binValue.length
  );
  let firstSum = firstHalf.reduce((sum, char) => {
    return sum + parseInt(char);
  }, 0);
  let secondSum = secondHalf.reduce((sum, char) => {
    return sum + parseInt(char);
  }, 0);
  if (firstSum === secondSum) {
    if (middle) {
      result.push(
        parseInt(
          firstHalf
            .concat(middle)
            .concat(secondHalf)
            .join("")
        )
      );
    } else {
      result.push(parseInt(firstHalf.concat(secondHalf).join("")));
    }
  }
  return binaryChecker(n, val + 1);
};

console.log(binaryChecker(1, 1));
console.log(binaryChecker(2, 1));
console.log(binaryChecker(3, 1));
console.log(binaryChecker(4, 1));
console.log(binaryChecker(5, 1));
console.log(binaryChecker(6, 1));
// console.log(binaryChecker(7, 1));
// console.log(binaryChecker(8, 1));

////

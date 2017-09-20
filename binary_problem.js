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
let result = [];
const binaryChecker = (n, val) => {
  let value = 2 ** n - val;

  let baseCase = 2 ** (n - 1);

  if (value === baseCase) return result;
  let binValue = value.toString(2).split("");
  if (binValue % 2 !== 0) {
    binValue.splice(binValue.length / 2, 1);
  }

  let firstHalf = binValue.slice(0, Math.floor(binValue.length / 2));
  let secondHalf = binValue.slice(
    Math.floor(binValue.length / 2),
    binValue.length
  );
  return binaryChecker(n, val + 1);
};

console.log(binaryChecker(5, 1));

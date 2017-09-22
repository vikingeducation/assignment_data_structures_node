"use strict";
const nonsenseToZeroTail = (num, acc = 0) =>
  num < 0 ? acc : nonsenseToZeroTail(num - 1, acc + num);
console.log("result: ", nonsenseToZeroTail(100000000));

// const other = n => {
//   let result = n < 1 ? 0 : n - 1;
//   return other(result);
// };
// const tail = n => {
//   // if (n < 1) return 0;
//   // let result = n < 1 ? 0 : n - 1;
//   return other(n);
// };
// console.log(tail(10));
// console.log(tail(Infinity));

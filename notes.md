```js
// const callStack = (binary, digits) => {
//   if (digits === 1) return [0, 1];
//   return [[0, callStack(null, digits - 1)], [1, callStack(null, digits - 1)]];
// };
const callStack = (binary, digits) => {
  if (digits === 1) return ["0", "1"];
  return [
    ["0" + callStack(null, digits - 1)],
    ["1", callStack(null, digits - 1)]
  ];
};
// console.log(callStack(null, 1));
console.log(callStack(null, 2));

///sums of n-digit binary numbers
n = 2
1
n = 3
1
n = 4
2 1
n = 5
2 1
n = 6
3 2 1

///give me the binary number that sum to s for n digits

//possible base cases
s = 1
n = 1
1
s = 1
n = 0
0

///other calls to consider
s = 2
n = 2
11

n = 2
s = 1
01
10

n = 2
s = 0
00

n = 3
s = 0

n = 3
s = 1

n = 3
s = 2



const thing = (n) => {

  return check(n - 1).concat( check(n))
}

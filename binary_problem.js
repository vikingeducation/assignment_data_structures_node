// get input of n length
// generate all the binary combos
// cut in half for each, if each half's sum is equal => print
// disregard the middle number

const binPrinter = n => {
  let arr = [];
  for (let i = 2 ** n - 1; i >= 2 ** (n - 1); i--) {
    arr.push(i.toString(2));
  }
  console.log(arr);
};

binPrinter(6);

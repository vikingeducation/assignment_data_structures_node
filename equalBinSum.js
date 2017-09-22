const binSum = (n = 0, result = "", first = true) => {
  if (n === 0) {
    const pivot = Math.floor(result.length / 2);
    const extra = result.length % 2;
    let [left, right] = [result.slice(0, pivot), result.slice(pivot + extra)];
    left = left.split("").reduce((sum, char) => sum + +char, 0);
    right = right.split("").reduce((sum, char) => sum + +char, 0);
    if (left === right) console.log(result);
  } else if (first) {
    binSum(n - 1, result + "1", false);
  } else {
    binSum(n - 1, result + "0", false);
    binSum(n - 1, result + "1", false);
  }
};

binSum(process.argv[2]);

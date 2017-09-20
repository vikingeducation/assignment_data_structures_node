binary = n => {
  let num = 1;
  bin = num.toString(2);
  let binaries = [];

  // find the first of correct length
  while (bin.length < n) {
    num++;
    bin = num.toString(2);
  }

  // continue while length is good
  while (bin.length === n) {
    binaries.push(bin);
    num++;
    bin = num.toString(2);
  }

  binaries = binaries.filter(num => {
    let numStr = num.toString();
    let left;
    let right = numStr.slice(Math.floor(n / 2));
    if (n % 2 === 0) {
      left = numStr.slice(0, Math.floor(n / 2));
    }
    if (n % 2 === 1) {
      left = numStr.slice(0, Math.floor(n / 2 + 1));
    }

    const sumDig = num => {
      return num < 10 ? Number(num) : num % 10 + sumDig(Math.floor(num / 10));
    };

    if (sumDig(left) === sumDig(right)) {
      return true;
    } else {
      return false;
    }
  });

  return binaries;
};

console.log(binary(5));

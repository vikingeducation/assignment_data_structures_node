binary = (n, num = 1, acc = []) => {
  let bin = num.toString(2);
  if (bin.length > n) return acc;
  while (bin.length < n) {
    num++;
    bin = num.toString(2);
  }

  let right = bin.slice(Math.floor(n / 2));
  let left = bin.slice(0, Math.floor(n / 2 + n % 2));

  const sumDig = num => {
    return +num < 10 ? +num : num % 10 + sumDig(Math.floor(num / 10));
  };

  if (sumDig(left) === sumDig(right)) acc.push(bin);

  return binary(n, ++num, acc);
};

console.log(binary(5));

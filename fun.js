binary = (n, num = 1, acc = []) => {
  if (num.toString(2).length > n) return acc;
  while (num.toString(2).length < n) num++;
  const right = num.toString(2).slice(Math.floor(n / 2));
  const left = num.toString(2).slice(0, Math.floor(n / 2 + n % 2));
  const sumDig = num =>
    num < 10 ? +num : num % 10 + sumDig(Math.floor(num / 10));
  if (sumDig(left) === sumDig(right)) acc.push(num.toString(2));
  return binary(n, ++num, acc);
};

binary(5);

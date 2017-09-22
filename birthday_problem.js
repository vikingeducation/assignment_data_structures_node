let count = 364;
let prob = 1;
while (prob > 0.5) {
  prob *= count / 364;
  count--;
}

console.log("count: ", 364 - count);

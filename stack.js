class Stack {
  constructor(input = []) {
    this.array = input;
  }

  push(input) {
    this.array[this.array.length] = input;
  }

  pop() {
    let pop = this.array[this.array.length - 1];
    let returnArray = [];
    for (let i = 0; i < this.array.length - 1; i++) {
      returnArray[i] = this.array[i];
    }
    this.array = returnArray;
    return pop;
  }

  peek() {
    return this.array[this.array.length - 1];
  }

  get() {
    return this.array;
  }

  empty() {
    return this.array.length === 0;
  }
}

let test = new Stack();
test.push(1);
console.log("peek => ", test.peek());
console.log(test.get());
console.log("pop => ", test.pop());
console.log(test.get());
console.log(test.empty());

let originalString = new Stack("string");
let reverseString = new Stack();

while (!originalString.empty()) {
  reverseString.push(originalString.pop());
}

console.log(reverseString.get());

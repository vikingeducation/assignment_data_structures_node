class Queue {
  constructor(input = []) {
    this.array = input;
  }

  get() {
    return this.array;
  }

  empty() {
    return this.array.length === 0;
  }

  dequeue() {
    let dequeue = this.array[0];
    let returnArray = [];
    for (let i = 1; i < this.array.length; i++) {
      returnArray[i - 1] = this.array[i];
    }
    this.array = returnArray;
    return dequeue;
  }

  enqueue(input) {
    this.array[this.array.length] = input;
  }

  peek() {
    return this.array[0];
  }
}

let test = new Queue([1, 2, 3, 4]);
console.log(test.dequeue());
console.log(test.get());
test.enqueue(100);
console.log(test.get());
console.log("peek => ", test.peek());

let originalString = new Queue("string");
let reverseString = new Queue();

while (!originalString.empty()) {
  reverseString.enqueue(originalString.dequeue());
}

console.log(reverseString.get());

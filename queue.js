const assert = require('assert');

class Queue {
  constructor (elements = []) {
    this.array = elements;
  }

  enqueue(element) {
    this.array[this.array.length] = element;
    return this.array;
  }

  dequeue() {
    if (this.isEmpty()) {
      return this.array;
    }

    let newArray = [];

    for (let i = 1; i < this.array.length; i++) {
      newArray[i - 1] = this.array[i];
    }

    let removedElement = this.array[0];

    this.array = newArray;

    return removedElement;
  }

  peekQueue() {
    return this.array[0];
  }

  getQueue() {
    return this.array;
  }

  isEmpty() {
    if (this.array.length === 0) {
      return true;
    }

    return false;
  }
}

let test1 = new Queue([1, 2, 3]);
test1.enqueue("foo");
assert(test1.getQueue().toString() === [1, 2, 3, "foo"].toString());


let test2 = new Queue([1, 2, 3]);
let removedElement = test2.dequeue();
assert(test2.getQueue().toString() === [2, 3].toString());
assert(removedElement === 1);
assert(test2.peekQueue() === 2);

let test3 = new Queue([]);
let test4 = new Queue([1]);
assert(test3.isEmpty() === true);
assert(test4.isEmpty() === false);

let originalString = "Hello world!";
let stringQueue = new Queue([]);
for (let i = 0; i < originalString.length; i++) {
  stringQueue.enqueue(originalString[i]);
}

let resultString = "";
for (let i = 0; i < originalString.length; i++) {
  resultString += stringQueue.dequeue();
}
assert(originalString === resultString);
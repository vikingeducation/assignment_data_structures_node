const assert = require('assert');

class Stack {
  constructor (elements = []) {
    this.array = [...elements];
  }

  pushStack(element) {
    this.array[this.array.length] = element;
    return this.array;
  }

  getStack() {
    return this.array;
  }

  popStack() {
    let newArray = [];

    for (let i = 0; i < this.array.length - 1; i++) {
      newArray[i] = this.array[i];
    }

    let removedElement = this.array[this.array.length - 1];

    this.array = newArray;

    return removedElement;
  }

  peekStack() {
    return this.array[this.array.length - 1];
  }

  isEmpty() {
    if (this.array.length === 0) {
      return true;
    }

    return false;
  }
}

let test = new Stack([1, 2, 3]);
assert(test.peekStack().toString() === "3");
assert(test.pushStack(4).toString() === [1, 2, 3, 4].toString());

let test2 = new Stack([1, 2, 3]);
let removed = test2.popStack();
assert(test2.getStack().toString() === [1, 2].toString());
assert(removed === 3);

let test3 = new Stack([]);
assert(test3.isEmpty() === true);

let test4 = new Stack([1]);
assert(test4.isEmpty() === false);

let testString = "Hello world!";
let reversingStack = new Stack([]);
for (let i = 0; i < testString.length; i++) {
  reversingStack.pushStack(testString[i]);
}

let reversedString = "";
for (let i = 0; i < testString.length; i++) {
  reversedString += reversingStack.popStack();
}
assert(reversedString === testString.split('').reverse().join(''));
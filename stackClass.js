// Create a Stack class which implements methods to
// push, pop, and peek at the top item.
// Add an empty helper.
// Verify that you can reverse a string with your stack:

class Stack {
  constructor() {
    this.stack = [];

    this.pop = () => {
      let i = 0;
      let result = [];
      let popped = this.stack[this.stack.length - 1]
      while (this.stack.length - 1 > i) {
        result[i] = this.stack[i];
        i++;
      }
      this.stack = result;
      return popped
    };

    this.push = item => {
      this.stack[this.stack.length] = item;
    };

    this.peek = () => {
      return this.stack[this.stack.length - 1] || "nothing in stack";
    };

    this.empty = () => {
      return this.stack.length ? false : true;
    };
  }
}

const string = "Hello";
const strArr = string.split('')
const myStack = new Stack();
for (let i=0; i<strArr.length; i++) {
  myStack.push(strArr[i])
}
let reversedArr = [];
for (let i=0; i<strArr.length; i++) {
  reversedArr[i] = myStack.pop()
}
let reversedStr = reversedArr.join('')
console.log(reversedStr)


// do stuff with Stack to reverse string

// myStack.push("a");
// myStack.push("b");
// myStack.push("c");
// console.log(myStack.peek(), "should be 'c'");

// myStack.pop();
// console.log(myStack.peek(), "should be 'b'");
// myStack.pop();
// myStack.pop();
// console.log(myStack.empty(), "should be true");

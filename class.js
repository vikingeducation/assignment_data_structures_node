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
      while (this.stack.length - 1 > i) {
        result[i] = this.stack[i];
        i++;
      }
      this.stack = result;
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
const myStack = new Stack();
// do stuff with Stack to reverse string

myStack.push("a");
myStack.push("b");
myStack.push("c");
console.log(myStack.peek(), "should be 'c'");

myStack.pop();
console.log(myStack.peek(), "should be 'b'");
myStack.pop();
myStack.pop();
console.log(myStack.empty(), "should be true");

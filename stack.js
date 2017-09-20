class Stack {
  constructor() {
    this.stack = [];
  }
  push(n) {
    let newStack = [n];
    for (let i = 0; i < this.stack.length; i++) {
      newStack[i + 1] = this.stack[i];
    }
    this.stack = newStack;
  }
  pop() {
    const popped = this.stack[0];
    let newStack = [];
    for (let i = 1; i < this.stack.length; i++) {
      newStack[i - 1] = this.stack[i];
    }
    this.stack = newStack;
    return popped;
  }
  empty() {
    return !this.stack.length;
  }
}

module.exports = Stack;

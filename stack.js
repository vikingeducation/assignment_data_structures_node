class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    for (var i = this.items.length - 1; i >= 0; i--) {
      this.items[i + 1] = this.items[i];
    }
    this.items[0] = item;
  }

  pop() {
    if (!this.items.length) return;
    for (var i = 1; i < this.items.length; i++) {
      this.items[i - 1] = this.items[i];
    }
    this.items.length = this.items.length - 1;
  }

  peek() {
    return this.items[0];
  }

  empty() {
    return this.items.length === 0;
  }
}

let numStack = new Stack;

numStack.push('1');
console.log(numStack.items);

numStack.push('2');
numStack.push('3');

console.log(numStack.items);

numStack.pop();

console.log(numStack.items);

console.log(numStack.peek());
console.log(numStack.empty());

numStack = new Stack;
console.log(numStack.empty());

let str = 'hello';
let strStack = new Stack;
for (let i = 0; i < str.length; i++) { strStack.items.push(str[i]) }

let reverseStr = '';
for (let i = strStack.items.length - 1; i >= 0; i--) { reverseStr += strStack.items[i] }

console.log(reverseStr);


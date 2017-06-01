class Stack {
  constructor() {
    this.stack = [];
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  push(item) {
    this.stack[this.size] = item;
    this.size++;
    return this.stack;
  }
  pop() {
    if (this.size <= 0) return null;
    const popped = this.stack[this.size - 1];
    this.size--;
    this.stack[this.size] = null;
    return popped;
  }
  peek() {
    return this.stack[this.size - 1];
  }
}

function reverse(str) {
  let stack = new Stack();
  for (var i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  let reverseStr = "";
  while (!stack.isEmpty()) {
    reverseStr += stack.pop();
  }
  return reverseStr;
}

console.log(reverse("Javascript"));

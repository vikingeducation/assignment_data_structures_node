const Stack = class {
  constructor() {
    this.storage = [];
    this.length = 0;
  }
  pop() {
    return this.storage.splice(--this.length, 1)[0];
  }
  push(data) {
    this.storage[this.length] = data;
    return ++this.length;
  }
  peek() {
    return this.storage[this.length - 1];
  }
  isEmpty() {
    if (this.storage.length === 0) return true;
    return false;
  }
};

console.log("testing stack");
const ourStack = new Stack();

console.log("stack empty?, ", ourStack.isEmpty());
console.log("pushing 1, ", ourStack.push(1));
console.log("popping, ", ourStack.pop());

console.log("pushing 3, ", ourStack.push(3));
console.log("pushing 7, ", ourStack.push(7));
console.log("pushing 4, ", ourStack.push(4));
console.log("peeking should be 4, ", ourStack.peek());
console.log("stack empty?, ", ourStack.isEmpty());

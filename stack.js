class Stack {
  constructor() {
    const storage = [];
  }
}

const Stack = () => {
  const storage = [];
  this.pop = () => {
    return;
  };
  this.push = () => {
    return;
  };
  this.peek = () => {
    return;
  };
  this.isEmpty = () => {
    if (storage.length === 0) return true;
    return false;
  };
};

const ourStack = new Stack();

console.log("testing stack");
console.log("stack empty?", ourStack.isEmpty());

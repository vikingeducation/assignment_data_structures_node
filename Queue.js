class Queue {
  constructor() {
    this.items = {};
    this.length = 0;
  }

  enqueue(...el) {
    const _length = this.length;
    const newObj = Object.assign({}, this.items);
    for (let count = 0, i = _length; i < _length + el.length; i++) {
      newObj[i] = el[count++];
      this.length++;
    }
    this.items = newObj;
  }

  dequeue() {
    const _length = this.length;
    const element = this.items[0];

    const newObj = {};
    for (let i = 1; i < _length; i++) {
      newObj[i - 1] = this.items[i];
    }
    this.items = newObj;
    this.length--;

    return element;
  }

  peek() {
    return this.items[0];
  }

  isEmpty() {
    return !(this.length > 0);
  }

  toArray() {
    const arr = [];
    for (let i = 0; i < this.length; i++) {
      arr[i] = this.items[i];
    }
    return arr;
  }
}

const stack = new Stack();
console.log(stack.isEmpty());
stack.push("hello", "from", "the", "other", "side");
stack.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);
console.log(stack.toArray());
console.log(stack.pop()); //0
console.log(stack.pop()); //9
console.log(stack.pop()); //8
console.log(stack.pop()); //7
console.log(stack.pop()); //6
console.log(stack.peek()); //5
console.log(stack.isEmpty());

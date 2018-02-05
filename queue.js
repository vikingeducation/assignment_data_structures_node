class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    if (!this.items.length) {
      this.items = [item];
    } else {
      this.items[this.items.length] = item;
    }
  }

  dequeue() {
    if (!this.items.length) return;
    for (var i = 1; i < this.items.length; i++) {
      this.items[i - 1] = this.items[i];
    }
    this.items.length = this.items.length - 1;
  }

  peek() {
    return this.items[0];
  }
}

const queue = new Queue;

queue.enqueue('1');
queue.enqueue('2');
queue.enqueue('3');
console.log(queue.items);

queue.dequeue();
console.log(queue.items);

console.log(queue.peek());


class Queue {
  constructor() {
    this.queue = [];
    this.head = -1;
    this.tail = -1;
  }
  enqueue(n) {
    this.tail += 1;
    this.queue[this.tail] = n;
  }
  dequeue() {
    if (this.head < this.tail) {
      this.head += 1;
      return this.queue[this.head];
    }
  }
  empty() {
    return this.head === this.tail;
  }
  peek() {
    return this.queue[this.head + 1];
  }
}

module.exports = Queue;

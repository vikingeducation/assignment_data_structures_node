class Queue {
  constructor() {
    this.queue = [];
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  enqueue(item) {
    this.queue[this.size] = item;
    this.size++;
    return this.queue;
  }
  dequeue() {
    if (this.size <= 0) return null;
    const deq = this.queue[0];
    const newQueue = [];
    for (let i = 1; i < this.size; i++) {
      newQueue[i - 1] = this.queue[i];
    }
    this.size--;
    this.queue = newQueue;
    return deq;
  }
  peek() {
    return this.queue[0];
  }
}

function loader(str) {
  let queue = new Queue();
  for (var i = 0; i < str.length; i++) {
    queue.enqueue(str[i]);
  }
  let unloadStr = "";
  while (!queue.isEmpty()) {
    unloadStr += queue.dequeue();
  }
  return unloadStr;
}

console.log(loader("Javascript"));

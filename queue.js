const Queue = class {
  constructor() {
    this.storage = [];
    // this.length = 0;
  }
  dequeue() {
    return this.storage.splice(-1, 1);
  }
  enqueue(data) {
    debugger;
    let first = data;
    let second = this.storage[0];
    for (var i = 0; i < this.storage.length; i++) {
      this.storage[i] = first;
      first = second;
      second = this.storage[i + 1];
    }
    this.storage[this.storage.length] = first;
  }
  peek() {
    return this.storage[this.storage.length - 1];
  }
  isEmpty() {
    if (this.storage.length === 0) return true;
    return false;
  }
};

console.log("testing queue");
const ourQ = new Queue();
//
// console.log("stack empty?, ", ourQ.isEmpty());
console.log("enqueue 1, ", ourQ.enqueue(3));
console.log("enqueue 22, ", ourQ.enqueue(22));
console.log(ourQ.storage);
console.log("dequeue, ", ourQ.dequeue());
console.log("enqueue 3, ", ourQ.enqueue(3));
console.log("enqueue 7, ", ourQ.enqueue(7));
console.log("enqueue 3, ", ourQ.enqueue(3));
console.log("peeking should be 3, ", ourQ.peek());
console.log("stack empty?, ", ourQ.isEmpty());

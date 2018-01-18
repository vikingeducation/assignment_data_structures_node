//Enqueue, Dequeue, peek, isEmpty
//FIFO
//get out from front
//get in from back

//start<--1--2--3--4-->end

//[{1,2,3,4}]
//dequeue
//[1,{2,3,4}]
//enqueue
//[1, {2,3,4,5}]
class Queue {
  constructor() {
    this.queue = [];
    this.start = -1;
    this.end = -1;
  }

  getQueue() {
    console.log("start:", this.start, "end: ", this.end);
    return this.queue;
  }

  isEmpty() {
    return this.start === this.end;
  }

  enqueue(el) {
    this.end += 1;
    this.queue[this.end] = el;
  }

  dequeue() {
    if (!this.isEmpty()) {
      let dequeued = this.queue[this.start + 1];
      this.start += 1;
      return dequeued;
    }
  }
}

//Testing

let str = "string";

let queue = new Queue();

for (let i = 0; i < str.length; i++) {
  queue.enqueue(str[i]);
}
console.log("initial string", queue.getQueue());

while (!queue.isEmpty()) {
  queue.dequeue();
}

console.log("final string", queue.getQueue());

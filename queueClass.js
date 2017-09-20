// Create a Queue class which implements the methods enqueue, dequeue and peek.
// Add methods for empty
// Verify that you can load and unload a string in the same order with your queue.

class Queue {
  constructor() {
    this.queue = [];

    this.enqueue = (item) => {
      let newQ = [item];
      for (let i=0; i<this.queue.length; i++) {
        newQ[i+1] = this.queue[i]
      }
      this.queue = newQ
    };

    this.dequeue = () => {
      let i = 0;
      let result = [];
      let popped = this.queue[this.queue.length - 1]
      while (this.queue.length - 1 > i) {
        result[i] = this.queue[i];
        i++;
      }
      this.queue = result;
      return popped
    };

    this.peek = () => {
      return this.queue[this.queue.length - 1] || "nothing in queue";
    };

    this.empty = () => {
      return this.queue.length ? false : true;
    };
  }
}

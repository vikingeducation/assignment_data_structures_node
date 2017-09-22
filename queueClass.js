class Queue {
  constructor() {
    this.queue = [];

    this.enqueue = item => {
      let newQ = [item];
      for (let i = 0; i < this.queue.length; i++) {
        newQ[i + 1] = this.queue[i];
      }
      this.queue = newQ;
    };

    this.dequeue = () => {
      let i = 0;
      let result = [];
      let popped = this.queue[this.queue.length - 1];
      while (this.queue.length - 1 > i) {
        result[i] = this.queue[i];
        i++;
      }
      this.queue = result;
      return popped;
    };

    this.peek = () => {
      return this.queue[this.queue.length - 1] || "nothing in queue";
    };

    this.empty = () => {
      return this.queue.length ? false : true;
    };
  }
}

const loadAndUnloadStringWithQueue = string => {
  console.log("recieved ", string);
  const strArr = string.split("");
  const myQueue = new Queue();
  let enqueueing = "enqueueing..";
  for (let i = 0; i < strArr.length; i++) {
    console.log("we peeked and saw:", myQueue.peek());
    myQueue.enqueue(strArr[i]);
    enqueueing = enqueueing.split("");
    enqueueing.push(".");
    enqueueing = enqueueing.join("");
    console.log(enqueueing);
  }
  let newArr = [];
  let dequeueing = "dequeueing..";
  for (let i = 0; i < strArr.length; i++) {
    console.log("we peeked and saw:", myQueue.peek());
    newArr[i] = myQueue.dequeue();
    dequeueing = dequeueing.split("");
    dequeueing.push(".");
    dequeueing = dequeueing.join("");
    console.log(dequeueing);
  }
  let newStr = newArr.join("");
  return newStr;
};

const result = loadAndUnloadStringWithQueue("Hello");
console.log(result);

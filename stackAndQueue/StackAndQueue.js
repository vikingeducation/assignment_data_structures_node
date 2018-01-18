class Stack {
  constructor() {}
  push(arr, val) {
    arr[arr.length] = val;
    return arr;
  }

  pop(arr) {
    const val = arr[arr.length - 1];
    arr.length -= 1;
    return val;
  }

  peek(arr) {
    return arr[0];
  }

  empty(arr) {
    return arr.length === 0;
  }
}

let myArray = [1, 2, 3, 4, 5, 6, 7];
let array2 = [];

const StackTest = new Stack();

console.log(StackTest.push(myArray, 8));

console.log(StackTest.pop(myArray));

console.log(StackTest.peek(myArray));

console.log(StackTest.empty(myArray));

console.log(StackTest.empty(array2));

const stackReverse = (string, arr = []) => {
  let newStr = "";
  for (let i = 0; i < string.length; i++) {
    StackTest.push(arr, string[i]);
  }
  for (let i = 0; i < string.length; i++) {
    newStr += StackTest.pop(arr);
  }
  return newStr;
};

console.log(stackReverse("Jeff&Edwin", []));

class Queue {
  constructor() {}

  enqueue(arr, val) {
    arr[arr.length] = val;
    return arr;
  }

  //shift
  dequeue(arr) {
    let firstElement = arr[0];
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i + 1];
    }
    arr.length -= 1;
    return firstElement;
  }
  //check if empty
  empty(arr) {
    return arr.length === 0;
  }

  emptyQueue(arr) {
    arr = [];
    return arr;
  }
}

//Tests
let queueArr = [1, 2, 3, 4, 5, 6, 7];
let emptyArr = [];

const queueTest = new Queue();

console.log(queueTest.enqueue(queueArr, 8));

console.log(queueTest.dequeue(queueArr));
console.log(queueArr);

console.log(queueTest.empty(emptyArr));

console.log(queueTest.emptyQueue(queueArr));

//load and unload a string from queue

let queueStr = (str, arr = []) => {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    queueTest.enqueue(arr, str[i]);
  }
  console.log(arr);
  for (let i = 0; i < str.length; i++) {
    newStr += queueTest.dequeue(arr);
  }
  return newStr;
};

console.log(queueStr("Iamahero"));

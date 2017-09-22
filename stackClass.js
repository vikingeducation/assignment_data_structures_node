class Stack {
  constructor() {
    this.stack = [];

    this.pop = () => {
      let i = 0;
      let result = [];
      let popped = this.stack[this.stack.length - 1];
      while (this.stack.length - 1 > i) {
        result[i] = this.stack[i];
        i++;
      }
      this.stack = result;
      return popped;
    };

    this.push = item => {
      this.stack[this.stack.length] = item;
    };

    this.peek = () => {
      return this.stack[this.stack.length - 1] || "nothing in stack";
    };

    this.empty = () => {
      return this.stack.length ? false : true;
    };
  }
}

const reverseStringWithStack = string => {
  console.log("recieved ", string);
  console.log("reversing...");
  const strArr = string.split("");
  const myStack = new Stack();
  let pushing = "pushing..";
  for (let i = 0; i < strArr.length; i++) {
    console.log("we peeked and saw:", myStack.peek());
    myStack.push(strArr[i]);
    pushing = pushing.split("");
    pushing.push(".");
    pushing = pushing.join("");
    console.log(pushing);
  }
  let reversedArr = [];
  let popping = "popping..";
  for (let i = 0; i < strArr.length; i++) {
    console.log("we peeked and saw:", myStack.peek());
    reversedArr[i] = myStack.pop();
    popping = popping.split("");
    popping.push(".");
    popping = popping.join("");
    console.log(popping);
  }
  let reversedStr = reversedArr.join("");
  return reversedStr;
};

const reverse = reverseStringWithStack("Hello");
console.log(reverse);

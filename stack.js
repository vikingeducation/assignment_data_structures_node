// Create a Stack class which implements methods to push, pop, and peek at the top item.
// Add an empty helper.
// Verify that you can reverse a string with your stack:

class Stack {
  constructor(){
    this.values = []
  }

  push(val){
    // append an item to the end and return the new array
    this.values[this.values.length] = val
    console.log(this.values);
    return this.values
  }

  pop(){
    // remove last item from end and return it
    let lastIndex = this.values.length - 1
    let poppedItem = this.values[lastIndex]
    this.values[lastIndex] = null
    console.log(poppedItem);
    return poppedItem
  }

  peek(){
    // return value of last item
    let lastIndex = this.values.length - 1
    console.log(this.values[lastIndex]);
    return this.values[lastIndex]
  }

  join(inputArr){
    let output = ''
    let counter = inputArr.length
    let index = 0

    while(counter > 0){
      output += inputArr[index]
      counter -= 1
      index += 1
    }
    console.log(output);
    return output
  }

  empty(){
    return this.values.length === 0
  }

  reverse(input){
    let output = ''
    let counter = input.length
    let lastChar
    while (counter > 0){
      lastChar = input[counter -1]
      output += lastChar
      counter -= 1
    }
    console.log(output);
    return output
  }
}

stack = new Stack()
stack.push('c') // ['c']
stack.push('a') // ['c', 'a']
let myArr = stack.push('t') // ['c', 'a', 't']
let myStr = stack.join(myArr) // 'cat'
stack.reverse(myStr) // 'tac'

stack.push('z') // ['c', 'a', 't', 'z']
stack.peek() // 'z'
stack.pop() // 'z'

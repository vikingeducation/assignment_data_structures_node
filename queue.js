// Create a Queue class which implements the methods enqueue, dequeue and peek.
// Add methods for empty
// Verify that you can load and unload a string in the same order with your queue.

class Queue {
  constructor(){
    this.values = ''
  }

  enqueue(item){
    return this.values += item
  }

  dequeue(){
    var firstChar = this.values[0]
    var newString = ''

    for(var i = 0; i < this.values.length -1; i++){
      newString += this.values[i + 1]
    }
    this.values = newString
    // console.log(firstChar);
    return firstChar
  }

  peek(){
    var output = this.values[0]
    console.log(output);
    return output
  }
}

var myQueue = new Queue()
myQueue.enqueue('c') // 'c'
myQueue.enqueue('a') // 'ca'
myQueue.enqueue('t') // 'cat'
myQueue.peek() // 'c'
myQueue.dequeue() // 'c'
myQueue.peek() // 'a'

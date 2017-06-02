class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.headNode = null;
    this.lastNode = null;
    this.size = 0;
    this.counter = 0;
  }
  initialize(firstNode = null) {
    this.headNode = firstNode;
    this.lastNode = firstNode;
  }
  tic(display = false) {
    if (display) {
      let temp = this.counter;
      this.counter = 0;
      return temp;
    } else {
      this.counter++;
    }
  }

  readNode(index) {
    let count = 0;
    let currentNode = this.headNode;
    this.tic();
    if (!currentNode) {
      console.log("No nodes");
      return null;
    }
    while (count < index) {
      if (!currentNode.next) {
        // console.log("no nodes");
        this.tic(true);
        return null;
        break;
      }
      this.tic();
      currentNode = currentNode.next;
      count++;
    }
    console.log("Result: " + JSON.stringify(currentNode.data, null, 2));
    // console.log("Finding node took " + this.tic(true) + " steps");
    return currentNode;
  }

  addNode(data) {
    const node = new Node(data, null);
    this.tic();
    if (!this.headNode) {
      this.headNode = node;
      this.lastNode = node;
    } else {
      this.lastNode.next = node;
      this.lastNode = node;
    }
    this.size++;
    // console.log("Adding node took " + this.tic(true) + " steps.");
    return node;
  }
  insertNode(data, index) {
    const node = new Node(data, null);
    let count = 0;
    let currentNode = this.headNode;
    this.tic();
    let previousNode = null;
    while (count < index) {
      this.tic();
      previousNode = currentNode;
      currentNode = currentNode.next;
      if (!currentNode) {
        throw new Error("Your list is shorter than insertion index.");
      }
      count++;
    }
    node.next = currentNode;
    this.tic();
    previousNode.next = node;
    // console.log("Inserting node took " + this.tic(true) + " steps.");
    this.size++;
    return node;
  }

  reverse() {
    if (!this.headNode.next) {
      return;
    }
    let previousNode = null;
    let currentNode = this.headNode;
    let temp = null;
    this.tic();
    while (currentNode) {
      this.tic();
      //saving next
      temp = currentNode.next;
      //reversing the pointer
      currentNode.next = previousNode;
      if (!currentNode.next) {
        this.lastNode = currentNode;
      }
      //increment previous to be the current node
      previousNode = currentNode;
      //increment current node to next or null if it is the end of the list
      currentNode = temp;
    }
    this.headNode = previousNode;
    this.tic(true);
  }
}

let list = new LinkedList();
// list.addNode("word");
// console.log(list.size);
// list.addNode("some");
// list.addNode("nothing");
// list.readNode(2);
// list.insertNode("other", 2);
// list.readNode(2);
// list.readNode(0);
// list.reverse();
// list.readNode(0);

module.exports = LinkedList;

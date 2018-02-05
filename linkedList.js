const Node = require('./node');

class LinkedList {
  constructor() {
    this.headNode = null;
    this.lastNode = null;
  }

  addFirstNode(word, definition) {
    this.headNode = new Node(word, definition, null);
    this.lastNode = this.headNode;
  }

  addNode(word, definition) {
    if (!this.headNode) {
      this.addFirstNode(word, definition);
    } else {
      this.lastNode.next = new Node(word, definition, null);
      this.lastNode = this.lastNode.next;
    }
  }

  addNodeAtIndex(word, definition, index) {
    if (!parseInt(index)) return 'Invalid index';
    let prevNode, nextNode;
    let ticker = 0;

    if (index === 0) {
      const node = new Node(word, definition, this.headNode);
      this.headNode = node;
    }

    while (ticker !== index) {
      prevNode = prevNode ? prevNode.next : this.headNode;
      nextNode = nextNode ? nextNode.next : this.headNode.next;
      ticker++;
    }

    prevNode.next = new Node(word, definition, nextNode);
  }

  nodeAtIndex(index) {
    if (!parseInt(index)) return 'Invalid index';
    let prevNode;
    let ticker = 0;

    if (index === 0) return this.headNode;
    if (index === 1) return this.headNode.next;

    while (ticker !== index) {
      prevNode = prevNode ? prevNode.next : this.headNode;
      ticker++;
    }

    return prevNode.next;
  }

  reverse() {
    let currentNode = this.headNode;
    this.lastNode = this.headNode;

    let nextNode = currentNode.next;
    let prevNode;

    while (nextNode) {
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
      nextNode = currentNode.next;
    }

    currentNode.next = prevNode;
    this.headNode = currentNode;
  }
}

module.exports = LinkedList;

// const list = new LinkedList;

// list.addFirstNode('one', 'first node');
// list.addNode('two', 'second node');
// list.addNode('three', 'third node');
// list.addNode('four', 'forth node');
// list.addNode('five', 'fifth node');


// list.addNodeAtIndex('inserted', 'something scrunched in', 2);


// let node = list.headNode;
// console.log(node.word);
// while (node) {
//   node = node.next;
//   if (node) console.log(node.word);
// }

// console.log(list.nodeAtIndex(5));


// list.reverse();
// node = list.headNode;
// console.log(node.word);
// while (node) {
//   node = node.next;
//   if (node) console.log(node.word);
// }






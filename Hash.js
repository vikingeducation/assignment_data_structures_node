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
  }
  initialize(firstNode = null) {
    this.headNode = firstNode;
    this.lastNode = firstNode;
  }
  readNode(index) {
    let count = 0;
    let currentNode = this.headNode;
    if (!currentNode) {
      console.log("No nodes");
      return null;
    }
    while (count < index) {
      currentNode = currentNode.next;
      if (!currentNode) {
        console.log("no nodes");
        return null;
        break;
      }
      count++;
    }
    console.log("currentNode", currentNode.data, "steps", count + 1);
    return currentNode;
  }

  addNode(data) {
    const node = new Node(data, null);
    if (!this.headNode) {
      this.headNode = node;
      this.lastNode = node;
    } else {
      this.lastNode.next = node;
      this.lastNode = node;
    }
    return node;
  }
  insertNode(data, index) {
    const node = new Node(data, null);
    let count = 0;
    let currentNode = this.headNode;
    let previousNode = null;
    while (count < index) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      if (!currentNode) {
        throw new Error("Your list is shorter than insertion index.");
      }
      count++;
    }
    node.next = currentNode;
    previousNode.next = node;
    return node;
  }

  reverse() {
    if (!this.headNode.next) {
      return;
    }
    let previousNode = null;
    let currentNode = this.headNode;
    let temp = null;
    while (currentNode) {
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
  }
}

// let list = new LinkedList();
// list.addNode("word");
// list.addNode("some");
// list.addNode("nothing");
// list.insertNode("other", 2);
// list.readNode(3);

class HashTable {
  constructor() {
    this.buckets = [];
  }
  initialize(bucketsArray = []) {
    this.buckets = bucketsArray;
  }
  hash(word) {
    return word.charCodeAt(0) - 97;
  }
  insert(data) {
    let index = this.hash(data.word);
    if (!this.buckets[index]) {
      this.buckets[index] = new LinkedList();
    }
    this.buckets[index].addNode(data);
  }
  renderList() {
    for (let i = 0; i < this.buckets.length; i++) {
      let index = 0;
      let current = this.buckets[i] ? this.buckets[i].readNode(index) : null;
      while (current) {
        index++;
        current = this.buckets[i].readNode(index);
      }
      console.log("Count of bucket " + i + " is " + index);
    }
  }
  define(word) {
    let i = this.hash(word);
    let bucket = this.buckets[i];
    if (!bucket) {
      console.log("Not found");
      return;
    }
    let index = 0;
    let current = bucket.readNode(index);
    while (current) {
      if (current.data.word === word) {
        console.log(word + " - " + current.data.definition);
        return;
      }
      index++;
      current = bucket.readNode(index);
    }
    console.log("Not found");
    return;
  }
}

const fs = require("fs");
let hash = new HashTable();
// hash.insert({ word: "cat", definition: "nice pet" });
// hash.insert({ word: "dog", definition: "best friend" });
// hash.insert({ word: "doctor", definition: "profession" });
// hash.insert({ word: "table", definition: "furniture" });
// hash.renderList();
// hash.define("dog");

let dictionary = fs.readFileSync("dictionary.json");
dictionary = JSON.parse(dictionary.toString());

for (let i = 0; i < dictionary.length; i++) {
  hash.insert(dictionary[i]);
}
// hash.renderList();
// hash.define("dog");

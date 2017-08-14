const UNICODE_ALPHA_START = 97;

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

  initialize(firsNode = null) {
    this.headNode = firstNode;
    this.lastNode = firstNode;
  }

  addFirstNode(data) {
    this.headNode = new Node(data, null);
    this.lastNode = this.headNode;
  }

  addNode(data) {
    if (!this.headNode) {
      this.addFirstNode(data);
    }
    else {
      const node = new Node(data, null);
      this.lastNode.next = node;
      this.lastNode = node;
    }
  }

  removeNode(index) {
    let counter = 0;
    let currentNode = this.headNode;
    let prevNode = null;

    while (counter < index) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      ++counter;
    }

    prevNode.next = currentNode.next;
  }

  findNode(index) {
    let counter = 0;
    let currentNode = this.headNode;

    while (counter < index) {
      currentNode = currentNode.next;
      ++counter;
    }

    return currentNode;
  }

  printList() {
    let currentNode = this.headNode;

    while (currentNode !== null) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
  
}

class HashTable { 
  constructor() {
    this.buckets = [];
  }

  hashKey(key) {
    let firstLetter = key[0].toLowerCase();
    let index = firstLetter.charCodeAt() - UNICODE_ALPHA_START;
    return index;
  }

  insert(data) {
    let index = this.hashKey(data);
    let bucket = this.buckets[index]

    if (bucket) {
      bucket.addNode(data);
    } else {
      let newBucket = new LinkedList();
      newBucket.addFirstNode(data);

      this.buckets[index] = newBucket;
    }
  }

  renderList() {
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        this.buckets[i].printList();
      }
    }
  }
}

let test1 = new HashTable();
test1.insert("apple");
test1.insert("aardvark");
test1.insert("chocolate");
test1.insert("zoobat");
test1.insert("zygote");
test1.renderList();
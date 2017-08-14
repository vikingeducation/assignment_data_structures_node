const assert = require('assert');
const fs = require('fs');

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

  findWord(word) {
    let currentNode = this.headNode;
    let counter = 1;

    while (currentNode !== null) {
      if (currentNode.data.name === word) {
        return {data: currentNode.data, counter};
      }
      
      counter++;
      currentNode = currentNode.next;
    }

    return null;
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
    let index = this.hashKey(data.name);
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

  stringifyBuckets() {
    console.log(JSON.stringify(this.buckets, null, 2));
  }

  define(word) {
    let index = this.hashKey(word);
    let bucket = this.buckets[index];

    if (!bucket) {
      console.log(`Definition not found for ${word}`);
      return;
    }

    let foundWord = bucket.findWord(word);
    if (foundWord) {
      console.log(`Found in ${foundWord.counter} step(s)`);
      return foundWord.data.definition;
    } else {
      console.log(`Definition not found for ${word}`);
    }

    return `Definition not found for ${word}`;
  }
}

let test1 = new HashTable();
test1.insert({name: "apple", definition: "a fruit"});
test1.insert({name: "aadvark", definition: "animal"});
test1.insert({name: "chocolate", definition: "something delicious"});
test1.insert({name: "zoobat", definition: "a pokemon"});
test1.insert({name: "zygote", definition: "like an egg"});
test1.renderList();

test1.define("eschatology");
assert(test1.define("apple") === "a fruit");
assert(test1.define("zygote") === "like an egg");

let dictionaryTable = new HashTable();
const dictionary = JSON.parse(fs.readFileSync('dictionary.json', 'utf8'));
for (let i = 0; i < dictionary.data.length; i++) {
  dictionaryTable.insert(dictionary.data[i]);
}

dictionaryTable.renderList();
assert(dictionaryTable.define("cabbage") === "The definition of cabbage is cabbage");
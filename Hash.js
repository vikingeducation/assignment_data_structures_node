const LinkedList = require("./LinkedList");

class HashTable {
  constructor() {
    this.buckets = [];
    this.length = 0;
    this.totalNodes = 0;
  }
  initialize(bucketsArray = new Array(26)) {
    this.buckets = bucketsArray;
    this.length = this.buckets.length;
  }
  balance() {
    console.log("balancing");
    this.totalNodes = 0;
    let oldBuckets = this.buckets;
    this.length = 2 * this.buckets.length;
    this.buckets = new Array(this.length);
    for (let i = 0; i < oldBuckets.length; i++) {
      let bucket = oldBuckets[i];
      let currentNode = bucket ? bucket.headNode : null;
      while (currentNode) {
        this.insert(currentNode.data);
        currentNode = currentNode.next;
      }
    }
  }
  hash(word) {
    let hashSum = 0;
    for (let i = 0; i < word.length; i++) {
      hashSum += word[i].charCodeAt(0);
    }
    return hashSum % this.length;
  }
  insert(data) {
    let index = this.hash(data.word);
    if (!this.buckets[index]) {
      this.buckets[index] = new LinkedList();
    }
    this.buckets[index].addNode(data);
    this.totalNodes++;
    if (
      this.buckets[index].size > 5 &&
      this.buckets[index].size > this.totalNodes / 12
    ) {
      this.balance();
    }
  }
  renderList() {
    for (let i = 0; i < this.length; i++) {
      let index = 0;
      // let current = this.buckets[i] ? this.buckets[i].readNode(index) : null;
      // while (current) {
      //   index++;
      //   current = this.buckets[i].readNode(index);
      // }
      let current = this.buckets[i] ? this.buckets[i].headNode : null;
      while (current) {
        index++;
        current = current.next;
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

        return current.data.definition;
      } else if (!current.next) {
        console.log("Not found.");
        return null;
      }
      index++;
      current = bucket.readNode(index);
    }
    console.log("Not found.");
    return null;
  }
}

const fs = require("fs");
let hash = new HashTable();
hash.initialize();
// hash.insert({ word: "cat", definition: "nice pet" });
// hash.insert({ word: "dog", definition: "best friend" });
// hash.insert({ word: "doctor", definition: "profession" });
// hash.insert({ word: "table", definition: "furniture" });
// hash.renderList();
// hash.define("dog");

let dictionary = fs.readFileSync("real_dict.json");
dictionary = JSON.parse(dictionary.toString());

for (let i = 0; i < 1000; i++) {
  hash.insert({
    word: Object.keys(dictionary)[i],
    definition: dictionary[Object.keys(dictionary)[i]]
  });
}
hash.renderList();
// hash.define("dor");
// hash.define("dog");

module.exports = HashTable;

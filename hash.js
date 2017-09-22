const LinkedList = require("./linkedList");

const PRIME = 4300000013;
const SEED = 560;
const REDISTRIBUTE_THRESHOLD = 50;

class Hash {
  constructor(entries) {
    this.insertions = 0;
    this.numBuckets = 100;
    this.buckets = new Array(this.numBuckets);
    if (entries) {
      entries.forEach(([word, definition]) => {
        this.insert(word, definition);
      });
    }
  }

  hash(word) {
    const charSum = word.split("").reduce((sum, char, i) => {
      return sum + char.charCodeAt(0) * SEED ** i;
    }, 0);

    return (charSum % PRIME) % this.numBuckets;
  }

  redistribute() {
    // console.log("Redistributing: ", this.insertions);
    this.numBuckets *= 2;
    this.buckets = this.buckets.reduce((newBuckets, bucket) => {
      let node = bucket.head;
      while (node) {
        const wordHash = this.hash(node.word);
        if (!newBuckets[wordHash]) {
          newBuckets[wordHash] = new LinkedList();
        }
        newBuckets[wordHash].add(node.word, node.definition);
        node = node.next;
      }
      return newBuckets;
    }, new Array(this.numBuckets));
  }

  insert(word, definition) {
    this.insertions++;
    const wordHash = this.hash(word);
    if (!this.buckets[wordHash]) {
      this.buckets[wordHash] = new LinkedList();
    }
    this.buckets[wordHash].add(word, definition);

    if (this.buckets[wordHash].length > REDISTRIBUTE_THRESHOLD)
      this.redistribute();
  }

  define(word, logger = () => null) {
    let node = this.buckets[this.hash(word)].head;
    let steps = 1;

    while (node.next && node.word !== word && ++steps) node = node.next;
    logger(`Steps: ${steps}`);
    return node.word === word ? node.definition : null;
  }

  display(logger = console.log) {
    let displayString = this.buckets.reduce((dString, bucket) => {
      return dString + bucket;
    }, "");
    logger(displayString);
  }

  displayLength() {
    return this.buckets.map((bucket, number) => `${number}: ${bucket.length}`);
  }
}

module.exports = Hash;

const LinkedList = require("./linkedList");

class Hash {
  constructor(entries) {
    this.numBuckets = 30000;
    this.buckets = new Array(30000);
    this.prime = 1000000000003;
    this.seed = 199079922168;
    if (entries) {
      entries.forEach(([word, definition]) => {
        this.insert(word, definition);
      });
    }
  }

  hash(word) {
    const charSum = word.split("").reduce((sum, char, i) => {
      return sum + char.charCodeAt(0) * this.seed ** i;
    }, 0);

    return (charSum % this.prime) % this.numBuckets;
  }

  redistribute() {
    console.log("Redistributing..............................................");
    this.numBuckets *= 2;
    this.buckets = this.buckets.reduce((newBuckets, bucket) => {
      let node = bucket.head;
      while (node) {
        const wordHash = this.hash(node.word);
        // console.log(wordHash);
        if (!newBuckets[wordHash]) {
          newBuckets[wordHash] = new LinkedList();
        }
        newBuckets[wordHash].add(node.word, node.definition);
        node = node.next;
      }
      return newBuckets;
    }, new Array(this.numBuckets));
    console.log("Finished******************");
  }

  insert(word, definition) {
    const wordHash = this.hash(word);
    if (!this.buckets[wordHash]) {
      this.buckets[wordHash] = new LinkedList();
    }
    this.buckets[wordHash].add(word, definition);

    if (this.buckets[wordHash].length > 50) this.redistribute();
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

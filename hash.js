const LinkedList = require("./linkedList");

class Hash {
  constructor(buckets = new Array(26)) {
    this.buckets = buckets;
  }

  hash(word) {
    const charcode = word.charCodeAt(0);
    return charcode < 91 ? charcode - 65 : charcode - 97;
  }

  insert(word, definition) {
    const wordHash = this.hash(word);
    if (!this.buckets[wordHash]) {
      this.buckets[wordHash] = new LinkedList();
    }
    this.buckets[wordHash].add(word, definition);
  }

  define(word, logger = () => null) {
    const wordHash = this.hash(word);
    let node = this.buckets[wordHash].head;
    let steps = 1;
    while (node.next && node.word !== word && ++steps) node = node.next;
    logger(`Steps: ${steps}`);
    return node.word === word ? node.definition : null;
  }

  display(logger = console.log) {
    let displayString = this.buckets.reduce((str, bucket) => {
      let node = bucket.head;
      while (node && node.word) {
        str += node.toString() + "\n";
        node = node.next;
      }
      return str;
    }, "");
    logger(displayString);
  }
}

module.exports = Hash;

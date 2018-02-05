const LinkedList = require('./linkedList');

class HashTable {
  constructor() {
    this.buckets = [];
  }

  hash(word) {
    if (!word) return;

    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const letter = word.split('')[0];

    if (alphabet.indexOf(letter) === -1) return;

    return alphabet.indexOf(letter.toLowerCase());
  }

  insert(word, definition) {
    const index = this.hash(word);
    if (!index) return;

    if (!this.buckets[index]) {
      const list = new LinkedList;
      list.addFirstNode(word, definition);
      this.buckets[index] = list;
    } else {
      this.buckets[index].addNode(word, definition);
    }
  }

  define(word) {
    const index = this.hash(word);
    if(!index || !this.buckets[index]) return 'not found';

    const list = this.buckets[index];
    let current = list.headNode;

    while (current) {
      if (current.word.toLowerCase() === word.toLowerCase()) {
        return current.definition;
      }
      current = current.next;
    }
    return 'not found';
  }
}

const table = new HashTable;

table.insert('cat', 'cat');
table.insert('car', 'car');
console.log(table.buckets[2]);


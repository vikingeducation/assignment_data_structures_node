class Node {
  constructor(word, definition, next) {
    this.word = word;
    this.definition = definition;
    this.next = next;
  }

  toString() {
    return `${this.word}: ${this.definition}`;
  }
}

class LinkedList {
  constructor() {
    this.head;
    this.tail;
  }
  add(word, definition) {
    const newNode = new Node(word, definition, this.head);
    this.tail = this.tail ? this.tail : newNode;
    this.head = newNode;
  }
  find(index) {
    let current = this.head;
    let i = 0;
    while (i < index && current.next) {
      current = current.next;
      i++;
    }
    return i === index ? current : undefined;
  }
  print() {
    let current = this.head;
    while (current) {
      console.log(current.word, ": ", current.definition);
      current = current.next;
    }
  }
  insert(word, definition, index) {
    let current = this.head;
    let i = 0;
    while (i < index - 1 && current.next) {
      current = current.next;
      i++;
    }
    if (i === index - 1) {
      const newNode = new Node(word, definition, current.next);
      current.next = newNode;
    }
  }
  length() {
    let current = this.head;
    let length = 1;
    while (current.next) {
      current = current.next;
      length += 1;
    }
    return current ? length : 0;
  }
  append(word, definition) {
    const newNode = new Node(word, definition);
    this.tail.next = newNode;
    this.tail = newNode;
  }
  reverse() {
    this.tail = this.head;
    let current = this.head;
    let next;
    let prev;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }
  remove(index) {
    let current = this.head;
    let i = 0;
    while (i < index - 1 && current.next) {
      current = current.next;
      i++;
    }
    if (i === index - 1) {
      current.next = current.next.next;
    }
  }
  toString() {
    let str = "",
      node = this.head;
    while (node && node.word) {
      str += node.toString() + "\n";
      node = node.next;
    }
    return str;
  }
}

module.exports = LinkedList;

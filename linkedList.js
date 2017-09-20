class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head;
    this.tail;
  }
  add(data) {
    const newNode = new Node(data, this.head);
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
    return i === index ? current.data : undefined;
  }
  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
  insert(data, index) {
    let current = this.head;
    let i = 0;
    while (i < index - 1 && current.next) {
      current = current.next;
      i++;
    }
    if (i === index - 1) {
      const newNode = new Node(data, current.next);
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
  append(data) {
    const newNode = new Node(data);
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
    while (i < index - 1 && curent.next) {
      current = current.next;
      i++;
    }
    if (i === index - 1) {
      current.next = current.next.next;
    }
  }
}

module.exports = LinkedList;

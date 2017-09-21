/*
Build a linked list node that contains the word and its definition (and anything else you need)
Build a basic linked list class that allows you to:
Create the list
Read nodes at a particular index (add a console.log which tracks the crawler's progress or at least returns the number of steps). In the comments, state the Big-O time of this operation.
Insert nodes at a particular index or, separately, at the end of the list (so store a reference to the last node). In the comments, state the Big-O time of this operation.
Build a method reverse on your LinkedList class that will entirely flip the order of this list, so the "head" and the "tail" are swapped and all the links point in opposite directions.
In a comment above the method, explain how quickly it runs in Big O notation. Is it "in place" (you reused the existing nodes), or did you have to create new nodes to replace the old ones?

*/

//should my data look like this:
// data = {
//   word: "dog",
//   definition: "stufff"
// }
//or this
// data = {
//   [word]: definition
// }
function DictionaryEntry(word, definition) {
  // return { word, definition };
  this.word = word;
  this.definition = definition;
}
DictionaryEntry.prototype.toString = function() {
  return `${this.word}: ${this.definition}`;
};
// const entry = new DictionaryEntry("cat", "meme");
// console.log("entry = ", entry);
// console.log("" + entry);

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
  print() {
    console.log(this.data);
  }
  getTheGoods() {
    return this.data;
  }
  toString() {
    return `${this.data.toString()}`;
  }
}

class LinkedList {
  //TODO: generalize this
  constructor(data, logging = false) {
    this.head = new Node(data, null);
    // this.head = new Node({ word, definition }, null);
    this.tail = this.head;
    this.logging = logging;
    this._length = 1;
  }
  length() {
    return this._length;
  }
  //O(n)
  findI(index) {
    console.log("=============finding=============");
    let current = this.head;
    let position = 0;
    while (current && position !== index) {
      this.log(`${position}:`);
      this.log(current.data);
      current = current.next;
      position++;
    }
    if (position === index) {
      this.log("found it!");
      this.log(current.data);
      return current;
    } else {
      this.log("couldnt find it :(");
      return null;
    }
  }
  //O(n)
  findWord(word) {
    console.log("=============finding=============");
    let current = this.head;
    while (current && current.data.word !== word) {
      // this.log(`${position}:`);
      this.log(current.data);
      current = current.next;
    }
    //check for nulls first
    if (!current) {
      this.log("couldnt find it :(");
      return null;
    } else {
      this.log("found it!");
      this.log(current + "");
      return current;
    }
  }
  //O(n)
  crawl() {
    this.log("=============crawling=============");
    let current = this.head;
    let length = 0;
    while (current) {
      console.log("" + current.data);
      current = current.next;
      length++;
    }
    this.log(`length = ${length}`);
  }
  toString() {
    this.log("============= Stringifying =============");
    let current = this.head;
    let string = "";
    while (current) {
      string += " -> " + current;
      current = current.next;
    }
    return string;
  }
  //O(n), swapping in place
  reverse() {
    this.log("=============reversing=============");
    //save next
    let next = this.head.next;
    //point head to null
    this.head.next = null;

    //since the current list walks forwards, we start with head
    let current = this.head;

    //switch the head and the tail
    let tmp = this.head;
    this.head = this.tail;
    this.tail = tmp;

    let previous = null;
    while (next) {
      //move forward
      previous = current;
      current = next;
      next = current.next;
      //point this node backward
      current.next = previous;
    }
  }
  //O(1) or O(n)
  insert(data, index = null) {
    this.log(`=============inserting=============`);
    if (index === null) {
      const prevTail = this.tail;
      this.tail = new Node(data, null);
      prevTail.next = this.tail;
    } else {
      let before = this.findI(index - 1);
      let after = this.findI(index);
      // this.log(
      //   `index to insert at ${index}\n found ${before.data.word} at ${index -
      //     1}\n found ${after.data.word} at ${index}`
      // );
      let node = new Node(data, null);
      before.next = node;
      node.next = after;
    }
    this._length++;
  }
  //cleanest way I could think of for allowing a simple flag to turn off all console.logs
  //comment this.logs out later for max-speed
  log(stuff) {
    if (this.logging) {
      console.log(stuff);
    }
  }
}
const testing = () => {
  const list = new LinkedList(
    new DictionaryEntry("cat", "meme generator"),
    true
  );
  list.crawl();
  list.insert(new DictionaryEntry("dog", "frisbee finder"), null);
  list.insert(new DictionaryEntry("linked list", "The bees knees"), null);
  list.crawl();
  list.findI(1);
  list.insert(new DictionaryEntry("hash table", "magic"), 1);
  list.crawl();
  list.reverse();
  list.crawl();
  console.log(list.length());
};
testing();
module.exports = LinkedList;
////

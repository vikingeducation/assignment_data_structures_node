const LinkedList = require("../LinkedList");
const HashTable = require("../Hash");
const fs = require("fs");
describe("LinkedList", () => {
  let list;
  beforeEach(() => {
    list = new LinkedList();
    list.initialize();
    list.addNode("a");
    list.addNode("z");
  });
  it("reads node at specified index", () => {
    let node = list.readNode(0);
    expect(node.data).toEqual("a");
  });
  it("returns null if trying to read non existing index", () => {
    let node = list.readNode(2);
    expect(node).toBe(null);
  });
  it("correctly appends node to the end of the list", () => {
    list.addNode("b");
    let node = list.readNode(2);
    expect(node.data).toEqual("b");
    expect(node.next).toBe(null);
  });
  it("correctly inserts into the list", () => {
    let newNode = list.insertNode("b", 1);
    let node = list.readNode(1);
    expect(node.data).toEqual("b");
    expect(newNode.data).toEqual("b");
  });
  it("reverses the list correctly", () => {
    list.reverse();
    let node = list.readNode(0);
    expect(node.data).toEqual("z");
    expect(node.next.data).toBe("a");
  });
});

describe("HashTable", () => {
  let hash;
  hash = new HashTable();
  hash.initialize();
  let dictionary = fs.readFileSync("dictionary.json");
  dictionary = JSON.parse(dictionary.toString());
  for (let i = 0; i < dictionary.length; i++) {
    hash.insert(dictionary[i]);
  }
  it("finds the word if it is in the dictionary", () => {
    let definition = hash.define("dog");
    expect(definition).toEqual("best friend");
  });
  it("tells if the word can't be found", () => {
    expect(hash.define("dor")).toBe(undefined);
  });
});

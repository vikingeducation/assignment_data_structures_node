const LinkedList = require("../linkedList");

describe("The LinkedList class", () => {
  let ll;
  beforeEach(() => {
    ll = new LinkedList();
    ll.add("potato", "a starchy root vegetable");
    ll.add("kale", "a hardy leafy green");
    ll.add("zucchini", "a green summer squash");
  });

  it("can return the node at a given index", () => {
    const node = ll.find(1);

    expect(node.word).toEqual("kale");
    expect(node.definition).toEqual("a hardy leafy green");
  });

  it("can insert a node at a given index", () => {
    ll.insert("bell pepper", "a large, sometimes sweet pepper", 1);

    const node = ll.find(2);

    expect(node.word).toEqual("kale");
    expect(node.definition).toEqual("a hardy leafy green");
  });

  it("can tell you how many nodes it contains", () => {
    expect(ll.length).toEqual(3);
  });

  it("can append a node to the end", () => {
    const index = ll.length;
    ll.append("carrot", "a long, usually orange, root vegetable");
    const node = ll.find(index);

    expect(node.word).toEqual("carrot");
    expect(node.definition).toEqual("a long, usually orange, root vegetable");
  });

  it("can be reversed", () => {
    ll.reverse();
    const node = ll.find(0);

    expect(node.word).toEqual("potato");
    expect(node.definition).toEqual("a starchy root vegetable");
  });

  it("can remove a node from a given index", () => {
    ll.remove(1);
    const node = ll.find(1);

    expect(node.word).toEqual("potato");
    expect(node.definition).toEqual("a starchy root vegetable");
  });
});

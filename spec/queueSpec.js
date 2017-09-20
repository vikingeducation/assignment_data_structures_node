const Queue = require("../queue");

describe("The Queue class", () => {
  let queue;
  beforeEach(() => {
    queue = new Queue();
  });

  it("can enqueue and dequeue values", () => {
    queue.enqueue(44);
    queue.enqueue(false);
    queue.enqueue("potato");

    expect(queue.dequeue()).toEqual(44);
    expect(queue.dequeue()).toEqual(false);
    expect(queue.dequeue()).toEqual("potato");
  });

  it("can be checked for empty", () => {
    expect(queue.empty()).toBeTruthy();
    queue.enqueue("yo mama");

    expect(queue.empty()).toBeFalsy();
  });

  it("allows you to peak at the next item", () => {
    queue.enqueue(true);
    queue.enqueue("meat popsicle");
    queue.enqueue(1024);

    expect(queue.peek()).toEqual(true);
  });

  it("will return a string in the same order", () => {
    "this is totally a string".split("").forEach(char => queue.enqueue(char));
    let result = "";
    while (!queue.empty()) {
      result += queue.dequeue();
    }

    expect(result).toEqual("this is totally a string");
  });
});

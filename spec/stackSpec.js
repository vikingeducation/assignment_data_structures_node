const Stack = require("../stack");

describe("The Stack class", () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });

  it("can return pushed values", () => {
    stack.push(5);
    stack.push(7);

    expect(stack.pop()).toEqual(7);
    expect(stack.pop()).toEqual(5);
  });

  it("can be checked for empty", () => {
    expect(stack.empty()).toBeTruthy();

    stack.push("yes");

    expect(stack.empty()).toBeFalsy();
  });

  it("allows you to peek at the top item", () => {
    stack.push(42);

    expect(stack.peek()).toEqual(42);
    stack.push("the answer");

    expect(stack.peek()).toEqual("the answer");
  });

  it("Can be used to reverse a string", () => {
    "this is a string".split("").forEach(c => stack.push(c));
    let result = "";
    while (!stack.empty()) {
      result += stack.pop();
    }

    expect(result).toEqual("gnirts a si siht");
  });
});

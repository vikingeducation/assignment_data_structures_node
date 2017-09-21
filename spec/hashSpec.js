const Hash = require("../hash");

describe("The Hash class", () => {
  let hash;
  const buckets = new Array(26);
  beforeEach(() => {
    hash = new Hash(buckets);
  });

  it("has a hash method that returns an array index", () => {
    expect(hash.hash("banana")).toEqual(1);
    expect(hash.hash("Potato")).toEqual(15);
    expect(hash.hash("zebra")).toEqual(25);
  });
});

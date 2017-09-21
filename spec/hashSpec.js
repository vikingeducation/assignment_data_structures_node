const Hash = require("../hash");
const dictionary = require("../dictionary.json");

describe("The Hash class", () => {
  let hash, logger;
  beforeEach(() => {
    hash = new Hash();
    logger = jasmine.createSpy("logger");
  });

  xit(
    "has a define method that takes a word and locates its definition",
    () => {
      hash.insert("apple", "bar");
      hash.insert("frog", "an Ape");
      hash.insert("zooanimal", "some animal in a zoo dude");

      expect(hash.define("apple")).toEqual("bar");
      expect(hash.define("frog")).toEqual("an Ape");
      expect(hash.define("zooanimal")).toEqual("some animal in a zoo dude");
    }
  );

  xit("displays itself all pretty like", () => {
    hash.insert("foo", "bar");
    hash.insert("frog", "an Ape");
    hash.display(logger);

    expect(logger).toHaveBeenCalledWith("frog: an Ape\nfoo: bar\n");
  });

  xit("logs the number of linked list nodes traversed when defining", () => {
    hash.insert("apple", "bar");
    hash.insert("frog", "an Ape");
    hash.insert("fiesta", "a party");
    hash.insert("frankenstein", "a mad scientist");

    hash.define("frog", logger);
    hash.define("fiesta", logger);

    expect(logger).toHaveBeenCalledWith("Steps: 3");
    expect(logger).toHaveBeenCalledWith("Steps: 2");
  });

  it("accepts an iterable as an optional argument and hydrates the hash", () => {
    const entries = [
      ["apple", "bar"],
      ["frog", "an Ape"],
      ["fiesta", "a party"],
      ["frankenstein", "a mad scientist"]
    ];
    hash = new Hash(entries);

    expect(hash.define("frog")).toEqual("an Ape");
    expect(hash.define("frankenstein")).toEqual("a mad scientist");
  });

  it("handles a 4.5MB dictionary like a boss", () => {
    hash = new Hash(Object.entries(dictionary));

    console.log(hash.displayLength());

    expect(hash.define("p", console.log)).toEqual(
      `the sixteenth letter of the English alphabet, is a nonvocalconsonant whose form and value come from the Latin, into whichlanguage the letter was brought, through the ancient Greek, from thePhonician, its probable origin being Egyptian. Etymologically P ismost closely related to b, f, and v; as hobble, hopple; father,paternal; recipient, receive. See B, F, and M.`
    );
  });
});

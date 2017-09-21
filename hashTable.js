//HASH TABLE
const LinkedList = require("./linkedLists");
function DictionaryEntry(word, definition) {
  this.word = word;
  this.definition = definition;
}
DictionaryEntry.prototype.toString = function() {
  return `${this.word}: ${this.definition}`;
};
// class hashTable {
//   constructor() {
//     this.buckets = [];
//   }
// }
function HashTable(dictionaryFile) {
  // let buckets = Array(26)
  //   .fill(true)
  //   .map(empty => new LinkedList());
  //STARTUP
  let buckets = Array(26).fill(null);
  // console.log(buckets);

  //HASH FUNCTION
  const hash = word => {
    // console.log(word.toLowerCase().charCodeAt(0));
    return word.toLowerCase().charCodeAt(0) - 97;
  };

  //consider inserting them in alphabetical order
  const insert = (word = "cat", definition = "zzz") => {
    // buckets[hash(word)].insert(word, definition);
    const index = hash(word);
    if (buckets[index]) {
      buckets[index].insert(
        new DictionaryEntry(word.toLowerCase(), definition)
      );
    } else {
      buckets[index] = new LinkedList(
        new DictionaryEntry(word, definition),
        false
      );
    }
  };
  const renderList = () => {
    console.log("============PRINTING============");
    buckets.forEach((bucket, index) => {
      console.log(`bucket index: ${index}:`);
      if (bucket) {
        // bucket.crawl();
        console.log("bucket " + bucket);
      } else {
        console.log(bucket);
      }
    });
  };
  const find = word => {
    if (!buckets[hash(word)]) {
      return null;
    } else {
      const node = buckets[hash(word)].findWord(word);
      if (!node) return null;
      return node.data.definition;
    }
  };
  const define = word => {
    const definition = find(word);
    if (!definition) {
      return console.log(`sorry couldn't find ${word}`);
    } else {
      return console.log(`${word}: ${definition}`);
    }
  };
  const loadDictionary = () => {
    //if dictionaryFile is .json
    if (!dictionaryFile) return;
    const dictionary = require(dictionaryFile);
    for (word in dictionary) {
      insert(word, dictionary[word]);
    }
    //else use fs module
  };
  loadDictionary();
  return {
    hash,
    insert,
    renderList,
    define
  };
}

const testing = () => {
  const hash = new HashTable("./dictionary.json");
  // const hash = new HashTable("/usr/share/dict/words");
  // console.log(hash.hash("athing"));
  // const hash = new HashTable();
  // hash.insert("awesome", "coffee");
  // hash.insert("amazing", "things");
  hash.renderList();
  hash.define("awesome");
  hash.define("cat");
  hash.define("bear");
  hash.define("recursion");
};
testing();

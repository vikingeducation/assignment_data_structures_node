//HASH TABLE
const LinkedList = require("./linkedLists");

// class hashTable {
//   constructor() {
//     this.buckets = [];
//   }
// }
function HashTable() {
  // let buckets = Array(26)
  //   .fill(true)
  //   .map(empty => new LinkedList());
  let buckets = Array(26).fill(null);
  // console.log(buckets);
  const hash = word => {
    // console.log(word.toLowerCase().charCodeAt(0));
    return word.toLowerCase().charCodeAt(0) - 97;
  };
  //consider inserting them in alphabetical order
  const insert = (word = "cat", definition = "zzz") => {
    // buckets[hash(word)].insert(word, definition);
    const index = hash(word);
    if (buckets[index]) {
      buckets[index].insert(word, definition);
    } else {
      buckets[index] = new LinkedList(word, definition, true);
    }
  };
  const renderList = () => {
    console.log("============PRINTING============");
    buckets.forEach((bucket, index) => {
      console.log(`bucket index: ${index}:`);
      if (bucket) {
        bucket.crawl();
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
  return {
    hash,
    insert,
    renderList,
    define
  };
}

const testing = () => {
  const hash = new HashTable();
  console.log(hash.hash("athing"));
  hash.insert("awesome", "coffee");
  hash.renderList();
  hash.define("awesome");
};
testing();

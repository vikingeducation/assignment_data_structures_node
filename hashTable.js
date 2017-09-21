//HASH TABLE
const LinkedList = require("./linkedLists");
function DictionaryEntry(word, definition) {
  this.word = word;
  this.definition = definition;
}
DictionaryEntry.prototype.toString = function() {
  return `${this.word}: ${this.definition}`;
};

function HashTable(dictionaryFile, numBuckets = 26) {
  //STARTUP
  let buckets = Array(numBuckets).fill(null);

  //HASH FUNCTION
  const oldHash = word => {
    return word.toLowerCase().charCodeAt(0) - 97;
  };
  const newHash = word => {
    const charCodeSum = word
      .split("")
      .reduce((sum, char) => sum + char.charCodeAt(0), 0);
    return charCodeSum % numBuckets;
  };
  const hash = word => {
    return newHash(word);
  };

  //consider inserting them in alphabetical order
  const insert = (word = "cat", definition = "zzz") => {
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
    balance();
  };
  //basic setting, if the  2x the average, then we split up buckets
  const offensivenessRatio = 1.3;
  const isBalanced = () => {
    const numBuckets = buckets.length;
    const totalLength = buckets.reduce((total, bucket) => {
      if (!bucket) return total;
      return total + bucket.length();
    }, 0);
    const averageListLength = totalLength / numBuckets;
    const offendingBuckets = buckets.reduce((arr, bucket, idx) => {
      if (!bucket) return arr;
      if (bucket.length() >= averageListLength * offensivenessRatio)
        return arr.concat(idx);
      return arr;
    }, []);
    // console.log(`numB = ${numBuckets}, totalLength = ${totalLength}`);
    // console.log(`average length = ${averageListLength}`);
    return offendingBuckets;
  };
  const balance = () => {
    if ((offendingBuckets = isBalanced()).length) {
      //do stuff
      console.log("unbalanced, offending buckets = ", offendingBuckets);
      return;
    }
    console.log("balanced");
  };
  const printStats = () => {
    return;
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
      console.log("================================================");
    });
  };

  const renderLengths = () => {
    buckets.forEach((bucket, index) => {
      if (!bucket) return console.log(`bucket: ${index}. Length: 0`);
      console.log(`bucket: ${index}. Length: ${bucket.length()}`);
    });
  };
  const find = word => {
    let totalSteps = 0;
    if (!buckets[hash(word)]) {
      totalSteps = 1;
      console.log("totalSteps = ", totalSteps);
      return null;
    } else {
      const node = buckets[hash(word)].findWord(word);
      totalSteps = buckets[hash(word)].stepsOfLastOperation();
      console.log("totalSteps = ", totalSteps);
      if (!node) return null;
      return node.data.definition;
    }
    console.log("totalSteps = ", totalSteps);
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
    renderLengths,
    define
  };
}

const simpleTest = () => {
  const hash = new HashTable();
  hash.insert("awesome", "coffee");
  hash.insert("amazing", "things");
  hash.renderLengths();
  hash.renderList();
  hash.define("awesome");
  hash.define("cat");
  hash.define("bear");
  hash.define("recursion");
};

const testing = () => {
  const hash = new HashTable("./dictionary.json", 200);
  // const hash = new HashTable("/usr/share/dict/words");
  // const hash = new HashTable();
  // hash.insert("awesome", "coffee");
  // hash.insert("amazing", "things");
  hash.renderLengths();
  // hash.renderList();
  hash.define("awesome");
  hash.define("cat");
  hash.define("bear");
  hash.define("recursion");
};
testing();

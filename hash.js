class Hash {
  constructor(buckets = new Array(26)) {
    this.buckets = buckets;
  }

  hash(word) {
    const charcode = word.charCodeAt(0);
    return charcode < 91 ? charcode - 65 : charcode - 97;
  }
}

module.exports = Hash;

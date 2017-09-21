const LinkedList = require('./linkedList');

class Hash {
	constructor(buckets = new Array(26)) {
		this.buckets = buckets;
	}

	hash(word) {
		const charcode = word.charCodeAt(0);
		return charcode < 91 ? charcode - 65 : charcode - 97;
	}

	insert(word, definition) {
		const wordHash = this.hash(word);
		if (!this.buckets[wordHash]) {
			this.buckets[wordHash] = new LinkedList();
		}
		this.buckets[wordHash].add(word, definition);
	}

	define(word) {
		const wordHash = this.hash(word);
		let node = this.buckets[wordHash].head;
		while (node.next && node.word !== word) {
			node = node.next;
		}
		return node.word === word ? node.definition : null;
	}
}

module.exports = Hash;

const LinkedList = require('./linkedList');

class Hash {
	constructor(buckets = new Array(26), entries) {
		this.buckets = buckets;
		if (entries) {
			entries.forEach(([word, definition]) => {
				this.insert(word, definition);
			});
		}
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

	define(word, logger = () => null) {
		let node = this.buckets[this.hash(word);].head;
		let steps = 1;
	
		while (node.next && node.word !== word && ++steps) node = node.next;
		logger(`Steps: ${steps}`);
		return node.word === word ? node.definition : null;
	}

	display(logger = console.log) {
		let displayString = this.buckets.reduce((_, bucket) => {
			return '' + bucket;
		}, '');
		logger(displayString);
	}

	displayLength() {
		return this.buckets.map(
			bucket => `${bucket.head.word[0]}: ${bucket.length()}`
		);
	}
}

module.exports = Hash;

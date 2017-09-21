const LinkedList = require('./linkedList');

const PRIME = 1000000000003;
const INT_PRIME = 12659874552859;
const SEED = 12659874552859;
const INT_SEED_A = 5969945408034;
const INT_SEED_B = 9105117167006;

class Hash {
	constructor(entries) {
		this.numBuckets = 26;
		this.buckets = new Array(this.numBuckets);
		if (entries) {
			entries.forEach(([word, definition]) => {
				this.insert(word, definition);
			});
		}
	}

	hash(word) {
		const charSum = word.split('').reduce((sum, char, i) => {
			return sum + char.charCodeAt(0) * SEED ** i;
		}, 0);

		return (
			INT_SEED_A * (charSum % PRIME) * INT_SEED_B % INT_PRIME % this.numBuckets
		);
	}

	redistribute() {
		console.log('Redistributing..............................................');
		this.numBuckets *= 2;
		this.buckets = this.buckets.reduce((newBuckets, bucket) => {
			let node = bucket.head;
			while (node) {
				const wordHash = this.hash(node.word);
				// console.log(wordHash);
				if (!newBuckets[wordHash]) {
					newBuckets[wordHash] = new LinkedList();
				}
				newBuckets[wordHash].add(node.word, node.definition);
				node = node.next;
			}
			return newBuckets;
		}, new Array(this.numBuckets));
		console.log('Finished******************');
	}

	insert(word, definition) {
		const wordHash = this.hash(word);
		if (!this.buckets[wordHash]) {
			this.buckets[wordHash] = new LinkedList();
		}
		this.buckets[wordHash].add(word, definition);

		console.log(wordHash + ': ' + this.buckets[wordHash].length);
		if (this.buckets[wordHash].length > 50) this.redistribute();
	}

	define(word, logger = () => null) {
		let node = this.buckets[this.hash(word)].head;
		let steps = 1;

		while (node.next && node.word !== word && ++steps) node = node.next;
		logger(`Steps: ${steps}`);
		return node.word === word ? node.definition : null;
	}

	display(logger = console.log) {
		let displayString = this.buckets.reduce((dString, bucket) => {
			return dString + bucket;
		}, '');
		logger(displayString);
	}

	displayLength() {
		return this.buckets.map((bucket, number) => `${number}: ${bucket.length}`);
	}
}

module.exports = Hash;

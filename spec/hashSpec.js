const Hash = require('../hash');

describe('The Hash class', () => {
	let hash, buckets;
	beforeEach(() => {
		buckets = new Array(26);
		hash = new Hash(buckets);
	});

	it('has a hash method that returns an array index', () => {
		expect(hash.hash('banana')).toEqual(1);
		expect(hash.hash('Potato')).toEqual(15);
		expect(hash.hash('zebra')).toEqual(25);
	});

	it('has an insert method that inserts the value into the correct bucket', () => {
		hash.insert('foo', 'bar');
		hash.insert('frog', 'an Ape');
		hash.insert('zooanimal', 'some animal in a zoo dude');
		expect(buckets[5].tail.word).toEqual('foo');
		expect(buckets[5].tail.definition).toEqual('bar');
		expect(buckets[5].head.word).toEqual('frog');
		expect(buckets[5].head.definition).toEqual('an Ape');
		expect(buckets[25].head.word).toEqual('zooanimal');
		expect(buckets[25].head.definition).toEqual('some animal in a zoo dude');
	});

	it('has a define method that takes a word and locates its definition', () => {
		hash.insert('apple', 'bar');
		hash.insert('frog', 'an Ape');
		hash.insert('zooanimal', 'some animal in a zoo dude');

		expect(hash.define('apple')).toEqual('bar');
		expect(hash.define('frog')).toEqual('an Ape');
		expect(hash.define('zooanimal')).toEqual('some animal in a zoo dude');
	});
});

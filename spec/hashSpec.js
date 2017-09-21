const Hash = require('../hash');
const dictionary = require('../dictionary.json');

describe('The Hash class', () => {
	let hash, buckets, logger;
	beforeEach(() => {
		buckets = new Array(26);
		hash = new Hash(buckets);
		logger = jasmine.createSpy('logger');
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

	it('displays itself all pretty like', () => {
		hash.insert('foo', 'bar');
		hash.insert('frog', 'an Ape');
		hash.display(logger);

		expect(logger).toHaveBeenCalledWith('frog: an Ape\nfoo: bar\n');
	});

	it('logs the number of linked list nodes traversed when defining', () => {
		hash.insert('apple', 'bar');
		hash.insert('frog', 'an Ape');
		hash.insert('fiesta', 'a party');
		hash.insert('frankenstein', 'a mad scientist');

		hash.define('frog', logger);
		hash.define('fiesta', logger);

		expect(logger).toHaveBeenCalledWith('Steps: 3');
		expect(logger).toHaveBeenCalledWith('Steps: 2');
	});

	it('accepts an iterable as an optional argument and hydrates the hash', () => {
		const entries = [
			['apple', 'bar'],
			['frog', 'an Ape'],
			['fiesta', 'a party'],
			['frankenstein', 'a mad scientist']
		];
		hash = new Hash(buckets, entries);

		expect(hash.define('frog')).toEqual('an Ape');
		expect(hash.define('frankenstein')).toEqual('a mad scientist');
	});

	it('handles a 4.5MB dictionary like a boss', () => {
		hash = new Hash(buckets, Object.entries(dictionary));

		console.log(hash.displayLength());

		expect(hash.define('p', console.log)).toEqual(
			`the sixteenth letter of the English alphabet, is a nonvocalconsonant whose form and value come from the Latin, into whichlanguage the letter was brought, through the ancient Greek, from thePhonician, its probable origin being Egyptian. Etymologically P ismost closely related to b, f, and v; as hobble, hopple; father,paternal; recipient, receive. See B, F, and M.`
		);
	});
});

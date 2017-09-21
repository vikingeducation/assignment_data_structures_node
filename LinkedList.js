function LinkedListNode(word, def) {
	this.word = word;
	this.def = def;
	this.nextNode = null;

	this.next = function(node) {
		this.nextNode = node;
		return node;
	};

	this.toString = function() {
		return `Word: ${this.word}, Def: ${this.def}`;
	};
}

class LinkedList {
	constructor(arr) {
		this.head = this.end = null;
		if (!arr || !Array.isArray(arr) || arr.length === 0) return this;

		let newNode = null;
		for (let i = 0; i < arr.length; i++) {
			if (i === 0) {
				this.head = newNode = new LinkedListNode(arr[i].word, arr[i].def);
				continue;
			}
			newNode = newNode.next(new LinkedListNode(arr[i].word, arr[i].def));
			if (i === arr.length - 1) {
				this.end = newNode;
			}
		}
	}

	prependNode(node) {
		const newNode = new LinkedListNode(node.word, node.def);
		newNode.next(this.head);
		this.head = newNode;
	}

	addNode(node) {
		this.end = this.end.next(new LinkedListNode(node.word, node.def));
	}

	removeNode(index) {
		let counter = 0,
			node = this.head;
		while (counter++ < index - 1) {
			if (!node.nextNode) return null;
			node = node.nextNode;
		}

		const previousNode = node;
		const currentNode = node.nextNode;
		const nextNode = node.nextNode.nextNode;

		previousNode.nextNode = nextNode;

		return currentNode;
	}

	findIndex(word) {
		let index = -1,
			node = this.head;
		while (node !== this.end) {
			index++;
			node = node.nextNode;

			if (node.word === word) return index;
		}
		return index;
	}

	listNodes() {
		let node = this.head;
		while (node !== this.end) {
			console.log(node.toString());
			node = node.nextNode;
		}
	}
}

const words = [
	{ word: 'foo', def: 'bar' },
	{ word: 'foo1', def: 'bar1' },
	{ word: 'foo2', def: 'bar2' },
	{ word: 'foo3', def: 'bar3' },
	{ word: 'foo4', def: 'bar4' },
	{ word: 'foo5', def: 'bar5' },
	{ word: 'foo6', def: 'bar6' },
	{ word: 'foo7', def: 'bar7' },
	{ word: 'foo8', def: 'bar8' }
];

const linkedList = new LinkedList(words);
linkedList.listNodes();
linkedList.addNode({ word: 'foo9', def: 'bar9' });
linkedList.listNodes();
console.log(linkedList.findIndex('foo9'));
const node5 = linkedList.removeNode(5);
linkedList.prependNode(node5);
linkedList.listNodes();

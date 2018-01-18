class HashTable {
	constructor() {
		this.buckets = new Array(26);
    for (var i = 0, len = this.buckets.length; i < len; i++) {
      this.buckets[i] = new LinkedList();
    }
	}

	hashFunction(word) {
		let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
		let position = alphabet.indexOf(word.toLowerCase()[0]);
		return position;
	}

	insert(word) {
		let idx = this.hashFunction(word);
		this.buckets[idx].addNode(word);
	}

	renderTable(){
		let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    for (var i = 0, len = this.buckets.length; i < len; i++) {
      console.log(alphabet[i] + " " + this.buckets[i].renderList());
    }
  }
}

class Node {
	constructor(data, next) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		// We'll want to keep track of the head node and
		// the last node to make adding and subtracting easy
		this.headNode = null;
		this.lastNode = null;
	}

	// Allow initializing the list with a first node
	initialize(firstNode = null) {
		this.headNode = firstNode;
		this.lastNode = firstNode;
	}

	// To add the first node
	addFirstNode(data) {
		this.headNode = new Node(data, null);
		this.lastNode = this.headNode;
	}

	// Add a node to the end of the list
	addNode(data) {
		// If we don't have a headNode yet, that means the list is empty
		// We can treat this case as a `addFirstNode` method
		if (!this.headNode) {
			this.addFirstNode(data);
		} else {
			const node = new Node(data, null);

			// First, point the last node to our new one
			this.lastNode.next = node;

			// Set our new node as the official last node
			this.lastNode = node;
		}
	}

	// Remove the node at this position (assume there is one there)
	// We'll crawl the list and save the prev
	removeNode(index) {
		// Start at the head
		let counter = 0;
		let currentNode = this.headNode;
		let prevNode = null;

		// Crawl until we hit index
		while (counter < index) {
			prevNode = currentNode;
			currentNode = currentNode.next;
			++counter;
		}

		// Now remove the node
		let nextNode = currentNode.next;

		// Clear the `next` reference
		currentNode.next = null;

		// Make the previous one point correctly
		prevNode.next = nextNode;
	}

	// Return the node at that position, like in an array
	// It has no error handling
	findNode(index) {
		// Start at the head
		let counter = 0;
		let currentNode = this.headNode;

		// Crawl until we hit index
		while (counter < index - 1) {
			currentNode = currentNode.next;
			++counter;

			//console.log(currentNode);
		}

		return currentNode;
		//O(n) traversal
	}

	insertNode(index, data) {
		let newNode = new Node(data, null);

		let prevNode = this.findNode(index);
		let nextNode = prevNode.next;

		newNode.next = nextNode;
		prevNode.next = newNode;
	}
	//O(n) traversal
	// Crawls and prints the list
	printList() {
		// Start at the head
		let currentNode = this.headNode;

		while (currentNode.next) {
			console.log(currentNode);
			currentNode = currentNode.next;
		}
		console.log(currentNode);
	}

  renderList() {
    let returnString = "";
   	let currentNode = this.headNode;

    if (!currentNode) return returnString;

		while (currentNode.next) {
      returnString += `| ${currentNode.data} `;
		  currentNode = currentNode.next;
		}
		returnString += `| ${currentNode.data} | `;
    return returnString;
  }


	reverseList() {
		let current = this.headNode;
		let next = current.next;
		let prev;
		while (current.next) {
			prev = current;
			current = next;
			next = current.next;
			if (!next) break;
			current.next = prev;
		}
		current.next = prev;
		this.headNode.next = null;
		let oldHead = this.headNode;
		this.headNode = this.lastNode;
		this.lastNode = oldHead;
	}
}

// TEST

let list = new LinkedList();
list.addFirstNode(1);

list.addNode(2);
list.addNode(3);
list.addNode(4);
list.addNode(5);

list.reverseList();
list.printList();
list.renderList();

// TEST HASH TABLE

let hashTable = new HashTable();
hashTable.insert("apple");
hashTable.insert("atom");
hashTable.insert("mountain");
hashTable.insert("jack");
hashTable.insert("box");
hashTable.renderTable();

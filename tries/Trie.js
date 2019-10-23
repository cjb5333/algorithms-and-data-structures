class TrieNode {
    constructor(val) {
        this.children = {};
        this.val = val;
    }

    toString() {
        return this.val;
    }
}

class Trie {
    root = new TrieNode('');
    constructor() {}

    find(val) {
        let node = this.root;
        val.split('').forEach(char => {
            if (node.children[char]) {
                node = node.children[char];
            } else {
                return null;
            }
        });
        return node.val === val;
    }

    insert(val) {
        let node = this.root;
        val.split('').forEach(char => {
            if (!node.children[char]) {
                node.children[char] = new TrieNode(char);
            } 
            node = node.children[char];
        });
        node.val = val;
        return node;
    }
}

const trie = new Trie();
trie.insert('hello');
console.log(trie.find('hello'));
console.log(trie.find('hell'));
console.log(trie.find('world'));
console.log(trie.find('hey'));
trie.insert('hell');
trie.insert('hello world');
trie.insert('delicious');
console.log(trie.find('delicious'));
console.log(trie.find('hello world'));
console.log(trie.find('world'));
console.log(trie);
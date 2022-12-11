//trees are used in:
// HTML DOM
// Network routing
// Abstract planning out code (Abstract Syntax Tree)
// AI
// Folders in operating systems
// Computer File Systems
// JSON

// Trees come up all the time
// We will be studying binary search trees
// Binary trees - every parent can have AT MOST two children per node (0, 1, or 2 children)
// In a binary search tree:
    // Every node to the left of a parent node is always less than the parent
    // Every node to the right of a parent node is always greater than the parent


// classes below:

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
}

const tree = new BinarySearchTree();
tree.root = new Node(10);
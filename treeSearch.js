// classes and methods from tree below

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
    insert(val){
        const newNode = new Node(val);
        if(this.root === null){
            this.root = newNode;
            return this;
        } else {
            let current = this.root;
            while(true){
                if(val === current.val) return undefined;
                if(val < current.val){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if(val > current.value){
                    if(current.right === null){
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }
    contains(val){
        if(this.root === null) return false;
        let current = this.root;
        let found = false;
        while(current && !found){
            if(val < current.val){
                current = current.left;
            } else if(val > current.val){
                current = current.right;
            } else{
                return true;
            }
        }
        return false;
    }
    // recursion method; Breadth First Search
    BFS(){
        let data = [];
        let queue = [];
        let node = this.root;

        queue.push(this.root);
        // can't just say while(queue), as an empty array isn't falsey in JS
        while(queue.length){
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
    // Depth First Search PreOrder; also utilizes recursion
    DFSPreOrder(){
        let data = [];
        let current = this.root;
        // traverse the entire left side, then the entire right side
        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }
    // Depth First Search PostOrder
    // Explore all children before the root node
    DFSPostOrder(){
        let data = [];
        let current = this.root;
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(current);
        return data;
    }
}
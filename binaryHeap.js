// very similar to a binary search tree but with some different rules

// MaxBinaryHeap: parent nodes are always larger than the child nodes

// MinBinaryHeap: parent nodes are always smaller than child nodes

// Nodes in binary heaps can only have AT MOST two children
// Unlike binary search trees, there is no order to the nodes (so NOT left is smaller, right is larger)

// Binary Heaps are used to implement Priority Queues, which are VERY commonly used data structures
// Binary Heaps are also used quie a bit with graph traversal algorithms

// For any index of an array n
    // the left child is stored at 2n + 1
    // the right child is stored at 2n + 2

// For any child node at index n
    // its parent node is at index of Math.floor((n-1)/2)

// Heaps don't need a Node class

// MaxBinary Heap insertion
    // add the value to the end of the list, then it "bubbles up"

// Insert() pseudocode
    // Push the value into the values property on the heap
    // Bubble the value up to its correct spot
        // Create a variable called index which is the length of the values property - 1
        // Create a variable called parentIndex which is the floor of (index - 1)/2
        // Keep looping as long as the values element at the parentIndex is less than the values element at the child index
            // Swap the value of the values element at the parentIndex with the value of the element property at child index
            // Set the index to be the parentIndex, and start over!

class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }
    insert(element){
        // push the element to the array
        this.values.push(element);
        // call bubbleUp method we create on the array
        this.bubbleUp();
    }
    bubbleUp(){
        // store a variable that is the new elements index, which is the array length - 1 (since arrays start at an index of 0)
        let index = this.values.length - 1
        // store the element in a variable (called element) which sets it to the the array at the index that we are adding the element at
        const element = this.values[index]
        // the while loop will run until the element bubbles to index 0, or is larger than the parent(s) (the break condition)
        while(index > 0){
            // find the parentIndex using floor of (n -1)/2
            let parentIndex = Math.floor((index - 1)/2);
            // define parent as the parentIndex
            let parent = this.values[parentIndex];
            // if the element is smaller than or equal to the parent, stop the loop
            if(element <= parent) break;
            // set the array at parentIndex to the element
            this.values[parentIndex] = element;
            // set the array at the index of the end of the array to be the parent value
            this.values[index] = parent;
            // set the index for the new element to be where the original parent index was
            index = parentIndex;
        }
    }
}

let heap = new MaxBinaryHeap([41, 39, 33, 18, 27, 12]);
heap.insert(55);
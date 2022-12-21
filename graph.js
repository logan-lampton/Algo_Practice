// Wikipedia definition of a graph: 
// A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph, or a set of ordered pairs for a directed graph.

// Layman's terms:
// A graph is a collection of nodes and connections between those nodes

// A tree is a type of graph

// Uses for graphs
    // Social networks
    // Location/Mapping
    // Routing Algorithms
    // Visual Hierarchy
    // File System Optimizations
    // Google Maps
    // Recomendation engines
    // EVERYWHERE!!!

// Essential Graph Terms
    // Vertex - a node
    // Edge - connection between nodes
    // Weighted/Unweighted - values assigned to distances between vertices
    // Directed/Undirected - directions assigned to distances between vertices

// Undirected Graph
    // No direction to the graph, can move in multiple directions in the graph
    // Ex: Facebook friends graph is undirected (all friends follow each other, in both directions)

// Directed Graph
    // One direction (polarity) to the graph
    // The is a direction assigned to the edges
    // Ex: Instagram is a directed graph (you can follow someone and they don't have to follow you back)

// Weighted Graph
    // When values are assigned to the edges (connections) in the graph
    // Ex: an edge has a value of 17
    // Ex: a map that has assigned distance to the paths (the edges) between locations (the nodes)

// Storing graphs!
// There are two common ways to store a graph
    // Adjacency Matrix
    // Adjacency List

// A Matrix is a two dimensional structure usually implemented with nested arrays
    // Store information in rows and columns
    // Undirected graphs are symetrical, not directed graphs
    // Kinda looks like a crossword puzzle to me

// Adjacency Lists
    // Saved into hash table arrays

// Big O Comparisons
    // Adjacency List
        // PRO: Can take up less space in sparse graphs (less vertexes)
        // PRO: Faster to iterate over all edges (connections)
        // CON: Can be slower to lookup specific edge

    // Adjacency Matrix
        // CON: Takes up more space in sparse graphs (not many vertexes)
        // CON: Slower to iterate over all edges (connections)
        // PRO: Faster to lookup specific edge

// Most real world data is actually sparse, which is why we are learning Adjacency List (which is better for sparse data)
    // Meaning: Most vertexes are only connected to a couple of things
    // Matrixes work great if most of the vertexes are connected to each other (so that the matrix isn't mostly empty)

// we are building an undirected graph 
class Graph {
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        // if statement is error handling to make sure the same vertex isn't inserted more than once
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }
        // doesn't need to return anything
    }
    addEdge(vertex1, vertex2){
        // push vertex 2 into the array of vertex 1
        this.adjacencyList[vertex1].push(vertex2);
        // push vertex 1 into the array of vertex 2
        this.adjacencyList[vertex2].push(vertex1);
    }
    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        )
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        )
    }
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex]
    }
    depthFirstRecursive(start){
        const result = [];
        const visited = {};
        // allows us to call the adjacency list later in the code and not confuse JS with the "this.SOMETHING" syntax
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex){
            if(!vertex) return null;
            // sets the vertex in the object to true
            visited[vertex] = true;
            // push the vertex to the result array
            result.push(vertex);
            //forEach loop on each neighbor of the vertex to see if those vertexes have been visited
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    // if a neighbor hasn't been visited, recursively run the dfs function on the neighbor
                    return dfs(neighbor)
                }
            })
        })(start)

        // return the resulting array
        return result
    }
} 

// Depth First Search (DFS) Recursive Pseudocode:
    // The function should accept a starting node
    // Create a list to store the end result, to be returned at the very end
    // Create an object to store your visited vertices
    // Create a helper function which accepts a vertex
        //if vertex is empty
            // return (this is the base case)
        // add vertex to results list
        // mark vertex as visited
        // for each neighbor in vertex's neighbors:
            // if neighbor is not visited:
                // recursively call DFS on neighbor
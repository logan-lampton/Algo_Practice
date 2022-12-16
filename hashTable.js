// Hash tables (also known as hash maps) are incredibly common and built into many languages, including JavaScript, Python and Ruby

// Hash tables are used to store key-value pairs
// They are like arrays, but the keys are not ordered
// Unlike arrays, hash tables are FAST for all of the following operations:
    // Finding values
    // Adding new values
    // Removing values

// Hash table examples in languages:
    // Python has Dictionaries (or Dict)
    // JS has Objects and Maps
        // (Objects have some restrictions, but are basically hash tables)
    // Java, Go, and Scala have Maps
    // Ruby has Hashes


// Making a hash table is reinventing the wheel, but we are building a model to better understand HOW they work
// Intro example:
    // Want human and computer readability
    // We'll be using an array
    // In order to look up values by key,  we need a way to convert keys into valid array indices
        // A function that performs this task, is called a hash function

// Conceptually:
    // We are storing a key and value at a certain index
    // To recall the data, we ask for what the index is of the key, then the value is returned

    //Hash function in our case, we be used to convert a key into a value
    //Hash functions have many other uses
        //  Hash tables, to protect data, store data, authenticate you when you log in on a website, crypto-currency, and much more!
    
// The definition of a basic hash function is a function that takes data of an arbitrary size (whether it's a thousand characters or a million characters) and it spits out data of a fixed size
    // It maps an input to an output of a fixed size
    // The output is the same size, no matter the size of the input
        // Ex: the hash result for "Hello this is a full sentence string!", is the same size as the hash result for "a"
            // Made up has results: 2378410983 and -9082631346

// What makes a good hash
    // (Though the example is not a cryptographically secure one)
    // 1. Fast (i.e. constant time)
    // 2. Distributes values uniformly
        // Doesn't cluster outputs at specific indices, but distributes them uniformly
        // NOT a dumb array that always returns everything at the middle of the array
    // Deterministic
        // (same input yields the same output)

// Example of a bad, slow Hash
function slowHash(key){
    for(var i = 0; i < 10000; i++){
        console.log("everyday i'm hashing");
    }
    return key[0].charCodeAt(0);
}
// bad because it loops 10,000 times, printing each time and then does the hashing

// Example of a bad, non-deterministic hash, since the returned output is not always the same for a given input
function randomHash(key){
    return Math.floor(Math.random() * 1000)
}


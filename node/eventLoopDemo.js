const fs = require ('fs');

console.log('step 1: satrting the program');

fs.readFile('example.txt', 'utf8', (err,data) =>{
    if(err){
        console.error('error reading file', err);
        return;
    }
    console.log('step 3: file content:', data);
} );

console.log('step 2: program continues');

// Explanation of Each Line:
/*
console.log('Step 1...'): Executes immediately.
fs.readFile('example.txt'...): Starts reading the file asynchronously. The main thread moves to the next task while this operation happens in the background.
console.log('Step 2...'): Executes immediately after Step 1 because fs.readFile is non-blocking.
Once the file is read, console.log('Step 3...') in the callback is executed, showing the file content.
Expected Output:
vbnet
Copy code
Step 1: Starting the program
Step 2: Program continues
Step 3: File content: Node.js is an awesome runtime for JavaScript.
Key Takeaways:
Non-blocking nature: The program doesn't wait for fs.readFile to complete and moves to the next line of code.
Event Loop: Ensures the callback is executed after the file is read.
Next Exercise: Delays with setTimeout
Let’s dive deeper by introducing */


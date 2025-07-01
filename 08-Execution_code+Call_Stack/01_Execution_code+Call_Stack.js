// Call Stack
// The call stack is a mechanism for an interpreter to keep track of its place in a script that calls multiple functions
// It is a stack data structure that stores information about the active subroutines of a computer program
// When a function is called, a new frame is created and pushed onto the stack
// When the function returns, its frame is popped off the stack

// In Simple Words:
// The call stack works like a stack of plates. When you call a function,
// you put a plate on top of the stack. When the function is done, you take the plate off.
// This keeps track of what function is currently running and what to do when it's done.

// Example of Call Stack
function firstFunction() {
  console.log("First Function Called");
  secondFunction();
  console.log("First Function Ended");
}

function secondFunction() {
  console.log("Second Function Called");
}

firstFunction();
console.log("Global Scope Ended");
// Output:
// First Function Called
// Second Function Called
// First Function Ended
// Global Scope Ended
// Explanation:
// 1. `firstFunction` is called, which logs "First Function Called".
// 2. Inside `firstFunction`, `secondFunction` is called, which logs "Second Function Called".
// 3. After `secondFunction` completes, control returns to `firstFunction`, which logs "First Function Ended".
// 4. Finally, the global scope logs "Global Scope Ended".

secondFunction();
// Output:
// Second Function Called
// Explanation:
// 1. `secondFunction` is called, which logs "Second Function Called".
// 2. Since there are no more statements in `secondFunction`, it returns to the global scope.
// 3. The global scope remains active, but nothing else is logged.

// This shows how the call stack keeps track of function calls and returns, ensuring that each function completes before moving on to the next one.

//Execution code
// The execution code is the actual code that runs in the execution context.
// It is the code that is executed when a function is called or when the script is run.
// The execution code is responsible for executing the statements and expressions in the code.

// Execution Context
// The execution context is an abstract concept that holds information about the environment within which the current code
// is executed. It includes the scope, variables, and the value of `this`.
// There are three types of execution contexts:
// 1. Global Execution Context: The default context where the code runs initially (This will always be created every time a script is run).
// 2. Function Execution Context: Created when a function is invoked.
// 3. Eval Execution Context: Created by the `eval` function.
// Each execution context has its own scope chain, variable object, and `this` value.

// Example of Execution Context
function exampleFunction() {
  console.log("Inside exampleFunction");
}
exampleFunction(); // This creates a new function execution context
// The execution context for `exampleFunction` is created when it is called.
// The global execution context is created when the script is run, and it remains active until the script finishes executing.
// The execution context is responsible for managing the scope, variables, and the value of `this`.
// When a function is called, a new execution context is created for that function.
// The call stack keeps track of these execution contexts, allowing the interpreter to manage function calls and returns.
// The execution context is crucial for understanding how JavaScript executes code, manages scope, and handles function calls.
// The call stack and execution context work together to ensure that functions are executed in the correct order and that
// variables are accessible in the right scope.

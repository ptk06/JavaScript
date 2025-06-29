// Immediately Invoked Function Expression (IIFE)
// An IIFE is a function that runs as soon as it is defined
// It is used because it creates a new scope, preventing variable collisions and
// pollution of the global scope

// Pollution of the global scope means that variables defined in one part of the code
// can interfere with variables defined in another part, leading to bugs and
// unexpected behavior.

// Example of an IIFE

// Named IIFE
(function chai() {
  console.log(`DB Connected`);
})(); // Immediately Invoked

((name) => {
  // IIFE with parameter
  console.log(`DB2 Connected to ${name}`);
})("MySQL");

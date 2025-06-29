// Check if an object is empty
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

// Example usage
let obj1 = {};
let obj2 = { key: "value" };

console.log(isEmptyObject(obj1)); // Output: true
console.log(isEmptyObject(obj2)); // Output: false

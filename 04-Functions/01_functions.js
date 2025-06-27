// Function declaration without return value
function addTwoNumbers(a, b) {
  console.log("Adding two numbers:", a, b);
}
// Function declaration
addTwoNumbers(5, 10); // Calling the function with arguments 5 and 10
// Function declaration does not return a value, it just performs an action (logging in this case).

const result = addTwoNumbers(5, 10); // This will log the numbers but not return a value
console.log("Result:", result); // undefined, because the function does not return anything

// Function declaration with return value
function addTwoNumbersWithReturn(a, b) {
  console.log("Adding two numbers with return:", a, b);
  console.log(a + b); // This will log the sum of the two numbers
  return a + b; // This function returns the sum of the two numbers
}
// addTwoNumbersWithReturn(5, 10); // This will call the function but not store the returned value anywhere so it won't be logged or printed.

const sum = addTwoNumbersWithReturn(5, 10); // This will call the function and store the returned value in the variable 'sum'
console.log("Sum:", sum); // This will log the sum of the two numbers, which is 15

function loginUser(username) {
  return `User ${username} logged in with username: ${username}`;
}
// Example usage of loginUser function
const userLoginMessage = loginUser("Prateek");
console.log("User Login Message:", userLoginMessage); // This will log the message returned by the loginUser function

// console.log(loginUser("Prateek"));

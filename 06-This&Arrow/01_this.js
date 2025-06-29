// In JavaScript, the this keyword is a special identifier that refers to the context
// in which the current code is being executed.
// Its value depends on how and where it is used

// and can vary based on the execution context, such as whether the code is in a function,
// an object method, or a global scope.
// The value of this can be determined by the following rules:

// 1. Global Context: In the global execution context (outside of any function), this refers to the global object (window in browsers).
console.log(this); // this will log empty {}

// 2. Function Context: In a regular function, this refers to the global object (window in browsers) if the function is called in the global scope.
function regularFunction() {
  let a = 10;
  console.log(this.a); //This will log undefined because 'a' is not a property of the global object in strict mode.
  //   console.log(this);
}
regularFunction(); // In a browser, this will log the window object.

// 3. Method Context: When a function is called as a method of an object, this refers to the object that the method is called on.
const user = {
  name: "Prateek",
  age: 23,
  welcomeMessage: function () {
    console.log(`Hello ${this.name}, welcome to the JavaScript course!`);
    console.log(this); // this will log the user object
  },
};
user.welcomeMessage();
user.name = "John"; // Changing the name property of the user object
user.welcomeMessage();

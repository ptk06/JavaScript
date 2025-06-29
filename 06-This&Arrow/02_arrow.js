// this is explicit return
const addTwo = (num1, num2) => {
  // This is an Arrow Function
  return num1 + num2;
};
console.log(addTwo(2, 3));

// This is Implicit Return
const addThree = (num1, num2, num3) => num1 + num2 + num3;
console.log(addThree(2, 3, 4));

// This is an Arrow Function with no parameters
const sayHello = () => "Hello, World!";
console.log(sayHello());

// To return object from an arrow function, we need to wrap the object in parentheses
const createUser = (name, age) => ({
  name: name,
  age: age,
});
console.log(createUser("Alice", 30));

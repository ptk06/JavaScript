function calculatePrice1(...num1) {
  return num1;
}
console.log(calculatePrice1(10, 20, 30));

// The spread operator (...) allows the function to accept any number of arguments.
function calculatePrice(...num1) {
  return num1.reduce((acc, curr) => acc + curr, 0); // This will sum all the numbers passed as arguments
  // The reduce method takes a callback function that accumulates the sum of all elements in the array.
  // The initial value for the accumulator is set to 0.

  // curr is the current element being processed in the array.
  // acc is the accumulator that holds the sum of all previous elements.
}
console.log(calculatePrice(10, 20, 30));

const user = {
  username: "Prateek",
  prices: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// handleObject(user);
handleObject({
  username: "Prateek1",
  price: 299,
});

const myNewArray = [100, 200, 300];
//returns the 2nd value from the array
function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray)); // We can pass the array directly to the function
console.log(returnSecondValue([100, 200, 300])); // We can also pass objects or arrays directly to the function without storing them in a variable first

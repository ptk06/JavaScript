//Nested Scope

function one() {
  const username = "Prateek";

  function two() {
    const website = "Youtube";
    console.log(username);
  }
  //   console.log(website);
  two();
}

// one();

if (true) {
  const username = "Prateek";
  if (username === "Prateek") {
    const website = " youtube";
    console.log(username + website);
  }
  //   console.log(website);
}
// console.log(username);

// Declaration of functions and some of its interesting things to notice.
// Hoisting in JavaScript allows functions to be called before they are defined in the code.

// Function declarations are hoisted, meaning they can be called before they are defined in the code.
console.log(addone(2)); // Function declarations are hoisted, so they can be called before they are defined.
function addone(num) {
  return num + 1;
}

// Function expressions are not hoisted, so they cannot be called before they are defined.
// console.log(addtwo(4));
const addtwo = function (num) {
  return num + 2;
};
// Arrow functions are also not hoisted, so they cannot be called before they are defined.
// console.log(addthree(5));
const addthree = (num) => {
  return num + 3;
};

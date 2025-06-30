//for of
// This is used when you want to iterate over an array or iterable object.
// The `for...of` loop is a modern way to iterate over iterable objects like arrays, strings, maps, sets, etc.
// It is more concise and readable than the traditional `for` loop.
// It allows you to access each element directly without needing an index.

// ["", "", ""]
// [{}, {}, {}]
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  console.log(num);
}

// map- the map object holds key-value pairs and remembers the original insertion order of the keys.
// // It is similar to an object but allows any type of key (not just strings).

// main difference in map vs object
// - Map allows keys of any type (including objects), while objects only allow strings and symbols as keys.
// - Map maintains the insertion order of keys, while objects do not guarantee any specific order.

const map = new Map();
map.set("name: ", "John");
map.set("age: ", 30);
map.set("city: ", "New York");
console.log(map);

for (const [key, value] of map) {
  //   console.log(key, value);
}

const myObject = {
  game1: "Chess",
  game2: "Checkers",
  game3: "Monopoly",
};
// for (const [key, value] of myObject) {
//   //   console.log(key, "-", value); // This will throw an error because objects are not iterable
// }

//for...in

// Instead, you can use a `for...in` loop to iterate over the keys of an object.
// The `for...in` loop is used to iterate over the enumerable properties of an object
const myObject2 = {
  js: "JavaScript",
  python: "Python",
  java: "Java",
  cpp: "C++",
};
for (const key in myObject2) {
  console.log(key, "-", myObject2[key]); // This will log each key-value pair in the object
}

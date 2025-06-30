// for each loop
// The `forEach` method is used to iterate over arrays and array-like objects.
// We cannot return in forEach loop
// It executes a provided function once for each array element.
// It is a method of the Array prototype and is not available for objects or other data structures
const coding = ["JavaScript", "Python", "Java", "C++"];

// coding.forEach((val) => {
//   console.log(val);
// });

//We can also do it as below-
function printMe(items) {
  console.log(items);
}

// we created a function above and then we are giving the reference to the function inside forEach loop below

coding.forEach(printMe); //We just need to give the reference, don't execute it like- printMe()

//We can not only only pass items as parameters, forEach loop also have access to index and full array

coding.forEach((items, index, arr) => {
  console.log(items, index, arr);
});
//output-
// JavaScript 0 [ 'JavaScript', 'Python', 'Java', 'C++' ]
// Python 1 [ 'JavaScript', 'Python', 'Java', 'C++' ]
// Java 2 [ 'JavaScript', 'Python', 'Java', 'C++' ]
// C++ 3 [ 'JavaScript', 'Python', 'Java', 'C++' ]

const myCoding = [
  {
    language: "JavaScript",
    languageFileName: "js",
  },
  {
    language: "Python",
    languageFileName: "py",
  },
  {
    language: "Java",
    languageFileName: "java",
  },
];

myCoding.forEach((val) => {
  console.log("\nLanguage:", val.language, "FileName:", val.languageFileName);
});

//We can also do it in for...of loop, bit not in for...in loop, it will log undefined in for...in loop.
for (const key of myCoding) {
  console.log("\nLanguage:", key.language, "FileName:", key.languageFileName);
}

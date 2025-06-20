const array = [1, 2, 3, 4, 5, "Prateek", true];
const array2 = new Array(1, 2, 3, 4, 5, "Prateek", true); //We can declare array in this way too.
// console.log(array.length);

// console.log(array);
// console.log(array2);
// console.log(array[5]);

//Array Methods

array.push("New Element");
// array.pop();
// console.log(array.includes("Prateek"));
// console.log(array.indexOf(2));
// console.log(array2.concat(array).toString());
// array.unshift("Pushed at first pos");
// array.shift();
// console.log(array);

// Slice & Splice

console.log("A ", array);

const myarr1 = array.slice(1, 4);

console.log(myarr1);
console.log("B ", array);

const myarr2 = array.splice(1, 4);

console.log("C ", array);
console.log(myarr2);

// console.log(array.slice(1, 4));

//forEach Continue...

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter((num) => num > 4); // here there is no scope used for the function so return is not required, but if score is there then return is mandatory or else it will show empty array.
// const newNums= myNums.filter( (num) =>{
//     return nums>4;
// })
console.log(newNums);

//Or we can use foreach loop too-

const newVals = [];
myNums.forEach((val) => {
  if (val > 4) {
    newVals.push(val);
  }
});
console.log(newNums);

// ..........................................................................//

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

const userFiltered = books.filter((val) => {
  return val.genre === "Non-Fiction" && val.publish >= 1982;
});
console.log(userFiltered);

// using map to add 10 to every array element and return

const newNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const user = newNumber.map((val) => {
  return val + 10;
});
console.log(user);

// ..........................................................//
//chaining method
const newNum = newNumber
  .map((nums) => nums * 10)
  .map((nums) => nums + 1)
  .filter((nums) => nums > 41 && nums < 90);
console.log(newNum);

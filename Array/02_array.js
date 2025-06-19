const marvel_heroes = [
  "Iron Man",
  "Captain America",
  "Thor",
  "Hulk",
  "Black Widow",
];
const dc_heroes = [
  "Superman",
  "Batman",
  "Wonder Woman",
  "Flash",
  "Green Lantern",
];

//Methods to combine arrays

// 1st Method
marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);
// console.log(marvel_heroes[5][2]);  //this is a bad practice

// 2nd Method
const all_heroes = marvel_heroes.concat(dc_heroes);
// console.log(all_heroes);

// 3rd Method
const all_new_heroes = [...marvel_heroes, ...dc_heroes]; // by using spread operator it is not an array anymore, all the elements in the array are spread individually
// console.log(all_heroes);

//4th Method
const new_array = [1, 2, 3, [4, 5], 6, [7, 8, [9, 10]]];
const flattened_array = new_array.flat(Infinity); // flatten all levels or dimensions array
// console.log(flattened_array);

// 5th Method
// adding all the DC heroes next to each Marvel hero, then flattening the result into one array.
// So each Marvel hero is followed by all DC heroes.
const all_new_kind_heroes = marvel_heroes
  .map((hero) => [hero, ...dc_heroes])
  .flat();
// console.log(all_new_kind_heroes);

// Convert into array

console.log(Array.from("Prateek"));

const num1 = 100;
const num2 = 200;
const num3 = 300;

const all_numbers = Array.of(num1, num2, num3);
console.log(all_numbers);

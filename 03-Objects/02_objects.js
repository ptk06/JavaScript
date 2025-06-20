// const gameUser = new Object(); //This is a singleton object, not a constructor function

const newUser = {}; // This is an object literal
newUser.name = "John Doe";
newUser.age = 30;
newUser.location = "USA";
newUser.hobbies = ["reading", "traveling", "gaming"];

// console.log(newUser); // Accessing the entire object

const regularUser = {
  email: "ptkprateek6@gmail.com",
  fullname: {
    userFullName: {
      firstName: "Prateek",
      lastName: "Padhi",
    },
  },
};
console.log(regularUser); // Accessing the entire object

console.log(regularUser.fullname.userFullName.lastName); // Accessing nested property using dot notation
console.log(regularUser["fullname"]["userFullName"]["lastName"]); // Accessing nested property using bracket notation

console.log("====================================");
// ways to access nested properties in an object
console.log(regularUser.fullname.userFullName.firstName); // Accessing nested property using dot notation
console.log(regularUser.fullname["userFullName"]["firstName"]); // This is also correct, but not necessary here
console.log(regularUser["fullname"]["userFullName"]["firstName"]); // This is the correct way to access the nested property using bracket notation

// console.log(regularUser[fullname][firstName]); // This will throw an error because fullname and firstName are not defined variables

console.log("====================================");

// Combining objects

const user1 = {
  name: "Alice",
  age: 25,
};
const user2 = {
  email: "bob@example.com",
  location: "USA",
};
const combinedUser = { ...user1, ...user2 }; // Using spread operator to combine objects
console.log(combinedUser); // { name: 'Alice', age: 25, email: 'bob@example.com', location: 'USA' }

// Alternatively, using Object.assign
const anotherCombinedUser = Object.assign({}, user1, user2);
console.log(anotherCombinedUser); // { name: 'Alice', age: 25, email: 'bob@example.com', location: 'USA' }
// Note: If there are properties with the same name in both objects, the last one will overwrite the previous

// one. For example, if both user1 and user2 had a property called 'name', the value from user2 would be used in the combined object.

// Example of combining objects with the same property
const user3 = {
  name: "Charlie",
  age: 30,
};
const user4 = {
  name: "David", // This will overwrite the 'name' property from user3
  location: "Canada",
};
const combinedUser2 = { ...user3, ...user4 };
console.log(combinedUser2); // { name: 'David', age: 30, location: 'Canada' }

// In this case, the 'name' property from user4 overwrites the one from user3, resulting in 'David' being the final value for 'name'.

console.log(newUser);
console.log(Object.keys(newUser)); // Accessing keys of the object
console.log(Object.values(newUser)); // Accessing values of the object
console.log(Object.entries(newUser)); // Accessing key-value pairs of the object
console.log(newUser.hasOwnProperty("hobbies")); // Checking if the object has a specific property

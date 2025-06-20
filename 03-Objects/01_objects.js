//Singleton - it is created in constructor and it is not possible to create another instance of the class
// Object.create

//Object Literal

const mysymbol = Symbol("mySymbol");

const person = {
  name: "Prateek",
  fullName: "Prateek Ranjan Padhi",
  //   mysymbol: "mykey1", // This is a string, not a symbol
  [mysymbol]: "mykey2", // This is a symbol
  age: 23,
  location: "India",
  hobbies: ["reading", "coding", "gaming"],
  greet: function () {
    console.log(
      `Hello, my name is ${this.name}. I am ${
        this.age
      } years old and I live in ${
        this.location
      }. My hobbies are ${this.hobbies.join(", ")}.`
    );
  },
};

// Accessing properties and methods of the object
console.log(person); // Accessing the entire object
person.greet();

console.log(person.name); // Accessing property
console.log(person["fullName"]); // Accessing property using bracket notation as the key is a string but we don't need to declare it as a string because the compiler automatically understands it as a string
console.log(person.fullName); // Accessing property using dot notation
console.log(typeof person[mysymbol]); // Accessing property using symbol
console.log(person[mysymbol]); // Accessing property using symbol
console.log(person.age); // Accessing property
console.log(person.location); // Accessing property

// Adding a new property to the object/ changing the value of an existing property
person.email = "prateek@example.com";
console.log(person.email); // Accessing the newly added property

// Deleting a property from the object
delete person.age;
console.log(person.age); // Accessing the deleted property, should return undefined

// Checking if a property exists in the object
console.log("name" in person); // true

console.log("age" in person); // false, since we deleted it

// Freezing the object to prevent any changes
Object.freeze(person);

person.name = "John"; // This will not work because the object is frozen
console.log(person.name); // Still "Prateek", as the object is frozen

person.age = 30; // This will not work because the object is frozen
console.log(person.age); // Still undefined, as the object is frozen

// Checking if the object is frozen
console.log(Object.isFrozen(person)); // true

// Cloning the object using Object.assign
const clonedPerson = Object.assign({}, person);
console.log(clonedPerson); // Cloned object

// Cloning the object using spread operator
const spreadClonedPerson = { ...person };
console.log(spreadClonedPerson); // Cloned object using spread operator

// Creating a new object using Object.create
const newPerson = Object.create(person);
newPerson.name = "Alice"; // Adding a new property to the new object
console.log(newPerson.name); // "Alice"

const course = {
  courseName: "JavaScript Basics",
  price: "$99.99",
  courseDuration: "4 weeks",
};

// console.log(course.courseDuration);

// Destructuring assignment (V.V.Important)
// allows us to extract properties from an object and assign them to variables in a more concise way.
// It is a convenient way to access properties of an object without having to repeatedly reference the object itself.
const { courseName, price, courseDuration: duration } = course; // Destructuring assignment => extracting properties from an object and assigning them to variables.
console.log(courseName); // "JavaScript Basics"
console.log(duration); // "4 weeks"

// API
const apiResponse = {
  status: "success",
  data: {
    userId: 123,
    userName: "John Doe",
  },
};
// Destructuring assignment is also useful when working with API responses, as it allows us to extract the relevant data directly.
console.log(apiResponse.status); // "success"
// Destructuring assignment
const {
  status,
  data: { userId, userName },
} = apiResponse;
console.log(status); // "success"
console.log(userId); // 123
console.log(userName); // "John Doe"

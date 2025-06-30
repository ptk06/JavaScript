//reduce
//It is a callback function
//This will be best used in shopping cart while calculating the total cart value.
const array = [1, 2, 3, 4, 5, 6];

// const newVal = array.reduce((acc, currVal) => {
//   console.log(`acc: ${acc} and currVAL: ${currVal}`);
//   return acc + currVal;
// }, 0);

//Same thing in short.
const newVal = array.reduce((acc, currVal) => acc + currVal, 0); // If we don't give the initial value then it by default takes the array element at index 0 as the initial value.

console.log(newVal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const totalPrice = shoppingCart.reduce((acc, currVal) => {
  return acc + currVal.price;
}, 0);

console.log(totalPrice);

// Truthy Values
// In JavaScript, all values are truthy except for the following falsy values:
// 1. false
// 2. 0
// 3. "" (empty string)
// 4. null
// 5. undefined
// 6. NaN
// 7. -0
// 8. 0n (BigInt zero)

// All other values, including objects, arrays, and non-empty strings, are considered truthy.

// Example of Truthy Values:
// 1. "Hello" (non-empty string)
// 2. 42 (non-zero number)
// 3. [] (empty array)
// 4. {} (empty object)
// 5. function() {} (function)
// 6. "0" (string with zero)
// 7. true (boolean true)

// Nullish Coalescing Operator

// The nullish coalescing operator (??) is used to provide a default value when dealing with null or undefined values.
// It returns the right-hand operand when the left-hand operand is null or undefined, otherwise it returns the left-hand operand.
// Example of Nullish Coalescing Operator:
let value = null;
let defaultValue = "Default";
let result = value ?? defaultValue;
console.log(result); // Output: "Default"
// This means that if `value` is null or undefined, `result` will be set to "Default".
// If `value` is any other value (including false, 0, or an empty string), `result` will be set to that value.
// The nullish coalescing operator is particularly useful when you want to provide a fallback value for variables that may not be set,
// without treating other falsy values like 0 or false as null or undefined.
// Example of using nullish coalescing operator with different values
let anotherValue = 0;
let anotherResult = anotherValue ?? defaultValue;
console.log(anotherResult); // Output: 0
// In this case, `anotherValue` is 0, which is a falsy value, but it is not null or undefined.
// Therefore, `anotherResult` is set to 0, not the default value "Default".

/*
let JS = "Amazing";
if (JS === "Amazing") alert("JS is FUN!");

console.log(40 + 8 + 23 - 10);

let TS; // TS is declared but not initialized Typeof TS will be undefined

const age = 23;

// age = 24; // This will throw an error because 'age' is a constant

// const birthYear; // This will throw an error because 'birthYear' is not initialized

// const age = 24; // This will throw an error because 'age' is already declared

// Template Literals
const firstName = "Ashparsh";
const greeting = `Hello, my name is ${firstName}. I am learning JavaScript.`;
console.log(greeting);

// if statement
const hasDriversLicense = true;
if (hasDriversLicense) {
  console.log("I can drive!");
}

// if statement with else
const hasGoodVision = true;
if (hasDriversLicense && hasGoodVision) {
  console.log("I can drive and have good vision!");
} else {
  console.log("I cannot drive or have poor vision.");
}


// type conversion
const inputYear = "1991";
console.log(Number(inputYear) + 18); // Converts string to number but does not change the original string
console.log(String(23)); // Converts number to string
console.log(Number("Ashparsh")); // NaN (Not a Number) because "Ashparsh" cannot be converted to a number
console.log(typeof NaN); // NaN is of type 'number'

// type coercion
console.log("I am " + 23 + " years old."); // Coerces number to string
console.log("23" - "10"); // Coerces strings to numbers and performs subtraction
console.log("23" + "10"); // Concatenates strings
console.log("23" * "2"); // Coerces strings to numbers and performs multiplication
console.log("23" / "2"); // Coerces strings to numbers and performs division

// Falsy values in JavaScript
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean("")); // false (empty string)
console.log(Boolean(NaN)); // false (Not a Number)

// Truthy values in JavaScript
console.log(Boolean(1)); // true
console.log(Boolean("Ashparsh")); // true (non-empty string)
console.log(Boolean({})); // true (empty object)
console.log(Boolean([])); // true (empty array)
console.log(Boolean(function() {})); // true (function is truthy)

// == operator vs === operator
console.log(23 == "23"); // true (loose equality, type coercion occurs)
console.log(23 === "23"); // false (strict equality, no type coercion)
console.log(0 == false); // true (loose equality, 0 is falsy)
console.log(0 === false); // false (strict equality, different types)
console.log(null == undefined); // true (loose equality, both are considered equal)
console.log(null === undefined); // false (strict equality, different types)

// prompt for user input
const userAge = prompt("What is your age?");
console.log(`You are ${userAge} years old.`);
cconsole.log(`Type of userAge: ${typeof userAge}`); // userAge is a string by default

// Logic operators
const largeNumber = true;
const smallNumber = false;
console.log(largeNumber && smallNumber); // false (AND operator)
console.log(largeNumber || smallNumber); // true (OR operator)
console.log(!largeNumber); // false (NOT operator)
*/

// Switch statement
const day = "monday";

switch (day) {
  case "monday": // day === "monday" this is a strict comparison
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday": // Note: You can have multiple cases fall through for the same block and it will execute the same code
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}

// Alternate ways using if-else
if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
}


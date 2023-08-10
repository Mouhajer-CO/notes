# Basics

```javascript
// Console
console.log('Hello world!');
// ---------------------------------- //
// Variables

const found = true;
const name = "Someone";
let age = 33;
let amount = null;
var l;
let x;

console.log(x, l); // logs "undefined undefined"
console.log(name.length);
// ---------------------------------- //
// Arithmetic Operators
// Addition // Subtraction // Multiplication // Division // Modulo
// ---------------------------------- //

// Comments
// a one line comment

/* this is a longer,
 * multi-line comment
 */
// ---------------------------------- //
// Assignment Operators
let number = 100;

// Both statements will add 10
number = number + 10;
number += 10;

console.log(number); // => 120
// ---------------------------------- //
// String concatenation

name + ' is ' + age + ' years old.';
// String interpolation
`${name} is ${age} years old.`;
// ---------------------------------- //
// let Keyword

let count; 
console.log(count); // => undefined
count = 10;
console.log(count); // => 10
// ---------------------------------- //
// const Keyword

const numberOfColumns = 4;
numberOfColumns = 8; // Uncaught TypeError: Assignment to constant variable.
// ---------------------------------- //
// Operators

var x = 1;
result = (x == 1) ? true : false; // true -Ternary Operator

// Logical Operator ||

true || false;       // true
10 > 5 || 10 > 20;   // true
false || false;      // false
10 > 100 || 10 > 20; // false

// Logical Operator &&

true && true;        // true
1 > 2 && 2 > 1;      // false
true && false;       // false
4 === 4 && 3 > 1;    // true

// Comparison Operators

1 > 3                // false
3 > 1                // true
250 >= 250           // true
1 === 1              // true
1 === 2              // false
1 === '1'            // false


let trueValue = true;
let oppositeValue = !trueValue;

console.log(oppositeValue); // false
// ---------------------------------- //
// if Statement

const isMailSent = true;

if (isMailSent) {
  console.log('Mail sent to recipient');
}
// ---------------------------------- //
// else if
const size = 10;

if (size > 100) {
  console.log('Big');
} else if (size > 20) {
  console.log('Medium');
} else if (size > 4) {
  console.log('Small');
} else {
  console.log('Tiny');
}
// Print: Small
// ---------------------------------- //
// switch Statement

const food = 'salad';

switch (food) {
  case 'oyster':
    console.log('The taste of the sea');
    break;
  case 'pizza':
    console.log('A delicious pie');
    break;
  default:
    console.log('Enjoy your meal');
}
// ---------------------------------- //
// == vs ===
// The `==` just check the value, `===` check both the value and the type.

0 == false   // true
0 === false  // false, different type
1 == "1"     // true,  automatic type conversion 
1 === "1"    // false, different type
null == undefined  // true
null === undefined // false
'0' == false       // true
'0' === false      // false
// ---------------------------------- //
// Functions

// Defining the function:
function sum(num1, num2) {
  return num1 + num2;
}

// Calling the function:
sum(3, 6); // 9

// Function
function square(number) {
  return number * number;
}

// Arrow Functions (ES6)
const sum = (param1, param2) => { 
  return param1 + param2; 
}; 

console.log(sum(2,5)); // => 7 

// With no arguments
const printHello = () => { 
  console.log('hello'); 
}; 
printHello(); // => hello

// With a single argument
const printAge = age => { 
  console.log(`Age: ${age}`); 
}; 
printAge(25); // => Age : 25 

// Concise arrow functions

const multiply = (a, b) => a * b; 
// => 60 
console.log(multiply(2, 30)); 

// Calling Functions

// Defining the function
function sum(num1, num2) {
  return num1 + num2;
}
// ---------------------------------- //
// Scope 
function exampleFunction() {
  const x = "declared inside function"; // x can only be used in exampleFunction
  console.log("Inside function");
  console.log(x);
}
// - https://developer.mozilla.org/en-US/docs/Glossary/Scope
// - https://www.digitalocean.com/community/tutorials/understanding-scope-in-javascript

console.log(x); // undefined

// Block Scoped Variables

const isLoggedIn = true;
if (isLoggedIn == true) {
  const statusMessage = 'Logged in.';
}
console.log(statusMessage); // Uncaught ReferenceError: statusMessage is not defined

// Variable declared globally
const x = "declared outside function";

exampleFunction();

function exampleFunction() {
  console.log("Inside function");
  console.log(x);
}

console.log("Outside function");
console.log(x);

// let vs var
// `var` is scoped to the nearest function block, and `let` is scoped to the nearest enclosing block.

for (let i = 0; i < 3; i++) {
  // This is the Max Scope for 'let'
  // i accessible ✔️
}
// i not accessible
console.log(i) // Uncaught ReferenceError: i is not defined
---
// var declarations, wherever they occur in a script, are processed before any code within the script is executed.
for (var i = 0; i < 3; i++) {
  // i accessible ✔️
}
// i accessible ✔️
console.log(i) // 3
// ---------------------------------- //
// Arrays

const fruits = ["apple", "orange", "banana"];
const data = [1, 'chicken', false]; // Different data types
const numbers = [1, 2, 3, 4];

console.log(numbers.length);  // 4 - Property .length
console.log(numbers[0]); // 1 - Index, Accessing an array element
console.log(numbers[1]); // 2

// .push() - Add items to the end and returns the new array length.
fruits.push('pear');  // Adding a single element
numbers.push(5, 6); // Adding multiple elements:

// .pop() - Remove an item from the end and returns the removed item.
const fruit = fruits.pop(); // 'banana'
console.log(fruits); // ["apple", "orange"]


// .shift() - Remove an item from the beginning and returns the removed item.
const fruit = fruits.shift(); // ['orange', 'banana']

// .unshift() - Add items to the beginning and returns the new array length.
fruit.unshift('fig');  // ["fig", "apple", "orange", "banana"]

// .concat() - create new array
const newFirstNumber = 0
[newFirstNumber].concat(numbers) // [0, 1, 2, 3, 4]
// ---------------------------------- //
// Loops

for (let i = 0; i < 4; i += 1) {
  console.log(i);
};

let i = 0;
while (i < 5) {        
  console.log(i++);
}

let x = 0, i = 0;
do {
  x = x + i;
  console.log(x)
  i++;
} while (i < 5);
// => 0 1 3 6 10

// Looping Through Arrays
for (let i = 0; i < array.length; i++){
  console.log(array[i]);
}

// Break
for (let i = 0; i < 99; i += 1) {
  if (i > 5) {
     break;
  }
  console.log(i)
}

// Continue
for (i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}

// Nested
for (let i = 0; i < 2; i += 1) {
  for (let j = 0; j < 3; j += 1) {
    console.log(`${i}-${j}`);
  }
}

// for...in loop
const fruits = ["apple", "orange", "banana"];
for (let index in fruits) {
  console.log(index);
}

// for...of loop
const fruits = ["apple", "orange", "banana"];
for (let fruit of fruits) {
  console.log(fruit);
}
// ---------------------------------- //
// Callback Functions

const isEven = (n) => {
  return n % 2 == 0;
}

let printMsg = (evenFunc, num) => {
  const isNumEven = evenFunc(num);
  console.log(`${num} is an even number: ${isNumEven}.`)
}

// Pass in isEven as the callback function
printMsg(isEven, 4); // The number 4 is an even number: True.
// ---------------------------------- //
// Array Method - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// .reduce()

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, curVal) => {  
  return accumulator + curVal;
});
console.log(sum); // 10

// Array Method .map()
const array1 = [1, 4, 9, 16];
// Pass a function to map
const map1 = array1.map((x) => x * 2);
console.log(map1); // Expected output: Array [2, 8, 18, 32]

// Array Method .forEach()

const array1 = ['a', 'b', 'c'];
array1.forEach((element) => console.log(element));

// Array Method .filter()

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((word) => word.length > 6);
console.log(result); //Expected output: Array ["exuberant", "destruction", "present"]
// ---------------------------------- //
// Object - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics

const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf: function () {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};

console.log(person.age); // => 32
console.log(person.name[0]); // => Bob
console.log(person.bio()); // Bob Smith is 32 years old.
console.log(person.introduceSelf());  // Hi! I'm Bob.
```

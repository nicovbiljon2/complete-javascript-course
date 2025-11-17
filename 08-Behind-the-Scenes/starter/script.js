"use strict";
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  // console.log(firstName);

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = "Steven"; // variable is available in the current scope and therefore it will use this firstName variable and not the variable firstName from the outer scope

      // Reassigning outer scope's variable
      output = "NEW OUTPUT!";
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str); // outside of the block - let and const are block scope - ReferenceError
    console.log(millenial); // var are function scope - ignore the block scope and can access the variable
    // add(2, 3); // can't access the add function due to strict mode is on. If not it will access it
    console.log(output); // redefine the variable from the parent scope - manipulate this variable inside an inner scope (child scope)
  }
  printAge();

  return age;
}

const firstName = "Nico";
calcAge(1991);
// console.log(age); outer scope - don't have access to the inner scope - ReferenceError
// printAge();
*/

// Hoisting and TDZ in practice

// Variables
console.log(me);
// console.log(job); // ReferenceError - cannot access "job" before initialization
// console.log(year); // // ReferenceError - cannot access "job" before initialization

var me = "Nico";
let job = "Spares Coordinator";
const year = 1991;

// Functions
console.log(addDeclaration(2, 3));
// console.log(addExpression(2, 3)); // ReferenceError - cannot access "job" before initialization
// console.log(addArrow(2, 3)); // ReferenceError - cannot access "job" before initialization
console.log(addArrow);

function addDeclaration(a, b) {
  return a + b;
}

const addExpression = function (a, b) {
  return a + b;
};

// const addArrow = (a, b) => a + b;
var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10; // don't use var to declare varialbes at the top of each scope(clean code)

// Always declare all your functions first and  onle use them after declaration
function deleteShoppingCart() {
  console.log("All products deleted!");
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

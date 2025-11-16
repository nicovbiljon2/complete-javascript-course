"use strict";

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

"use strict"; // activating strict mode 

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log("I can drive 😊");

// const interface = "Audio";
// const private = 534;
// const if = 234;
 */

/*Functions 
function logger() {
    console.log("My name is Nico");
}

logger(); // invoking, running, calling the function
logger();
logger();

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 3));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

/* Function declarations and expressions */
// function declaration
const age1 = calcAge1(1991);
console.log(age1);

function calcAge1(birthYear) {
    return 2037 - birthYear;
}
//const age1 = calcAge1(1991);
// console.log(age1);

// function expression 
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age2);
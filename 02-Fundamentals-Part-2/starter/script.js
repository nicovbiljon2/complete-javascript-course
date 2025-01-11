'use strict'; // activate strict mode

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio" // SyntaxError strict mode reserved word
// const private = 534; // SyntaxError strict mode reserved word

// Functions 

/* function logger() {
    console.log("My name is Nico");
}

logger(); // Invoking, calling or running the function 
logger();
logger();

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice
}

const appleJuice = fruitProcessor(5, 0); //saving the value in appleJuice variable 
console.log(appleJuice);
console.log(fruitProcessor(5, 0)); // log the result directly to the console

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice); */

/*
// Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);

// Function expression (expression produce a value)
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1);
console.log(age2);
*/

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);

console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, "Nico"));
console.log(yearsUntilRetirement(1980, "Piet"));
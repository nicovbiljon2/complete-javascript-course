'use strict'; // activate strict mode

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio" // SyntaxError strict mode reserved word
// const private = 534; // SyntaxError strict mode reserved word

// Functions 

function logger() {
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
console.log(appleOrangeJuice);
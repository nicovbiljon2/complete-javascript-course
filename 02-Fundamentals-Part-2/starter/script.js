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

/* Function declarations and expressions 
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
*/

/* Arrow functions 
// Function expression 
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1991, "Nico"));
console.log(yearsUntilRetirement(1980, "Bob"));
*/

/* Functions calling other functions 
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const appelPieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${appelPieces} apples and ${orangePieces} oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));
*/

/* Reviewing functions 
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0) {
        // return retirement;
        return `${firstName} retires in ${retirement} years`;
    } else {
        return `${firstName} has already retired 🎉`;
        // return -1;
    }

    // return retirement;
    // return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, "Nico"));
console.log(yearsUntilRetirement(1970, "Mike"));*/ 

/* Introduction to Arrays 
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(y);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
// friends = ["Bob", "Alice"];

const firstName = "Nico";
const nico = [firstName, "van Biljon", 2037 - 1990, "teacher", friends];

console.log(nico);
console.log(nico. length);

// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/

/* Basic array operations */
const friends = ["Michael", "Steven", "Peter"];

// Add elements to the array
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// Remove elements from the array
friends.pop(); // last element
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // first element
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes("23"));

if (friends.includes("Steven")) {
    console.log("You have a friend called Steven");
}

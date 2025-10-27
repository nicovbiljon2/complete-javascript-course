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

/* Basic array operations 
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
*/

/*Introduction to objects 
const nico = {
    firstName: "Nico",
    lastName: "van Biljon",
    age: 2037 - 1991,
    job: "teacher",
    friends: ["Michael", "Steven", "Peter"]
};

console.log(nico);

// Dot notation
console.log(nico.lastName);
// Brackect notation
console.log(nico["lastName"]);

const nameKey = "Name";
console.log(nico["first" + nameKey]);
console.log(nico["last" + nameKey]);

const interestedIn = prompt("What do you want to know about Nico? Choose between firstName, last Name, age, job, and friends");

if (nico[interestedIn]) {
console.log(nico[interestedIn]);
} else {
    console.log("Wrong request! Choose between firstName, last Name, age, job, and friends");
}

nico.location = "South Africa";
nico["twitter"] = "@nico"; // this is just an example
console.log(nico);

// Challenge
console.log(`${nico.firstName} has ${nico.friends.length} and his best friend is called ${nico.friends[0]}`);
*/

/*Object methods 
const nico = {
    firstName: "Nico",
    lastName: "van Biljon",
    birthYear: 1991,
    job: "teacher",
    friends: ["Michael", "Steven", "Peter"],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`
    }
};

console.log(nico.calcAge());

console.log(nico.age);
console.log(nico.age);
console.log(nico.age);

// Challenge - write a method getSummary to print this out
// "Nico is a 46-year old teacher, and he has a driver's license"
console.log(nico.getSummary());
*/

/* Iteration: The for loop 

// for loop keeps running while the condition is TRUE
// for (let rep = 1; rep <= 20; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋🏻‍♂️`)
// };

// Looping through an array
const nicoArray = [
    "Nico",
    "van Biljon",
    2037 - 1991,
    "spares coordinator",
    ["Milton", "Wessel", "Dean"],
    true
];

const types = []

for (let i = 0; i < nicoArray.length; i++) {
    // reading from nicoArray
    console.log(nicoArray[i], typeof nicoArray[i]);

    // Filling types array
    // types[i] = typeof nicoArray[i];
    types.push(typeof nicoArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [] // empty array

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < nicoArray.length; i++) {
    if (typeof nicoArray[i] !== "string") continue;

    console.log(nicoArray[i], typeof nicoArray[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < nicoArray.length; i++) {
    if (typeof nicoArray[i] === "number") break;

    console.log(nicoArray[i], typeof nicoArray[i]);
}
*/

/* Looping backwards and loops in loops 
const nico = [
    "Nico",
    "van Biljon",
    2037 - 1991,
    "spares coordinator",
    ["Milton", "Wessel", "Dean"],
    true
];

// index 0, 1, ....,4 
// index 4, 3, ...., 0
for (let i = nico.length - 1; i >=0; i--) {
    console.log(nico[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`---- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(` Exercise ${exercise} Lifting weight repetition ${rep} 🏋🏻‍♂️🏋🏻‍♂️`);
    }
}
*/

/* While loop */
// for (let rep = 1; rep < 11; rep++) {
//     console.log(`Lifting weights repetition ${rep}🏋🏻‍♂️`);
// }

let rep = 1;
while (rep < 11) {
    // console.log(`WHILE: Lifting weight repetition ${rep} 🏋🏻‍♂️`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log("Loop is about to end....");
}


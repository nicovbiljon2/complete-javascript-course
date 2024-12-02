/*// Values and Variables
let js = "amazing";
// if (js === "amazing") alert("JavaScript if FUN!");
// console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

// Variable name conventions
let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Always use descriptive names for your variable names 
let myFirstJob = "Programmer";
let myCurrentJob = "Coder";

console.log(myFirstJob);
console.log(myCurrentJob);

// Constant variable 
const birthYear = 1991;
console.log(birthYear);
*/

// const { GoogleAuthProvider } = require("firebase/auth/web-extension");

/*// Data Types
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

javaScriptIsFun = "YES!";
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);
*/

/*// Basic math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Nico";
const lastName = "van Biljon";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // x = x - 1 = 99
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);
console.log(ageSarah <= 15);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

// Operator Precedence: 
// how operators gets executed = subtract first then the comparison
/*const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 -10 - 5; // subtract first then assignment x = y = 10, x = 10
console.log(x, y);

const averageAge =  (ageJonas + ageSarah) / 2; // parentheses first then division
console.log(ageJonas, ageSarah, averageAge);
*/

// Strings and template literals
/* const firstName = "Nico";
const job = "Spare Parts Coordinator";
const birthYear = 1974;
const year = 2037;

const nico = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(nico);

const nicoNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(nicoNew);

console.log(`Just a regular string....`);

// Create new lines
console.log("String with \n\
multiple \n\
lines");

console.log(`String with
multiple
lines`)  
*/

// Taking decisions: If / else statements
/* const age = 15;

if (age >= 18) {
    console.log("Sarah can start driving license 🚗");
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

// Type Conversion 
/*const inputYear = "1991";
// convert a string to a number
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Nico"));
console.log(typeof NaN);

console.log(String(23), 23);

// Type Coercion
console.log("I am " + 23 + " year old");
console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("23" / "2");

let n = "1" + 1;
n = n -1; 
console.log(n);
*/

// Truthy and Falsy Values
// 5 falsy values: 0, "", undefined, null, NaN

/*console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Nico"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
    console.log("Don't spend it all :)");
} else {
    console.log("You should get a job!");
}

let height;
if (height) {
    console.log("YAY! Height is defined");
} else {
    console.log("Height is UNDEFINED")
}*/

// Equality Operator == vs. ===

/*const age = "18";
if (age === 18) console.log("You just became an adult (strick");

if (age == 18) console.log("You just became an adult (loose)");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // "23" == 23, 23 === 23
    console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
    console.log("7 is also a cool number!")
} else if (favourite === 9) {
    console.log("9 is also a cool number!")
} else {
    console.log("Number is not 23 or 7")
}

if (favourite !== 23) console.log("Why not 23?");
*/

// Boolean Logic: The AND, OR & NOT operators
// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision); // AND operator
// console.log(hasDriversLicense || hasGoodVision); // OR operator
// console.log(!hasDriversLicense); // NOT operator

// if (hasDriversLicense && hasGoodVision) {
//     console.log(" Sarah is able to drive!");
// } else {
//     console.log("Someone else should drive...");
// }

// const isTired = false; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log(" Sarah is able to drive!");
// } else {
//     console.log("Someone else should drive...");
// }

// Switch Statement
// const day = "saturday";

// switch(day) {
//     case "monday": // day === "monday"
//         console.log("Plan course structure");
//         console.log("Go to coding meetup");
//         break;
//     case "tuesday":
//         console.log("Prepare theory videos");
//         break;
//     case "wednesday":
//     case "thursday":
//         console.log("Write code examples");
//         break;
//     case "friday": 
//         console.log("Record videos");
//         break;
//     case "saturday":
//     case "sunday":
//         console.log("Enjoy the weekend :D");
//         break;
//     default:
//         console.log("Not a valid day!");
// }

// Challenge use an if statement for the above switch statement example
// if (day === "monday") {
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
// } else if (day === "tuesday") {
//     console.log("Prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//     console.log("Write code examples");
// } else if (day === "friday") {
//     console.log("Record videos")
// } else if (day === "saturday" || day === "sunday") {
//     console.log("Enjoy the weekend :D");
// } else {
//     console.log("Not a valid day!");
// }

// The Conditional (Ternary) Operator
const age = 15;

age >= 18 ? console.log("I like to drink wine 🍷") : 
console.log("I like to drink water 💧");

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);

